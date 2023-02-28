// import { useGetResourceList } from "@saleor/hooks/useGetResourceList";
import React, { useCallback } from "react";
import { useField } from "uniforms";
import { AutoFieldProps, DateField } from "uniforms-material";

type Props = AutoFieldProps;

const CustomDateField: React.FC<Props> = (props: Props) => {
  const [fieldProps] = useField(props.name, props);

  const newProps = { ...fieldProps };
  const handleOnChange = useCallback(
    value => {
      if (fieldProps.field.type === "string") {
        let newValue = value;
        if (value instanceof Date && isFinite(value.getTime())) {
          newValue = value.toISOString();
        }
        fieldProps.onChange(newValue);
      }
    },
    [props, fieldProps],
  );
  newProps.onChange = handleOnChange;
  if (fieldProps.field.type === "string") {
    newProps.value = new Date("" + newProps.value);
    newProps.type = "date";
    if (
      !(newProps.value instanceof Date && isFinite(newProps.value.getTime()))
    ) {
      newProps.value = null;
    }
  }

  return (
    <>
      {/* @ts-ignore */}
      <DateField {...newProps} />
    </>
  );
};

export default CustomDateField;
