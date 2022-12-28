import Decorator from "@saleor/storybook/Decorator";
import { storiesOf } from "@storybook/react";
import React from "react";

import TaskTypePickerDialog, {
  TaskTypePickerDialogProps,
} from "./TaskTypePickerDialog";

const props: TaskTypePickerDialogProps = {
  onClose: () => undefined,
  open: true,
  TypeChoices: [],
};

storiesOf("Views / Type / Settings dialog", module)
  .addDecorator(Decorator)
  .add("default", () => <TaskTypePickerDialog {...props} />);
