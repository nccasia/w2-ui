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
}

const FormConfirm: React.FC<FormConfirmProps> = ({ onConfirm }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <FormSchema formId="Q2hhbm5lbDoxMg==" onSubmit={onConfirm} />
    </div>
  );
};

export default FormConfirm;
