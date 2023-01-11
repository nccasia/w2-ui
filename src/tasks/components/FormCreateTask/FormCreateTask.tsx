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
import { taskUrl } from "@saleor/tasks/urls";
import React, { useMemo, useState } from "react";
import { useIntl } from "react-intl";

import { useTaskDefinitionChoiceType } from "../TaskCreation/useTasksDefinitionChoiceType";
import FormCreatedTaskDetail from "./FormCreatedTaskDetail/FormCreatedTaskDetail";
import FormCreatedTaskType from "./FormCreatedTaskType/FormCreatedTaskType";

interface Props {
  onClose: () => void;
}

const FormCreateTask: React.FC<Props> = ({ onClose }) => {
  const navigate = useNavigator();
  const notify = useNotifier();
  const [createTaskMutation] = useCreateTaskMutation({
    onCompleted: data => {
      notify({
        status: "success",
        text: intl.formatMessage(commonMessages.savedChanges),
      });
      navigate(taskUrl(`${data.insert_Task.returning[0].id}`));
    },
  });
  const { data } = useGetTaskDefinitionQuery();
  const { choiceType } = useTaskDefinitionChoiceType(data);
  const { result } = useChoiceSearch(choiceType);

  const intl = useIntl();

  const [typeTask, setTypeTask] = useState<string>("");

  const { user } = useUser();

  const selectedType = useMemo(
    () => data?.TaskDefinition?.find?.(item => item.id === +typeTask),
    [data?.TaskDefinition, typeTask],
  );

  const selectTeam = useMemo(
    () => user?.MemberOnTeams?.find?.(item => item.userId === user?.id),
    [user?.MemberOnTeams, user?.id],
  );

  const handleNewRequest = data => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() +
      1}/${current.getFullYear()}`;
    createTaskMutation({
      variables: {
        values: JSON.stringify({ ...data }),
        creatorId: user.id,
        assigneeId: user.id,
        organizationId: user.Organization.id,
        definitionId: selectedType.id,
        teamId: selectTeam.teamId,
        dueDate: date,
        title: selectedType?.titleTemplate,
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
