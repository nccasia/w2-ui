import { useFormSchema } from "@saleor/hooks/useFormSchema";
import { makeStyles } from "@saleor/macaw-ui";
import clsx from "clsx";
import React, { useMemo } from "react";
import {
  AutoField,
  AutoForm,
  ErrorField,
  SubmitField,
} from "uniforms-material";

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
        columnGap: "10px",
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

  let content;
  const schemaTitle = bridge?.schema?.title;
  switch (schemaTitle) {
    case "Device request": {
      content = (
        <>
          <AutoField name="device" />
          <ErrorField
            name="device.0.type"
            errorMessage="You must select a device type"
          />
          <ErrorField
            name="device.0.detail"
            errorMessage="You must enter some details about the device"
          />
          <ErrorField name="device.0.quantity" />
          <AutoField name="currentOffice" />
          <ErrorField
            name="currentOffice"
            errorMessage="You must select your current office"
          />
          <AutoField name="dueDate" />
          <ErrorField
            name="dueDate"
            errorMessage="You must select a due date"
          />
          <AutoField name="content" />
          <ErrorField
            name="content"
            errorMessage="You must enter some content"
          />
          <SubmitField />
        </>
      );
      break;
    }
    case "Change Office Request": {
      content = (
        <>
          <AutoField name="currentOffice" />
          <ErrorField
            name="currentOffice"
            errorMessage="You must select your current office"
          />
          <AutoField name="destinationOffice" />
          <ErrorField
            name="destinationOffice"
            errorMessage="You must select your destination office"
          />
          <AutoField name="dueDate" />
          <ErrorField
            name="dueDate"
            errorMessage="You must select a due date"
          />
          <AutoField name="content" />
          <ErrorField
            name="content"
            errorMessage="You must enter some content"
          />
          <SubmitField />
        </>
      );
      break;
    }
    case "WFH Request": {
      content = (
        <>
          <AutoField name="dueDateStart" />
          <ErrorField
            name="dueDateStart"
            errorMessage="You must select a start date of your WFH request"
          />
          <AutoField name="dueDateEnd" />
          <ErrorField
            name="dueDateEnd"
            errorMessage="You must select an end date of your WFH request"
          />
          <AutoField name="content" />
          <ErrorField
            name="content"
            errorMessage="You must enter some content"
          />
          <SubmitField />
        </>
      );
      break;
    }
    case "Decision": {
      content = (
        <>
          <AutoField name="approval" />
          <ErrorField
            name="approval"
            errorMessage="You must either approve or reject the request"
          />
          <AutoField name="reason" />
          <ErrorField
            name="reason"
            errorMessage="You must specify a reason for your action"
          />
          <SubmitField />
        </>
      );
      break;
    }
    default:
      content = "";
      break;
  }

  return (
    <div className={clsx({ [classes.root]: props.readonly })}>
      {bridge && (
        <AutoForm
          schema={bridge}
          onSubmit={props.onSubmit}
          readOnly={props.readonly}
          model={model}
        >
          {content}
        </AutoForm>
      )}
    </div>
  );
}
