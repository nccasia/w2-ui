import { Box, Modal } from "@material-ui/core";
import useModalDialogOpen from "@saleor/hooks/useModalDialogOpen";
import { styleModal } from "@saleor/styles/modal";
import React from "react";

import FormCreateTask from "../FormCreateTask/FormCreateTask";

export interface TaskCreationProps {
  open: boolean;
  onClose: () => void;
  checkType: string;
}

const TaskCreation: React.FC<TaskCreationProps> = ({
  open,
  onClose,
  checkType,
}) => {
  useModalDialogOpen(open, {
    onClose: () => {
      return;
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
          <FormCreateTask onClose={onClose} checkType={checkType} />
        </Box>
      </Modal>
    </>
  );
};
TaskCreation.displayName = "TaskCreation";
export default TaskCreation;
