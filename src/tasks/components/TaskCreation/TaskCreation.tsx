import { Box, Modal } from "@material-ui/core";
import { Choice } from "@saleor/components/SingleSelectField";
import useChoiceSearch from "@saleor/hooks/useChoiceSearch";
import useModalDialogOpen from "@saleor/hooks/useModalDialogOpen";
import { styleModal } from "@saleor/styles/modal";
import React from "react";

import FormCreateTask from "../FormCreateTask/FormCreateTask";

export interface TaskCreationProps {
  TypeChoices: Array<Choice<string, string>>;
  open: boolean;
  onClose: () => void;
}

const TaskCreation: React.FC<TaskCreationProps> = ({
  TypeChoices = [],
  open,
  onClose,
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
          <FormCreateTask typeList={result} onClose={onClose} />
        </Box>
      </Modal>
    </>
  );
};
TaskCreation.displayName = "TaskCreation";
export default TaskCreation;
