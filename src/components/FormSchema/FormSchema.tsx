import { useFormSchema } from "@saleor/hooks/useFormSchema";
import { makeStyles } from "@saleor/macaw-ui";
import clsx from "clsx";
import React, { useMemo } from "react";
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
      "& form>.MuiButtonBase-root": {
        display: "none",
      },
      "& .MuiListSubheader-root": {
        display: "none",
      },
      "& .MuiInputBase-root:hover": {
        boxShadow: "none",
      },
      "& .ql-editor": {
        maxHeight: 600,
      },
      "& .ql-toolbar": {
        display: "none",
      },
      "& .ql-container": {
        border: "none",
      },
      "& .MuiOutlinedInput-inputMarginDense": {
        paddingTop: "25px!important",
        paddingBottom: "10px!important",
      },
      "& .MuiListItem-root>.MuiFormControl-root": {
        display: "flex",
        flexDirection: "inherit !important",
      },
      "& form>.MuiFormControl-root": {
        display: "inline-flex",
      },
      "& form>.MuiFormControl-root>.MuiInputBase-root>fieldset": {
        border: "none",
      },
      "& .MuiFormControl-root>.MuiButtonBase-root": {
        display: "none",
      },
      "& .MuiListItem-root>.MuiButtonBase-root ": {
        display: "none",
      },
      "& .MuiInputBase-root>.MuiSvgIcon-root ": {
        display: "none",
      },
    },
  }),
  { name: "FormSchema" },
);

export function FormSchema(props: PropsFormSchema) {
  const classes = useStyles();
  const { bridge } = useFormSchema(props.formId);
  const model = useMemo(() => {
    if (props.modelData) {
      return props.modelData;
    } else {
      return;
    }
  }, [props]);

  return (
    <div className={clsx({ [classes.root]: props.readonly })}>
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
