import { handleSchema, useSchemaAction } from "@saleor/hooks/useSchemaAction";
import React from "react";
import { AutoForm } from "uniforms-material";

interface PropsFormSchema {
  formId: string;
  onSubmit: any;
}

export function FormSchema(props: PropsFormSchema) {
  handleSchema(props.formId);
  const { bridge } = useSchemaAction(props.formId);
  return (
    <>
      {bridge ? <AutoForm schema={bridge} onSubmit={props.onSubmit} /> : <></>}
    </>
  );
}
