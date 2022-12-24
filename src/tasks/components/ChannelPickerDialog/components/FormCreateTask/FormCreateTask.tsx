import { TaskNewRequest } from "@saleor/tasks/views/TaskList";
import React from "react";

import GeneralnewTask from "../GeneralNewRequest/GeneralNewRequest";
import SelectTypeStep from "../SelectType/SelectType";

interface Props {
  typeList: any;
  fieldTask: string;
  onSetType: React.Dispatch<React.SetStateAction<string>>;
  onNewRequest: (data: TaskNewRequest, type: string) => void;
}

const FormCreateTask: React.FC<Props> = ({
  typeList,
  fieldTask,
  onSetType,
  onNewRequest,
}) => {
  return (
    <>
      {fieldTask ? (
        <GeneralnewTask fieldTask={fieldTask} onNewRequest={onNewRequest} />
      ) : (
        <SelectTypeStep typeList={typeList} onSetType={onSetType} />
      )}
    </>
  );
};

export default FormCreateTask;
