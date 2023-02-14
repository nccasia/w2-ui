import { GetTasksQuery, useGetTasksQuery } from "@saleor/graphql";
import useNavigator from "@saleor/hooks/useNavigator";
import usePaginator, {
  createPaginationState,
  PaginatorContext,
} from "@saleor/hooks/usePaginator";
import TaskCreation from "@saleor/taskboard/components/TaskCreation/TaskCreation";
import TaskListPage from "@saleor/taskboard/components/TaskListPage";
import {
  modalNewTaskUrl,
  TaskListUrlDialog,
  TaskListUrlQueryParams,
} from "@saleor/taskboard/urls";
import createDialogActionHandlers from "@saleor/utils/handlers/dialogActionHandlers";
import { parse as parseQs } from "qs";
import React from "react";

interface TaskListProps {
  params: TaskListUrlQueryParams;
  id: string;
  variables: GetTasksQuery;
}

export const TaskList: React.FC<TaskListProps> = ({
  params,
  id,
  variables,
}) => {
  const navigate = useNavigator();
  const { channel } = {
    channel: undefined,
  };
  const qs = parseQs(location);
  const paginationState = createPaginationState(5, params);
  const { data } = useGetTasksQuery({
    variables,
  });

  const paginationValues = usePaginator({
    pageInfo: data?.Task_connection.pageInfo,
    paginationState,
    queryString: qs,
  });
  // eslint-disable-next-line no-console
  console.log(
    "\x1b[44m%s\x1b[0m",
    "TaskList.tsx line:41 paginationValues",
    paginationValues,
    qs,
    paginationState,
  );

  const noTaskType = !channel && typeof channel !== "undefined";
  const [openModal, closeModal] = createDialogActionHandlers<
    TaskListUrlDialog,
    TaskListUrlQueryParams
  >(navigate, modalNewTaskUrl, params, id);

  return (
    <>
      <PaginatorContext.Provider value={paginationValues}>
        <TaskListPage onAdd={() => openModal("create-task")} id={id} />
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
