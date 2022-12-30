import { useUser } from "@saleor/auth";
import { IActivityAction, IQuantityTasks } from "@saleor/type/Task";
import { mapEdgesToItems } from "@saleor/utils/maps";
import React from "react";

import { getDatePeriod, getUserName } from "../../misc";
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

const quantity: IQuantityTasks = {
  pending: 5,
  done: 6,
};
const HomeSection = () => {
  const { user } = useUser();
  const { channel } = { channel: undefined };

  const noChannel = !channel && typeof channel !== "undefined";

  const { data } = { data: undefined }

  return (
    <HomePage
      activities={acti}
      quantityTasks={quantity}
      sales={data?.salesToday?.gross}
      topProducts={mapEdgesToItems(data?.productTopToday)}
      createNewChannelHref={"/"}
      ordersToCapture={data?.ordersToCapture?.totalCount}
      ordersToFulfill={data?.ordersToFulfill?.totalCount}
      productsOutOfStock={data?.productsOutOfStock.totalCount}
      userName={getUserName(user, true)}
      noChannel={noChannel}
    />
  );
};

export default HomeSection;
