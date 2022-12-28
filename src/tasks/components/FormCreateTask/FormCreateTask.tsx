import { Box } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CloseIcon from "@material-ui/icons/Close";
import { iconClose, iconModal } from "@saleor/styles/modal";
import React, { useState } from "react";

import FormCreatedTaskDetail from "./FormCreatedTaskDetail/FormCreatedTaskDetail";
import FormCreatedTaskType from "./FormCreatedTaskType/FormCreatedTaskType";

interface Props {
  typeList: any;
  onClose: () => void;
}

const FormCreateTask: React.FC<Props> = ({ typeList, onClose }) => {
  const [typeTask, setTypeTask] = useState<string>("");

  const typeName = typeList.find(item => item.value === typeTask);

  const handleNewRequest = (data, type) => {
    const idRandom = new Date().getTime();
    const newRequest = {
      id: `${idRandom}`,
      type,
      otherOption: data.otherOption,
      currentOffice: data.currentOffice || "",
      destinationOffice: data.destinationOffice || "",
      createDate: data.createDate,
      content: data.content || "",
    };
    // eslint-disable-next-line no-console
    console.log("New Request Success !", newRequest);
    onClose();
  };

  return (
    <>
      <Box sx={iconModal}>
        {typeTask ? (
          <ArrowBackIcon style={iconClose} onClick={() => setTypeTask("")} />
        ) : (
          <>&nbsp;</>
        )}
        {typeName && <b>{typeName?.label}</b>}
        <CloseIcon style={iconClose} onClick={() => onClose()} />
      </Box>
      {typeTask && (
        <FormCreatedTaskDetail
          formId={typeTask}
          onNewRequest={handleNewRequest}
        />
      )}
      {!typeTask && (
        <FormCreatedTaskType typeList={typeList} onSetType={setTypeTask} />
      )}
    </>
  );
};

export default FormCreateTask;
