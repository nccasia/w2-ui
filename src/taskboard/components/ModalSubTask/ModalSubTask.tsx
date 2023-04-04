import { Box, Modal, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { FormSchema } from "@saleor/components/FormSchema/FormSchema";
import { useUpdateAssigneeMutation } from "@saleor/graphql";
import { iconModal, useCloseIconStyles } from "@saleor/styles/modal";
import { createNumberId } from "@saleor/utils/createNumberId";
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
  const closeIconClasses = useCloseIconStyles();
  const [updateAssigneeMutation] = useUpdateAssigneeMutation();

  const { choiceType } = useUserChoiceType(resultEdgesUser);

  const optionDefault = useMemo(
    () =>
      choiceType?.find(
        item => createNumberId(item.value) === dataModalSubTask?.assigneeId,
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
          _eq: createNumberId(subTaskId),
          assigneeId: createNumberId(data.value),
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
          <Box sx={iconModal}>
            <Typography variant="h3">{dataModalSubTask?.title}</Typography>
            <CloseIcon
              className={closeIconClasses.root}
              onClick={() => onModalOpen(false)}
            />
          </Box>
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
