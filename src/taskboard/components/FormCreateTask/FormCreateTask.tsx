import { Box } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CloseIcon from "@material-ui/icons/Close";
import { useUser } from "@saleor/auth";
import {
  useCreateTaskMutation,
  useGetTaskDefinitionQuery,
} from "@saleor/graphql";
import useChoiceSearch from "@saleor/hooks/useChoiceSearch";
import useNavigator from "@saleor/hooks/useNavigator";
import useNotifier from "@saleor/hooks/useNotifier";
import { commonMessages } from "@saleor/intl";
import { iconClose, iconModal } from "@saleor/styles/modal";
import { taskUrl } from "@saleor/taskboard/urls";
import { createNumberId } from "@saleor/utils/createNumberId";
import { mapEdgesToItems } from "@saleor/utils/maps";
import React, { useMemo, useState } from "react";
import { useIntl } from "react-intl";

import { useTaskDefinitionChoiceType } from "../TaskCreation/useTasksDefinitionChoiceType";
import FormCreatedTaskDetail from "./FormCreatedTaskDetail/FormCreatedTaskDetail";
import FormCreatedTaskType from "./FormCreatedTaskType/FormCreatedTaskType";

interface Props {
  onClose: () => void;
  id: string;
}

const FormCreateTask: React.FC<Props> = ({ onClose, id }) => {
  const navigate = useNavigator();
  const notify = useNotifier();

  const [createTaskMutation] = useCreateTaskMutation({
    onCompleted: data => {
      notify({
        status: "success",
        text: intl.formatMessage(commonMessages.savedChanges),
      });
      onClose();
      navigate(taskUrl(`${data.createTaskInput.id}`));
    },
  });
  const TaskDefinitionQuery = useGetTaskDefinitionQuery();
  const data = useMemo(() => {
    return (
      mapEdgesToItems(TaskDefinitionQuery?.data?.TaskDefinition_connection) ||
      []
    );
  }, [TaskDefinitionQuery?.data]);

  const { choiceType } = useTaskDefinitionChoiceType(data);
  const { result } = useChoiceSearch(choiceType);

  const intl = useIntl();

  const [typeTask, setTypeTask] = useState<string>("");

  const { user } = useUser();

  const selectedType = useMemo(() => {
    if (id === "my-tasks") {
      return data?.find?.(item => item?.Form?.id === typeTask);
    } else {
      return data?.find?.(
        item => item?.Form?.code === id.toUpperCase().replaceAll("-", "_"),
      );
    }
  }, [data, id, typeTask]);

  const selectTeam = useMemo(
    () => user?.MemberOnTeams?.find?.(item => item.User.id === user?.id),
    [user?.MemberOnTeams, user?.id],
  );

  const handleNewRequest = data => {
    const current = new Date();
    const newTask = {
      values: { ...data },
      creatorId: +user.userId,
      assigneeId: +user.userId,
      organizationId: user.organizationId,
      definitionId: createNumberId(selectedType?.id),
      teamId: selectTeam.teamId,
      dueDate: current.toISOString(),
      title: selectedType?.title,
      key: selectedType?.keyTemplate,
      description: `${data?.content}`,
    };
    createTaskMutation({
      variables: {
        data: newTask,
      },
    });
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
      {id === "my-tasks" && (
        <>
          {typeTask && (
            <FormCreatedTaskDetail
              formId={selectedType?.Form?.id}
              onNewRequest={handleNewRequest}
            />
          )}
          {!typeTask && (
            <FormCreatedTaskType typeList={result} onSetType={setTypeTask} />
          )}
        </>
      )}
      {id !== "my-tasks" && (
        <FormCreatedTaskDetail
          formId={selectedType?.Form?.id}
          onNewRequest={handleNewRequest}
        />
      )}
    </>
  );
};

export default FormCreateTask;
