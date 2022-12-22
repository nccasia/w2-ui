import { channelsList } from "@saleor/channels/fixtures";
import Decorator from "@saleor/storybook/Decorator";
import { mapNodeToChoice } from "@saleor/utils/maps";
import { storiesOf } from "@storybook/react";
import React from "react";

import TaskTypePickerDialog, {
  TaskTypePickerDialogProps,
} from "./TaskTypePickerDialog";

const channelsChoices = mapNodeToChoice(channelsList);

const props: TaskTypePickerDialogProps = {
  channelsChoices,
  confirmButtonState: "default",
  onClose: () => undefined,
  onConfirm: () => undefined,
  open: true,
};

storiesOf("Views / Type / Settings dialog", module)
  .addDecorator(Decorator)
  .add("default", () => <TaskTypePickerDialog {...props} />);
