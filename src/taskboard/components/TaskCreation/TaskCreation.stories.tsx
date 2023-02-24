import Decorator from "@saleor/storybook/Decorator";
import { storiesOf } from "@storybook/react";
import React from "react";

import TaskCreation, { TaskCreationProps } from "./TaskCreation";

const props: TaskCreationProps = {
  onClose: () => undefined,
  open: true,
};

storiesOf("Views / Type / Settings dialog", module)
  .addDecorator(Decorator)
  .add("default", () => <TaskCreation {...props} />);
