import { useGetResourceList } from "@saleor/hooks/useGetResourceList";
import React from "react";
import { useField } from "uniforms";
import { AutoFieldProps, SelectField } from "uniforms-material";

type Props = AutoFieldProps;

const SelectResourceField: React.FC<Props> = (props: Props) => {
  const [fieldProps] = useField(props.name, props);
  const { options } = useGetResourceList(fieldProps?.field?.uniforms?.resource);

  return (
    <>
      {/* @ts-ignore */}
      <SelectField {...props} options={options} />
    </>
  );
};

export default SelectResourceField;
