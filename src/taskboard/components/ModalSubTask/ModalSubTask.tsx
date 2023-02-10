import { Modal, Typography } from "@material-ui/core";
import { FormSchema } from "@saleor/components/FormSchema/FormSchema";
import { useUpdateAssigneeMutation } from "@saleor/graphql";
import { createRelayId } from "@saleor/utils/createRelayId";
import clsx from "clsx";
import React, { useCallback, useEffect, useMemo, useState } from "react";

import { useStyles } from "../TaskDetailPage/style";
import AutoCompleteUser from "./components/AutoCompleteUser/AutoCompleteUser";
import { useUserChoiceType } from "./useUserChoiceType";

interface SubTaskType {
  modalOpen: any;
  onModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dataModalSubTask: any;
  resultEdgesUser: Array<{
    __typename: "User";
    email: string;
    firstname: string;
    id: string;
    lastname: string;
    role: any;
  }>;
}

const ModalSubTask: React.FC<SubTaskType> = ({
  dataModalSubTask,
  modalOpen,
  onModalOpen,
  resultEdgesUser,
}) => {
  const classes = useStyles();
  const [updateAssigneeMutation] = useUpdateAssigneeMutation();

  const { choiceType } = useUserChoiceType(resultEdgesUser);

  const optionDefault = useMemo(
    () =>
      choiceType?.find(
        item =>
          JSON.parse(atob(item.value))[3] === dataModalSubTask?.assigneeId,
      ),
    [choiceType, dataModalSubTask?.assigneeId],
  );

  const [userSingleChoice, setUserSingleChoice] = useState(optionDefault);

  const handleOnChangeSingleChoice = useCallback(
    (_e: any, data: any, subTaskId: string) => {
      const optionDefault = choiceType?.find(item => item.value === data.value);
      setUserSingleChoice(optionDefault);
      updateAssigneeMutation({
        variables: {
          _eq: JSON.parse(atob(subTaskId))[3],
          assigneeId: JSON.parse(atob(data.value))[3],
        },
      });
    },
    [choiceType, updateAssigneeMutation],
  );

  useEffect(() => {
    setUserSingleChoice(optionDefault);
  }, [optionDefault]);
  return (
    <>
      <Modal
        open={modalOpen}
        onClose={() => onModalOpen(false)}
        className={classes.profileUser}
      >
        <div className={clsx([classes.subTaskItem, classes.paper])}>
          <Typography variant="h3">{dataModalSubTask?.title}</Typography>
          <div className={classes.subtaskAutoAssignee}>
            <div className="form_approve">
              <FormSchema
                formId={createRelayId([
                  1,
                  "public",
                  "Form",
                  dataModalSubTask?.formId,
                ])}
                readonly={true}
                modelData={dataModalSubTask?.Form?.values}
              />
            </div>
            <div className="single_choice-assignee">
              <AutoCompleteUser
                onChangeSingleChoice={handleOnChangeSingleChoice}
                subTaskId={dataModalSubTask?.id}
                choiceType={choiceType}
                userSingleChoice={userSingleChoice}
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalSubTask;
