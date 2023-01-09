import { useFormSchema } from "@saleor/hooks/useFormSchema";
import React from "react";
import { AutoForm } from "uniforms-material";

interface PropsFormSchema {
  formId: number;
  onSubmit: any;
}

export function FormSchema(props: PropsFormSchema) {
  const { bridge } = useFormSchema(props.formId);
  return (
    <>{bridge && <AutoForm schema={bridge} onSubmit={props.onSubmit} />}</>
  );
}
