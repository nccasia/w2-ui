import Decorator from "@saleor/storybook/Decorator";
import { TaskNewRequest } from "@saleor/tasks/views/TaskList";
import { storiesOf } from "@storybook/react";
import React from "react";

import TaskTypePickerDialog, {
  TaskTypePickerDialogProps,
} from "./TaskTypePickerDialog";

const props: TaskTypePickerDialogProps = {
  onClose: () => undefined,
  open: true,
  TypeChoices: [],
  onNewRequest(_data: TaskNewRequest, _type: string): void {
    throw new Error("Function not implemented.");
  },
};

storiesOf("Views / Type / Settings dialog", module)
  .addDecorator(Decorator)
  .add("default", () => <TaskTypePickerDialog {...props} />);
