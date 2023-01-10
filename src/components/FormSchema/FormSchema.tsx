import { useFormSchema } from "@saleor/hooks/useFormSchema";
import { makeStyles } from "@saleor/macaw-ui";
import React, { useEffect, useRef } from "react";
import { AutoForm } from "uniforms-material";

interface PropsFormSchema {
  formId: string;
  onSubmit: (event: any) => void;
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
  const { formId, onSubmit } = props;
  const { bridge } = useFormSchema(formId);
  const classes = useStyles();
  const ref = useRef();

  useEffect(() => {
    return ref.current;
  }, [ref.current]);
  return (
    <div className={classes.root}>
      {bridge ? (
        <AutoForm schema={bridge} onSubmit={onSubmit} ref={ref} />
      ) : (
        <></>
      )}
    </div>
  );
}
