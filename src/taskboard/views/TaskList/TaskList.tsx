import { useUser } from "@saleor/auth";
import { TaskFragmentFragment, useGetMyTasksLazyQuery } from "@saleor/graphql";
import useNavigator from "@saleor/hooks/useNavigator";
import usePaginator, {
  PaginationState,
  PaginatorContext,
} from "@saleor/hooks/usePaginator";
import { useTaskBoard } from "@saleor/hooks/useTaskBoard";
import TaskCreation from "@saleor/taskboard/components/TaskCreation/TaskCreation";
import TaskListPage from "@saleor/taskboard/components/TaskListPage";
import {
  modalNewTaskUrl,
  TaskListUrlDialog,
  TaskListUrlQueryParams,
} from "@saleor/taskboard/urls";
import createDialogActionHandlers from "@saleor/utils/handlers/dialogActionHandlers";
import { mapEdgesToItems } from "@saleor/utils/maps";
import React, { useEffect, useMemo } from "react";

interface TaskListProps {
  params: TaskListUrlQueryParams;
  id: string;
  variables: PaginationState;
  qs: any;
}

export const TaskList: React.FC<TaskListProps> = ({
  params,
  id,
  variables,
}) => {
  const user = useUser();
  const navigate = useNavigator();
  const { channel } = {
    channel: undefined,
  };
  const dataTaskBoard = useTaskBoard(id);
  // const { data } = useGetTasksQuery({
  //   variables,
  // });

  const newVariables = useMemo(() => {
    if (user.user.userId) {
      return {
        ...variables,
        id: user.user.userId,
      };
    }
  }, [user.user?.userId]);
  const [fetchMyTask, { data }] = useGetMyTasksLazyQuery();

  const paginationValues = usePaginator({
    pageInfo: data?.Task_connection.pageInfo,
    paginationState: newVariables,
    queryString: {},
  });
  // eslint-disable-next-line no-console
  // console.log('fethMyTask', myTask)
  // console.log(
  //   "\x1b[44m%s\x1b[0m",
  //   "TaskList.tsx line:41 paginationValues",
  //   paginationValues, 'variable', {
  //   ...variables,
  //   _eq: user.user?.userId
  // },
  //   'userr', user,
  //   "id",
  //   id, myTask
  // );
  // eslint-disable-next-line no-console
  // console.log("data", data?.Task_connection.edges, "vari", variables);

  const noTaskType = !channel && typeof channel !== "undefined";
  const [openModal, closeModal] = createDialogActionHandlers<
    TaskListUrlDialog,
    TaskListUrlQueryParams
  >(navigate, modalNewTaskUrl, params, id);
  // eslint-disable-next-line no-console
  // console.log("123", mapEdgesToItems(data?.Task_connection));

  useEffect(() => {
    if (user.user.userId) {
      fetchMyTask({
        variables: newVariables,
      });
    }
  }, [variables]);
  return (
    <>
      <PaginatorContext.Provider value={paginationValues}>
        <TaskListPage
          onAdd={() => openModal("create-task")}
          data={
            (mapEdgesToItems(
              data?.Task_connection,
            ) as unknown) as TaskFragmentFragment[]
          }
          dataTaskBoard={dataTaskBoard}
        />
        {!noTaskType && (
          <TaskCreation
            open={params.action === "create-task"}
            onClose={closeModal}
            id={id}
          />
        )}
      </PaginatorContext.Provider>
    </>
  );
};

export default TaskList;
