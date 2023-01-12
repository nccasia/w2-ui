import { FormSchema } from "@saleor/components/FormSchema/FormSchema";
import { makeStyles } from "@saleor/macaw-ui";
import React from "react";

const useStyles = makeStyles(
  () => ({
    container: {
      width: "98%",
      margin: "0 auto",
    },
    input: {
      width: "100%",
    },
  }),
  { name: "FormConfirm" },
);

interface FormConfirmProps {
  onConfirm: (event: any) => void;
  formId?: number;
}

const FormConfirm: React.FC<FormConfirmProps> = ({ onConfirm, formId }) => {
  const classes = useStyles();
  // fix sau
  return (
    <div className={classes.container}>
      <FormSchema onSubmit={onConfirm} readonly={false} formId={formId} />
    </div>
  );
};

export default FormConfirm;
