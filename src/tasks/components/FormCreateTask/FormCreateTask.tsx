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
import { mapEdgesToItems } from "@saleor/utils/maps";
import React, { useCallback, useMemo, useState } from "react";
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
    return data?.find?.(item => item.Form.id === typeTask);
  }, [data, typeTask]);

  const selectTeam = useMemo(
    () => user?.MemberOnTeams?.find?.(item => item.User.id === user?.id),
    [user?.MemberOnTeams, user?.id],
  );

  const handleNewRequest = useCallback(
    data => {
      const decodedString = atob(selectedType?.id);
      const newRequest = () => {
        const current = new Date();
        createTaskMutation({
          variables: {
            values: { ...data },
            creatorId: +user.userId,
            assigneeId: +user.userId,
            organizationId: user.organizationId,
            definitionId: JSON.parse(decodedString)[3],
            teamId: selectTeam.teamId,
            dueDate: current.toISOString(),
            title: selectedType?.title,
          },
        });
      };
      // eslint-disable-next-line no-console
      console.log(newRequest);

      return newRequest();
    },
    [createTaskMutation, selectTeam, user],
  );

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
          formId={selectedType?.Form?.id}
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
