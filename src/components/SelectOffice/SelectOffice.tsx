/* eslint-disable no-console */
import { useGetOfficeList } from "@saleor/hooks/useGetOfficeList";
import React from "react";
import { AutoFieldProps, SelectField } from "uniforms-material";

type Props = AutoFieldProps;

const SelectOffice: React.FC<Props> = (props: Props) => {
  const { offices } = useGetOfficeList();
  return (
    <>
      {/* @ts-ignore */}
      <SelectField {...props} options={offices} />
    </>
  );
};

export default SelectOffice;
