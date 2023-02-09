import { MenuItem, Modal, Typography } from "@material-ui/core";
import { FormSchema } from "@saleor/components/FormSchema/FormSchema";
import { useGetUserQuery, useUpdateAssigneeMutation } from "@saleor/graphql";
import { Autocomplete } from "@saleor/macaw-ui";
import { createRelayId } from "@saleor/utils/createRelayId";
import { mapEdgesToItems } from "@saleor/utils/maps";
import clsx from "clsx";
import React, { useMemo, useState } from "react";

import { useStyles } from "../TaskDetailPage/style";
import { useUserChoiceType } from "./useUserChoiceType";

interface SubTaskType {
  modalOpen: any;
  onModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dataModalSubTask: any;
}

const ModalSubTask: React.FC<SubTaskType> = ({
  dataModalSubTask,
  modalOpen,
  onModalOpen,
}) => {
  const classes = useStyles();
  const { data } = useGetUserQuery();
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [updateAssigneeMutation] = useUpdateAssigneeMutation();

  const resultEdgesUser = useMemo(
    () => mapEdgesToItems(data?.User_connection) || [],
    [data?.User_connection],
  );
  const { choiceType } = useUserChoiceType(resultEdgesUser);

  const [userSingleChoice] = useState(
    choiceType?.find(
      item =>
        item.value ===
        createRelayId([1, "public", "User", dataModalSubTask?.assigneeId]),
    ),
  );
  // eslint-disable-next-line no-console
  console.log(
    "🚀 ~ file: modalSubTask.tsx:41 ~ userSingleChoice",
    createRelayId([1, "public", "User", dataModalSubTask?.assigneeId]),
    choiceType[0].value,
    choiceType[1].value,
    dataModalSubTask?.assigneeId,
    userSingleChoice,
  );

  const handleOnChangeSingleChoice = data => {
    // eslint-disable-next-line no-console
    console.log(
      "🚀 ~ file: modalSubTask.tsx:43 ~ handleOnChangeSingleChoice ~ data",
      data,
    );
  };
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
              <Autocomplete
                choices={choiceType}
                fullWidth
                label={"Assignee"}
                onInputChange={handleOnChangeSingleChoice}
                defaultValue={userSingleChoice?.label}
              >
                {({ highlightedIndex, getItemProps }) =>
                  choiceType.map((choice, choiceIndex) => (
                    <MenuItem
                      key={choiceIndex}
                      selected={highlightedIndex === choiceIndex}
                      {...getItemProps({
                        item: choice,
                        index: choiceIndex,
                      })}
                    >
                      {choice.label}
                    </MenuItem>
                  ))
                }
              </Autocomplete>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalSubTask;
