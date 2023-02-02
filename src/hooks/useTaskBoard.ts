import { useGetMyTasksQuery, useGetTasksQuery } from "@saleor/graphql";
import { useMemo } from "react";
export function useTaskBoard(id: string) {
  const { data } = useGetTasksQuery();
  const myTasks = useGetMyTasksQuery({
    variables: {
      _eq: +id,
    },
  }).data;

  const reponse = useMemo(() => {
    // eslint-disable-next-line no-console
    console.log("**", id);
    if (id === "wfh-request") {
      // eslint-disable-next-line no-console
      console.log("-v-v->", id, data);
      return {
        type: "board",
        data,
      };
    } else {
      return {
        type: "list",
        data: myTasks,
      };
    }
  }, [id]);
  return reponse;
}
