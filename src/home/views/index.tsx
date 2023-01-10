import { useUser } from "@saleor/auth";
import { useGetEventLogsQuery } from "@saleor/graphql/hooks.generated";
import { IQuantityTasks } from "@saleor/type/Task";
import { mapEdgesToItems } from "@saleor/utils/maps";
import React from "react";

import { getUserName } from "../../misc";
import HomePage from "../components/HomePage";

const quantity: IQuantityTasks = {
  pending: 5,
  done: 6,
};
const HomeSection = () => {
  const { user } = useUser();
  const { channel } = { channel: undefined };
  const noChannel = !channel && typeof channel !== "undefined";

  const { dataHomePage } = { dataHomePage: undefined };

  const { data } = useGetEventLogsQuery({
    variables: {},
  });
  return (
    <HomePage
      eventLog={data}
      quantityTasks={quantity}
      sales={dataHomePage?.salesToday?.gross}
      topTasks={mapEdgesToItems(dataHomePage?.tasksTopToday)}
      createNewChannelHref={"/"}
      tasksToCapture={dataHomePage?.tasksToCapture?.totalCount}
      tasksToFulfill={dataHomePage?.tasksToFulfill?.totalCount}
      tasksOutOfStock={dataHomePage?.tasksOutOfStock.totalCount}
      userName={getUserName(user, true)}
      noChannel={noChannel}
    />
  );
};

export default HomeSection;
