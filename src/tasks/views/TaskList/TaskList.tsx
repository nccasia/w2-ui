import useAppChannel from "@saleor/components/AppLayout/AppChannelContext";
import useNavigator from "@saleor/hooks/useNavigator";
import { typeTaskMock } from "@saleor/tasks/__mock__/typeTask";
import TaskTypePickerDialog from "@saleor/tasks/components/ChannelPickerDialog/TaskTypePickerDialog";
import TaskListPage from "@saleor/tasks/components/TaskListPage";
import {
  orderListUrl,
  TaskListUrlDialog,
  TaskListUrlQueryParams,
} from "@saleor/tasks/urls";
import createDialogActionHandlers from "@saleor/utils/handlers/dialogActionHandlers";
import { mapNodeToChoice } from "@saleor/utils/maps";
import React from "react";

interface TaskListProps {
  params: TaskListUrlQueryParams;
}

export const TaskList: React.FC<TaskListProps> = ({ params }) => {
  const navigate = useNavigator();

  const { channel, availableChannels } = useAppChannel(false);

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
      <TaskListPage onAdd={() => openModal("create-task")} />
      {!noTaskType && (
        <TaskTypePickerDialog
          TypeChoices={channelOpts}
          open={params.action === "create-task"}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default TaskList;
