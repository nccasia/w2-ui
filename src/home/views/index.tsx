import { useUser } from "@saleor/auth";
import { channelsListUrl } from "@saleor/channels/urls";
import useAppChannel from "@saleor/components/AppLayout/AppChannelContext";
import {
  OrderStatusFilter,
  StockAvailability,
  useHomeQuery,
} from "@saleor/graphql";
import { IActivityAction } from "@saleor/type/Task";
import { mapEdgesToItems } from "@saleor/utils/maps";
import React from "react";

import { getDatePeriod, getUserName } from "../../misc";
import { orderListUrl } from "../../orders/urls";
import { productListUrl } from "../../products/urls";
import HomePage from "../components/HomePage";

const acti: IActivityAction[] = [
  {
    id: 1,
    typeAction: "Activity 1",
    user: {
      id: 1,
      username: "admin",
      avatar:
        "https://i.pinimg.com/originals/5a/21/1e/5a211ed585466597727c493653deb6dc.jpg",
    },
    date: "2022/12/07 10:00",
  },
  {
    id: 2,
    typeAction: "Activity 2",
    user: {
      id: 1,
      username: "admin",
      avatar:
        "https://i.pinimg.com/originals/5a/21/1e/5a211ed585466597727c493653deb6dc.jpg",
    },
    date: "2022/12/06",
  },
  {
    id: 3,
    typeAction: "Activity 3",
    user: {
      id: 1,
      username: "admin",
      avatar:
        "https://i.pinimg.com/originals/5a/21/1e/5a211ed585466597727c493653deb6dc.jpg",
    },
    date: "2022/12/04",
  },
];
const HomeSection = () => {
  const { user } = useUser();
  const { channel } = useAppChannel();

  const noChannel = !channel && typeof channel !== "undefined";

  const { data } = useHomeQuery({
    displayLoader: true,
    skip: noChannel,
    variables: { channel: channel?.slug, datePeriod: getDatePeriod(1) },
  });

  return (
    <HomePage
      activities={acti}
      orders={data?.ordersToday?.totalCount}
      sales={data?.salesToday?.gross}
      topProducts={mapEdgesToItems(data?.productTopToday)}
      createNewChannelHref={channelsListUrl()}
      ordersToCaptureHref={orderListUrl({
        status: [OrderStatusFilter.READY_TO_CAPTURE],
        channel: [channel?.id],
      })}
      ordersToFulfillHref={orderListUrl({
        status: [OrderStatusFilter.READY_TO_FULFILL],
        channel: [channel?.id],
      })}
      productsOutOfStockHref={productListUrl({
        stockStatus: StockAvailability.OUT_OF_STOCK,
        channel: channel?.slug,
      })}
      ordersToCapture={data?.ordersToCapture?.totalCount}
      ordersToFulfill={data?.ordersToFulfill?.totalCount}
      productsOutOfStock={data?.productsOutOfStock.totalCount}
      userName={getUserName(user, true)}
      noChannel={noChannel}
    />
  );
};

export default HomeSection;
