import { TextField } from "@material-ui/core";
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

const FormConfirm = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <TextField label={"Reason"} className={classes.input} />
    </div>
  );
};

export default FormConfirm;
