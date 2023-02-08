import { useGetViewConfigQuery } from "@saleor/graphql";
import { mapEdgesToItems } from "@saleor/utils/maps";
import { useMemo } from "react";
const fakeData = (id: string) => {
  if (id === "wfh_request") {
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
  const { data } = useGetViewConfigQuery({
    variables: {
      code: "601",
    },
  });
  const reponse = useMemo(() => {
    if (id === "wfh_request") {
      return fakeData(id);
    }
    if (id === "device_request") {
      return {
        type: "board",
        data: mapEdgesToItems(data?.TaskBoard_connection),
        viewConfig: [
          "Request",
          "PM Approve",
          "Sale Approve",
          "Customer Approve",
          "IT Approve",
          "Done",
        ],
      };
    }
    if (id === "change_office_request") {
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
  }, [data?.TaskBoard_connection, id]);
  return reponse;
}
