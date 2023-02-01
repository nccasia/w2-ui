/* eslint-disable no-console */
import { Card, CardContent, makeStyles, Modal } from "@material-ui/core";
import { FormSchema } from "@saleor/components/FormSchema/FormSchema";
import Hr from "@saleor/components/Hr";
import Loading from "@saleor/components/Loading";
import { TaskFragmentFragment, useSubmitTaskMutation } from "@saleor/graphql";
import { alertConfirmSubTask } from "@saleor/taskboard/utils";
import React, { useState } from "react";

import TaskTitle from "../TaskTitle";
const useStyles = makeStyles(
  () => ({
    root: {
      "& form>.MuiButtonBase-root": {
        float: "right",
        background: "#333",
        border: "none",
        color: "#fff",
      },
      "& .MuiOutlinedInput-inputMarginDense": {
        paddingTop: "25px!important",
        paddingBottom: "10px!important",
      },
    },
  }),
  { name: "SubTask" },
);
interface SubTaskType {
  task: TaskFragmentFragment;
}
const SubTask = ({ task }: SubTaskType): JSX.Element => {
  const classes = useStyles();
  const [loading, setLoading] = useState<boolean>(false);

  const [submitTaskMutation] = useSubmitTaskMutation({
    onCompleted: () => {
      alertConfirmSubTask("success", "Submit Success!");
    },
  });

  const handleConfirm = async formValue => {
    setLoading(true);
    setTimeout(() => {
      submitTaskMutation({
        variables: {
          value: formValue,
          formId: task.formId,
          taskId: task.parentId,
        },
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <Card>
      <Modal open={loading}>
        <Loading />
      </Modal>
      <TaskTitle
        creatorId={task.creatorId}
        avatar="https://c.wallhere.com/images/9f/27/449bb23063f3cf8d8f7fbcf13a6e-1519917.jpg!d"
        title={task.title}
        state={task.state}
      />
      <Hr />
      <CardContent style={{ paddingBottom: "47px" }}>
        <div className={classes.root}>
          <FormSchema
            formId={task.Form.id}
            onSubmit={data => handleConfirm(data)}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default SubTask;
