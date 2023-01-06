import { Box } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CloseIcon from "@material-ui/icons/Close";
import { useUser } from "@saleor/auth";
// import { useCreateTaskMutation } from "@saleor/graphql";
import { iconClose, iconModal } from "@saleor/styles/modal";
import React, { useState } from "react";

import FormCreatedTaskDetail from "./FormCreatedTaskDetail/FormCreatedTaskDetail";
import FormCreatedTaskType from "./FormCreatedTaskType/FormCreatedTaskType";

interface Props {
  typeList: any;
  onClose: () => void;
}

const FormCreateTask: React.FC<Props> = ({ typeList, onClose }) => {
  // const [createTaskMutation] = useCreateTaskMutation();
  const [typeTask, setTypeTask] = useState<string>("");

  const { user } = useUser();

  const typeName = typeList.find(item => item.value === typeTask);

  const handleNewRequest = data => {
    // eslint-disable-next-line no-console
    console.log(
      "🚀 ~ file: FormCreateTask.tsx:26 ~ handleNewRequest ~ data",
      data,
      user,
    );
    // createTaskMutation({
    //   variables: {
    //     title: typeName?.label,
    //     dueDate: data.dueDate || data.dueDateStart,
    //     description: data.content,
    //     projectId: "",
    //     creatorId: user.id,
    //     assigneeId: user.id,
    //   },
    // });
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
