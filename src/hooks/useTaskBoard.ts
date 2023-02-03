import { useGetTasksQuery } from "@saleor/graphql";
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
  const { data } = useGetTasksQuery();
  const reponse = useMemo(() => {
    // eslint-disable-next-line no-console
    console.log("-v-v->", mapEdgesToItems(data?.Task_connection));
    if (id === "wfh-request") {
      return fakeData(id);
    }
    if (id === "device-request") {
      return {
        type: "board",
        data: mapEdgesToItems(data?.Task_connection),
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
    if (id === "change-office-request") {
      return {
        type: "board",
        data: mapEdgesToItems(data?.Task_connection),
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
  }, [id]);
  return reponse;
}
