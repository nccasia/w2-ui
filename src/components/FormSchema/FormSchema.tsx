/* eslint-disable no-console */
import Form from "@rjsf/material-ui";
import { RJSFSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import React from "react";

interface Props {
  schemaForm: RJSFSchema;
  CustomButton: any;
  uiSchema: any;
  widgets: any;
}

const FormSchema: React.FC<Props> = ({
  schemaForm,
  CustomButton,
  uiSchema,
  widgets,
}) => {
  return (
    <>
      <Form
        schema={schemaForm}
        validator={validator}
        onSubmit={e => console.log(e)}
        templates={CustomButton}
        uiSchema={uiSchema}
        widgets={widgets}
      />
    </>
  );
};

export default FormSchema;
