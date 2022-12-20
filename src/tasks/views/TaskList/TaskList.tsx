import ChannelPickerDialog from "@saleor/channels/components/ChannelPickerDialog";
import useAppChannel from "@saleor/components/AppLayout/AppChannelContext";
import useNavigator from "@saleor/hooks/useNavigator";
import useNotifier from "@saleor/hooks/useNotifier";
import { typeTaskMock } from "@saleor/tasks/__mock__/typeTask";
import TaskListPage from "@saleor/tasks/components/TaskListPage";
import { Task } from "@saleor/tasks/interface/Task";
import {
  orderListUrl,
  TaskListUrlDialog,
  TaskListUrlQueryParams,
} from "@saleor/tasks/urls";
import createDialogActionHandlers from "@saleor/utils/handlers/dialogActionHandlers";
import { mapNodeToChoice } from "@saleor/utils/maps";
import React from "react";
import { useIntl } from "react-intl";

interface TaskListProps {
  params: TaskListUrlQueryParams;
}

export const TaskList: React.FC<TaskListProps> = ({ params }) => {
  const navigate = useNavigator();
  const notify = useNotifier();
  const intl = useIntl();

  const { channel, availableChannels } = useAppChannel(false);

  // mock api type
  // eslint-disable-next-line no-console
  console.log(availableChannels.length, typeTaskMock.length);
  const channelOpts = typeTaskMock ? mapNodeToChoice(typeTaskMock) : null;

  const noChannel = !channel && typeof channel !== "undefined";
  const [openModal, closeModal] = createDialogActionHandlers<
    TaskListUrlDialog,
    TaskListUrlQueryParams
  >(navigate, orderListUrl, params);

  const handleNewTask = (newTask: Task) => {
    if (newTask.name && newTask.userName && newTask.createdDate) {
      // eslint-disable-next-line no-console
      console.log(
        "🚀 ~ file: TaskList.tsx:42 ~ handleNewTask ~ newTask",
        newTask,
      );
      notify({
        status: "success",
        text: intl.formatMessage({
          id: "DjX+GE",
          defaultMessage: "Task successfully created",
        }),
      });
      closeModal();
    } else {
      notify({
        status: "error",
        text: intl.formatMessage({
          id: "NLk0e7",
          defaultMessage: "Task failed created",
        }),
      });
    }
  };

  return (
    <>
      <TaskListPage onAdd={() => openModal("create-task")} />
      {!noChannel && (
        <ChannelPickerDialog
          channelsChoices={channelOpts}
          confirmButtonState="success"
          // defaultChoice={channel.id}
          open={params.action === "create-task"}
          onClose={closeModal}
          onConfirm={newTask => handleNewTask(newTask)}
        />
      )}
    </>
  );
};

export default TaskList;
