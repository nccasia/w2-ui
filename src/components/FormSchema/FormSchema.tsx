import React from "react";
import { AutoFormProps } from "uniforms";
import { AutoForm } from "uniforms-material";

type Props<T> = AutoFormProps<T>;

export function FormSchema<T = any>(props: Props<T>) {
  return <AutoForm {...props} />;
}
