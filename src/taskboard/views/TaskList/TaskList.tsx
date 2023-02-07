import useNavigator from "@saleor/hooks/useNavigator";
import usePaginator, { PaginatorContext } from "@saleor/hooks/usePaginator";
import TaskCreation from "@saleor/taskboard/components/TaskCreation/TaskCreation";
import TaskListPage from "@saleor/taskboard/components/TaskListPage";
import {
  orderListUrl,
  TaskListUrlDialog,
  TaskListUrlQueryParams,
} from "@saleor/taskboard/urls";
import createDialogActionHandlers from "@saleor/utils/handlers/dialogActionHandlers";
import React from "react";

interface TaskListProps {
  params: TaskListUrlQueryParams;
  id: string;
}

export const TaskList: React.FC<TaskListProps> = ({ params, id }) => {
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
        <TaskListPage onAdd={() => openModal("create-task")} id={id} />
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
