import React from "react";

import GeneralnewTask from "../GeneralNewRequest/GeneralNewRequest";
import SelectTypeStep from "../SelectType/SelectType";

interface Props {
  typeList: any;
  fieldTask: string;
  onSetType: React.Dispatch<React.SetStateAction<string>>;
}

const FormCreateTask: React.FC<Props> = ({
  typeList,
  fieldTask,
  onSetType,
}) => {
  return (
    <>
      {fieldTask ? (
        <GeneralnewTask />
      ) : (
        <SelectTypeStep typeList={typeList} onSetType={onSetType} />
      )}
    </>
  );
};

export default FormCreateTask;
