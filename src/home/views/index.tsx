import { useUser } from "@saleor/auth";
import {
  useGetEventLogsQuery,
  useGetMyCreatedTaskCountQuery,
  useGetMyParticipatedTaskCountQuery,
} from "@saleor/graphql/hooks.generated";
import { useTopTaskFeatured } from "@saleor/hooks/useTopTaskFeatured";
import { mapEdgesToItems } from "@saleor/utils/maps";
import React, { useMemo } from "react";

import { getUserName } from "../../misc";
import HomePage from "../components/HomePage";

const HomeSection = () => {
  const { user } = useUser();
  const { channel } = { channel: undefined };
  const noChannel = !channel && typeof channel !== "undefined";

  const { data } = useGetEventLogsQuery();
  const mapEdgesToEventLogs = mapEdgesToItems(data?.EventLog_connection);

  const { topTasks } = useTopTaskFeatured();

  const { data: myCreatedTaskCountData } = useGetMyCreatedTaskCountQuery({
    variables: { userId: user?.id, status: ["DOING"] },
  });
  const {
    data: myParticipatedTaskCountData,
  } = useGetMyParticipatedTaskCountQuery({
    variables: { userId: user?.id, status: ["DOING"] },
  });

  const myCreatedtaskCount = useMemo(() => {
    if (myCreatedTaskCountData?.node?.__typename === "User") {
      return myCreatedTaskCountData?.node?.tasksByCreatorid_aggregate.aggregate
        ?.count;
    }
    return 0;
  }, [myCreatedTaskCountData]);

  const myParticipatedTaskCount = useMemo(() => {
    if (myParticipatedTaskCountData?.node?.__typename === "User") {
      return myParticipatedTaskCountData?.node?.Tasks_aggregate.aggregate
        ?.count;
    }
    return 0;
  }, [myParticipatedTaskCountData]);

  return (
    <HomePage
      // @ts-ignore
      eventLog={mapEdgesToEventLogs}
      myCreatedtaskCount={myCreatedtaskCount}
      myParticipatedTaskCount={myParticipatedTaskCount}
      sales={0}
      topTasks={topTasks}
      createNewChannelHref={"/"}
      tasksToCapture={0}
      tasksToFulfill={0}
      tasksOutOfStock={0}
      userName={getUserName(user, true)}
      noChannel={noChannel}
      tasksToCaptureHref="/taskboard/wfh-request"
      tasksOutOfStockHref="/taskboard/change-office-request"
      tasksToFulfillHref="/taskboard/device-request"
    />
  );
};

export default HomeSection;
