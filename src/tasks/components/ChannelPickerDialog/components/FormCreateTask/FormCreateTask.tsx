import { Box } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CloseIcon from "@material-ui/icons/Close";
import { iconClose, iconModal } from "@saleor/styles/modal";
import { TaskNewRequest } from "@saleor/tasks/views/TaskList";
import React, { useState } from "react";

import GeneralnewTask from "../GeneralNewRequest/GeneralNewRequest";
import SelectTypeStep from "../SelectType/SelectType";

interface Props {
  typeList: any;
  onClose: () => void;
  onNewRequest: (data: TaskNewRequest, type: string) => void;
}

const FormCreateTask: React.FC<Props> = ({
  typeList,
  onClose,
  onNewRequest,
}) => {
  const [typeTask, setTypeTask] = useState<string>("");

  const typeName = typeList.find(item => item.value === typeTask);
  return (
    <>
      <Box sx={iconModal}>
        {typeTask ? (
          <ArrowBackIcon style={iconClose} onClick={() => setTypeTask("")} />
        ) : (
          <>&nbsp;</>
        )}
        {typeName !== null ? <b>{typeName?.label}</b> : <></>}
        <CloseIcon style={iconClose} onClick={() => onClose()} />
      </Box>
      {typeTask && (
        <GeneralnewTask fieldTask={typeTask} onNewRequest={onNewRequest} />
      )}
      {!typeTask && (
        <SelectTypeStep typeList={typeList} onSetType={setTypeTask} />
      )}
    </>
  );
};

export default FormCreateTask;
