import { Box, Modal } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CloseIcon from "@material-ui/icons/Close";
import { Choice } from "@saleor/components/SingleSelectField";
import useChoiceSearch from "@saleor/hooks/useChoiceSearch";
import useModalDialogOpen from "@saleor/hooks/useModalDialogOpen";
import { iconClose, iconModal, styleModal } from "@saleor/styles/modal";
import React, { useState } from "react";

import FormStepCreateTask from "./components/FormCreateTask/FormCreateTask";

export interface TaskTypePickerDialogProps {
  TypeChoices: Array<Choice<string, string>>;
  open: boolean;
  onClose: () => void;
}

const TaskTypePickerDialog: React.FC<TaskTypePickerDialogProps> = ({
  TypeChoices = [],
  open,
  onClose,
}) => {
  const [typeTask, setTypeTask] = useState<string>("");
  const { result, search } = useChoiceSearch(TypeChoices);

  const typeName = result.find(item => item.value === typeTask);

  useModalDialogOpen(open, {
    onClose: () => {
      search("");
      setTypeTask("");
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
          <Box sx={iconModal}>
            {typeTask ? (
              <ArrowBackIcon
                style={iconClose}
                onClick={() => setTypeTask("")}
              />
            ) : (
              <>&nbsp;</>
            )}
            {typeName !== null ? <b>{typeName?.label}</b> : <></>}
            <CloseIcon style={iconClose} onClick={() => onClose()} />
          </Box>
          <FormStepCreateTask
            typeList={result}
            fieldTask={typeTask}
            onSetType={setTypeTask}
          />
        </Box>
      </Modal>
    </>
  );
};
TaskTypePickerDialog.displayName = "ChannelPickerDialog";
export default TaskTypePickerDialog;
