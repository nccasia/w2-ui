import { useFormSchema } from "@saleor/hooks/useFormSchema";
import { makeStyles } from "@saleor/macaw-ui";
import React, { useEffect, useMemo, useState } from "react";
import { AutoForm } from "uniforms-material";

interface PropsFormSchema {
  formId: string;
  onSubmit?: any;
  readonly?: boolean;
  modelData?: any;
}

const useStyles = makeStyles(
  () => ({
    root: {
      "& .MuiButtonBase-root": {
        display: "none",
      },
      "& .MuiInputBase-root:hover": {
        boxShadow: "none",
      },
      "& .ql-toolbar": {
        display: "none",
      },
      "& .quill": {
        maxHeight: 50,
      },
      "& .ql-container": {
        border: "none",
      },
      "& .MuiOutlinedInput-inputMarginDense": {
        paddingTop: "25px!important",
        paddingBottom: "10px!important",
      },
      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
      "& .QuillEditor-root-323": {
        border: "none",
      },
      "& .MuiFormControl-root": {
        display: "inline-block",
        width: "50% !important",
      },
    },
  }),
  { name: "FormSchema" },
);

export function FormSchema(props: PropsFormSchema) {
  const classes = useStyles();
  const [classForm, setClassForm] = useState(null);
  const { bridge } = useFormSchema(props.formId);
  const model = useMemo(() => {
    if (props.modelData) {
      return props.modelData;
    } else {
      return;
    }
  }, [props]);

  useEffect(() => {
    setClassForm(props.readonly ? classes.root : "");
  }, [classes.root, props.readonly]);

  return (
    <div className={classForm}>
      {bridge && (
        <AutoForm
          schema={bridge}
          onSubmit={props.onSubmit}
          readOnly={props.readonly}
          model={model}
        />
      )}
    </div>
  );
}
