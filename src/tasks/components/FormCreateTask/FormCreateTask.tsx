import { Box } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CloseIcon from "@material-ui/icons/Close";
import { useUser } from "@saleor/auth";
import {
  useCreateTaskMutation,
  useGetTaskDefinitionQuery,
} from "@saleor/graphql";
import useChoiceSearch from "@saleor/hooks/useChoiceSearch";
import { iconClose, iconModal } from "@saleor/styles/modal";
import React, { useMemo, useState } from "react";

import { useTaskDefinitionChoiceType } from "../TaskCreation/useTasksDefinitionChoiceType";
import FormCreatedTaskDetail from "./FormCreatedTaskDetail/FormCreatedTaskDetail";
import FormCreatedTaskType from "./FormCreatedTaskType/FormCreatedTaskType";

interface Props {
  onClose: () => void;
}

const FormCreateTask: React.FC<Props> = ({ onClose }) => {
  const [createTaskMutation] = useCreateTaskMutation();
  const { data } = useGetTaskDefinitionQuery();
  const { choiceType } = useTaskDefinitionChoiceType(data);
  const { result } = useChoiceSearch(choiceType);

  const [typeTask, setTypeTask] = useState<string>("");

  const { user } = useUser();
  // eslint-disable-next-line no-console
  console.log("🚀 ~ file: FormCreateTask.tsx:27 ~ user", user);

  const selectedType = useMemo(
    () => data?.TaskDefinition?.find?.(item => item.id === +typeTask),
    [data?.TaskDefinition, typeTask],
  );

  const handleNewRequest = data => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() +
      1}/${current.getFullYear()}`;
    createTaskMutation({
      variables: {
        values: { ...data },
        creatorId: user.id,
        assigneeId: user.id,
        organizationId: user,
        definitionId: selectedType.id,
        teamId: user,
        dueDate: date,
      },
    });
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
        {selectedType && <b>{selectedType?.title}</b>}
        <CloseIcon style={iconClose} onClick={() => onClose()} />
      </Box>
      {typeTask && (
        <FormCreatedTaskDetail
          formId={selectedType.formId}
          onNewRequest={handleNewRequest}
        />
      )}
      {!typeTask && (
        <FormCreatedTaskType typeList={result} onSetType={setTypeTask} />
      )}
    </>
  );
};

export default FormCreateTask;
