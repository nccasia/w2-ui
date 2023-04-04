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
import React, { useEffect } from "react";

interface TaskListProps {
  params: TaskListUrlQueryParams;
  id: string;
  variables: PaginationState;
  qs: any;
  setRowNumber?: React.Dispatch<React.SetStateAction<number>>;
}

export const TaskList: React.FC<TaskListProps> = ({
  params,
  id,
  variables,
  setRowNumber,
}) => {
  const user = useUser();
  const navigate = useNavigator();
  const { channel } = {
    channel: undefined,
  };
  const dataTaskBoard = useTaskBoard(id);

  const [fetchMyTask, { data }] = useGetMyTasksLazyQuery();

  const paginationValues = usePaginator({
    pageInfo: data?.Task_connection.pageInfo,
    paginationState: variables,
    queryString: {},
  });

  const noTaskType = !channel && typeof channel !== "undefined";
  const [openModal, closeModal] = createDialogActionHandlers<
    TaskListUrlDialog,
    TaskListUrlQueryParams
  >(navigate, modalNewTaskUrl, params, id);

  useEffect(() => {
    if (user.user.userId) {
      const temp = {
        ...variables,
        id: user.user.userId,
      };
      fetchMyTask({
        variables: temp,
      });
    }
  }, [fetchMyTask, user.user.userId, variables]);

  return (
    <>
      <PaginatorContext.Provider value={{ ...paginationValues, setRowNumber }}>
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
