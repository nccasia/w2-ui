import useAppChannel from "@saleor/components/AppLayout/AppChannelContext";
import useNavigator from "@saleor/hooks/useNavigator";
import usePaginator, { PaginatorContext } from "@saleor/hooks/usePaginator";
import { typeTaskMock } from "@saleor/tasks/__mock__/typeTask";
import TaskListPage from "@saleor/tasks/components/TaskListPage";
import TaskTypePickerDialog from "@saleor/tasks/components/TaskPickerDialog/TaskTypePickerDialog";
import {
  orderListUrl,
  TaskListUrlDialog,
  TaskListUrlQueryParams,
} from "@saleor/tasks/urls";
import createDialogActionHandlers from "@saleor/utils/handlers/dialogActionHandlers";
import { mapNodeToChoice } from "@saleor/utils/maps";
import React from "react";

import { tasks } from "../../__mock__/Task";

interface TaskListProps {
  params: TaskListUrlQueryParams;
}

export const TaskList: React.FC<TaskListProps> = ({ params }) => {
  const navigate = useNavigator();

  const { channel, availableChannels } = useAppChannel(false);

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

  // mock api type
  // eslint-disable-next-line no-console
  console.log(availableChannels.length);
  const channelOpts = typeTaskMock ? mapNodeToChoice(typeTaskMock) : null;
  // --------------

  const noTaskType = !channel && typeof channel !== "undefined";
  const [openModal, closeModal] = createDialogActionHandlers<
    TaskListUrlDialog,
    TaskListUrlQueryParams
  >(navigate, orderListUrl, params);

  return (
    <>
      <PaginatorContext.Provider value={paginationValues}>
        <TaskListPage onAdd={() => openModal("create-task")} tasks={tasks} />
        {!noTaskType && (
          <TaskTypePickerDialog
            TypeChoices={channelOpts}
            open={params.action === "create-task"}
            onClose={closeModal}
          />
        )}
      </PaginatorContext.Provider>
    </>
  );
};

export default TaskList;
