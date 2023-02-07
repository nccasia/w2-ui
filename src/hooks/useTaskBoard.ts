import { useGetViewConfigQuery } from "@saleor/graphql";
import { mapEdgesToItems } from "@saleor/utils/maps";
import { useMemo } from "react";
const fakeData = (id: string) => {
  if (id === "wfh-request") {
    return {
      type: "board",
      viewConfig: [
        "Request",
        "PM Approve",
        "Sale Approve",
        "Customer Approve",
        "IT Approve",
        "Done",
      ],
    };
  } else {
    return {
      type: "board",
      viewConfig: [],
    };
  }
};
export function useTaskBoard(id: string) {
  // const { data } = useGetTasksQuery();
  const { data, error } = useGetViewConfigQuery({
    variables: {
      code: "601",
    },
  });
  const reponse = useMemo(() => {
    if (!data) {
      return {};
    }
    if (id === "wfh-request") {
      return fakeData(id);
    }
    if (id === "device-request") {
      // eslint-disable-next-line no-console
      console.log(666, data, error);
      const cloneData = JSON.parse(JSON.stringify(data));
      // eslint-disable-next-line no-console
      console.log(
        777,
        data,
        cloneData.TaskBoard_connection.edges[0].node.viewConfig.data,
      );
      return cloneData.TaskBoard_connection.edges[0].node.viewConfig.data;
    }
    if (id === "change-office-request") {
      return {
        type: "board",
        data: mapEdgesToItems(data?.TaskBoard_connection),
        viewConfig: [
          "Request",
          "Original Office",
          "Destination Office",
          "Done",
        ],
      };
    } else {
      return {
        type: "list",
        viewConfig: [],
      };
    }
  }, [id, data]);
  return reponse;
}
