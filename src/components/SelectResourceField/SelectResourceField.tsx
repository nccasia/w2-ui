import { useGetResourceList } from "@saleor/hooks/useGetResourceList";
import React from "react";
import { AutoFieldProps, SelectField } from "uniforms-material";

type Props = AutoFieldProps;

const SelectResourceField: React.FC<Props> = (props: Props) => {
  const { options } = useGetResourceList(props.name);

  return (
    <>
      {/* @ts-ignore */}
      <SelectField {...props} options={options} />
    </>
  );
};

export default SelectResourceField;
