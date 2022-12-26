import { Box, Modal } from "@material-ui/core";
import { Choice } from "@saleor/components/SingleSelectField";
import useChoiceSearch from "@saleor/hooks/useChoiceSearch";
import useModalDialogOpen from "@saleor/hooks/useModalDialogOpen";
import { styleModal } from "@saleor/styles/modal";
import { TaskNewRequest } from "@saleor/tasks/views/TaskList";
import React from "react";

import FormStepCreateTask from "./components/FormCreateTask/FormCreateTask";

export interface TaskTypePickerDialogProps {
  TypeChoices: Array<Choice<string, string>>;
  open: boolean;
  onClose: () => void;
  onNewRequest: (data: TaskNewRequest, type: string) => void;
}

const TaskTypePickerDialog: React.FC<TaskTypePickerDialogProps> = ({
  TypeChoices = [],
  open,
  onClose,
  onNewRequest,
}) => {
  const { result, search } = useChoiceSearch(TypeChoices);

  useModalDialogOpen(open, {
    onClose: () => {
      search("");
    },
  });

  return (
    <>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClose={onClose}
      >
        <Box sx={styleModal}>
          <FormStepCreateTask
            typeList={result}
            onClose={onClose}
            onNewRequest={onNewRequest}
          />
        </Box>
      </Modal>
    </>
  );
};
TaskTypePickerDialog.displayName = "ChannelPickerDialog";
export default TaskTypePickerDialog;
