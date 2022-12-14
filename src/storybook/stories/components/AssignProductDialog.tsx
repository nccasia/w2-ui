import AssignProductDialog, {
  AssignProductDialogProps,
} from "@saleor/components/AssignProductDialog";
import { fetchMoreProps } from "@saleor/fixtures";
import { storiesOf } from "@storybook/react";
import React from "react";

import Decorator from "../../Decorator";

const props: AssignProductDialogProps = {
  ...fetchMoreProps,
  confirmButtonState: "default",
  loading: false,
  onClose: () => undefined,
  onFetch: () => undefined,
  onSubmit: () => undefined,
  open: true,
  products: null,
};

storiesOf("Generics / Assign product", module)
  .addDecorator(Decorator)
  .add("default", () => <AssignProductDialog {...props} />);
