import {
  TaskBoardFragmentFragment,
  useGetViewConfigQuery,
} from "@saleor/graphql";
import { useMemo } from "react";
export function useTaskBoard(id: string) {
  const { data } = useGetViewConfigQuery({
    variables: {
      code: "1",
    },
  });
  const reponse = useMemo(() => {
    if (!data) {
      return {} as TaskBoardFragmentFragment;
    }
    if (id === "my-tasks") {
      return {
        viewType: "list",
        viewConfig: {},
      } as TaskBoardFragmentFragment;
    }
    // eslint-disable-next-line no-console
    console.log("11111", data);
    return JSON.parse(
      JSON.stringify(data.TaskBoard_connection.edges[0].node),
    ) as TaskBoardFragmentFragment;
  }, [id, data]);
  return reponse;
}
