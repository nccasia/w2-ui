import { MenuItem, TextField } from "@material-ui/core";
import { useStyles } from "@saleor/apps/styles";
import ActionDialog from "@saleor/components/ActionDialog";
import { Choice } from "@saleor/components/SingleSelectField";
import useChoiceSearch from "@saleor/hooks/useChoiceSearch";
import useModalDialogOpen from "@saleor/hooks/useModalDialogOpen";
import useStateFromProps from "@saleor/hooks/useStateFromProps";
import { Autocomplete, ConfirmButtonTransitionState } from "@saleor/macaw-ui";
import { Task, TaskState, TaskStatus } from "@saleor/tasks/interface/Task";
import React, { useState } from "react";

export interface ChannelPickerDialogProps {
  channelsChoices: Array<Choice<string, string>>;
  confirmButtonState: ConfirmButtonTransitionState;
  open: boolean;
  onClose: () => void;
  onConfirm?: (fieldNewTask: Task) => void;
}

const ChannelPickerDialog: React.FC<ChannelPickerDialogProps> = ({
  channelsChoices = [],
  confirmButtonState,
  open,
  onClose,
  onConfirm,
}) => {
  const classes = useStyles();
  const [choice, setChoice] = useStateFromProps("");
  const idRandom = new Date().getTime();
  const [fieldNewTask, setFieldNewTodo] = useState<Task>({
    id: idRandom.toString(),
    name: "",
    userName: "",
    createdDate: "",
    status: TaskStatus.READY,
    type: choice,
    state: TaskState.WAIT_PM_APPROVE,
  });
  const { result, search } = useChoiceSearch(channelsChoices);

  useModalDialogOpen(open, {
    onClose: () => {
      search("");
      setChoice("");
      setFieldNewTodo({
        ...fieldNewTask,
        name: "",
        userName: "",
        createdDate: "",
      });
    },
  });

  return (
    <ActionDialog
      confirmButtonState={confirmButtonState}
      open={open}
      onClose={onClose}
      onConfirm={() => onConfirm(fieldNewTask)}
    >
      <Autocomplete
        choices={result}
        fullWidth
        data-test-id="channel-autocomplete"
        value={choice}
        onChange={e => setChoice(e.target.value)}
      >
        {({ getItemProps, highlightedIndex }) =>
          result.map((choice, choiceIndex) => (
            <MenuItem
              data-test-id="select-field-option"
              selected={highlightedIndex === choiceIndex}
              key={choice.value}
              {...getItemProps({ item: choice, index: choiceIndex })}
            >
              {choice.label}
            </MenuItem>
          ))
        }
      </Autocomplete>
      {choice && (
        <div className={classes.inputs} style={{ marginTop: "25px" }}>
          <TextField
            onChange={e =>
              setFieldNewTodo({
                ...fieldNewTask,
                name: e.target.value,
              })
            }
            value={fieldNewTask.name}
            label="Task Name"
            fullWidth={true}
          />
          <TextField
            onChange={e =>
              setFieldNewTodo({
                ...fieldNewTask,
                userName: e.target.value,
              })
            }
            value={fieldNewTask.userName}
            label="User"
            fullWidth={true}
          />
          <TextField
            onChange={e =>
              setFieldNewTodo({
                ...fieldNewTask,
                createdDate: e.target.value,
              })
            }
            value={fieldNewTask.createdDate}
            type="datetime-local"
            fullWidth={true}
          />
        </div>
      )}
    </ActionDialog>
  );
};
ChannelPickerDialog.displayName = "ChannelPickerDialog";
export default ChannelPickerDialog;
