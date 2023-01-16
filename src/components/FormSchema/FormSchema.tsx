import { useFormSchema } from "@saleor/hooks/useFormSchema";
import { makeStyles } from "@saleor/macaw-ui";
import React from "react";
import { AutoForm } from "uniforms-material";

interface PropsFormSchema {
  formId: string;
  onSubmit: any;
}

const useStyles = makeStyles(
  () => ({
    root: {
      marginTop: "30px",
      "& > *": {
        margin: "0 0 20px 0",
      },
      "& .MuiOutlinedInput-inputMarginDense": {
        paddingTop: "25px!important",
        paddingBottom: "10px!important",
      },
      "& .MuiButtonBase-root": {
        float: "right",
        background: "#333",
        border: "none",
        color: "#fff",
      },
      "& .MuiListSubheader-root": {
        fontSize: 16,
        lineHeight: 0,
        paddingLeft: 0,
      },
      "& .MuiListItem-root, .MuiListItem-gutters": {
        cursor: "pointer",
        paddingLeft: 0,
        paddingRight: 0,
      },
      "& .MuiListItem-root>.MuiFormControl-root": {
        display: "contents!important",
      },
      "& .MuiListItem-root>.MuiButtonBase-root": {
        padding: "15px 10px",
        background: "#555",
      },
    },
  }),
  { name: "FormCreatedTaskDetail" },
);

export function FormSchema(props: PropsFormSchema) {
  const classes = useStyles();
  const { bridge } = useFormSchema(props.formId);
  return (
    <div className={classes.root}>
      {bridge && <AutoForm schema={bridge} onSubmit={props.onSubmit} />}
    </div>
  );
}
