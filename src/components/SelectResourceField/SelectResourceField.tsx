import { useGetResourceList } from "@saleor/hooks/useGetResourceList";
import React from "react";
import { useField } from "uniforms";
import { AutoFieldProps, SelectField } from "uniforms-material";

type Props = AutoFieldProps;

const SelectResourceField: React.FC<Props> = (props: Props) => {
  const [fieldProps] = useField(props.name, props);
  const { options, defaultOffice } = useGetResourceList(
    fieldProps?.field?.uniforms?.resource,
  );

  return (
    <>
      {fieldProps?.index === 1 && defaultOffice && (
        <SelectField
          {...props}
          options={options}
          value={defaultOffice?.value}
          disabled={true}
        />
      )}
      {fieldProps?.index !== 1 && defaultOffice && (
        <SelectField {...props} options={options} />
      )}
      {/* @ts-ignore */}
      {!defaultOffice && <SelectField {...props} options={options} />}
    </>
  );
};

export default SelectResourceField;
