import usePaginator, { PaginatorContext } from "@saleor/hooks/usePaginator";
import TaskListPage from "@saleor/tasks/components/TaskListPage";
import React from "react";

import { tasks } from "../../__mock__/Task";

export const TaskList: React.FC = () => {
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
  return (
    <PaginatorContext.Provider value={paginationValues}>
      <TaskListPage tasks={tasks} />
    </PaginatorContext.Provider>
  );
};

export default TaskList;
