import useNavigator from "@saleor/hooks/useNavigator";
import usePaginator, { PaginatorContext } from "@saleor/hooks/usePaginator";
import TaskCreation from "@saleor/tasks/components/TaskCreation/TaskCreation";
import TaskListPage from "@saleor/tasks/components/TaskListPage";
import {
  orderListUrl,
  TaskListUrlDialog,
  TaskListUrlQueryParams,
} from "@saleor/tasks/urls";
import createDialogActionHandlers from "@saleor/utils/handlers/dialogActionHandlers";
import React from "react";

interface TaskListProps {
  params: TaskListUrlQueryParams;
}

export const TaskList: React.FC<TaskListProps> = ({ params }) => {
  const navigate = useNavigator();
  const { channel } = {
    channel: undefined,
  };

  const paginationValues = usePaginator({
    pageInfo: {
      endCursor: "WyIxMjcyMyJd",
      hasNextPage: true,
      hasPreviousPage: false,
      startCursor: "WyIxMjc0MiJd",
    },
    paginationState: {
      first: 20,
    },
    queryString: {
      before: "WyIxMjc0MiJd",
      after: "WyIxMjcyMyJd",
    },
  });

  const noTaskType = !channel && typeof channel !== "undefined";
  const [openModal, closeModal] = createDialogActionHandlers<
    TaskListUrlDialog,
    TaskListUrlQueryParams
  >(navigate, orderListUrl, params);

  return (
    <>
      <PaginatorContext.Provider value={paginationValues}>
        <TaskListPage onAdd={() => openModal("create-task")} />
        {!noTaskType && (
          <TaskCreation
            open={params.action === "create-task"}
            onClose={closeModal}
          />
        )}
      </PaginatorContext.Provider>
    </>
  );
};

export default TaskList;
