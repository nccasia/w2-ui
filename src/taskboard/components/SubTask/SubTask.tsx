/* eslint-disable no-console */
import { Card, CardContent, makeStyles, Modal } from "@material-ui/core";
import { FormSchema } from "@saleor/components/FormSchema/FormSchema";
import Hr from "@saleor/components/Hr";
import Loading from "@saleor/components/Loading";
import { TaskFragmentFragment, useUpdateTaskMutation } from "@saleor/graphql";
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

  const [updateTaskMutation] = useUpdateTaskMutation({
    onCompleted: () => {
      alertConfirmSubTask("success", "Submit Success!");
    },
  });

  const handleConfirm = async event => {
    const decodedStringFormId = atob(task.TaskDefinition.Form.id);
    const decodedStringTaskId = atob(task.id);
    setLoading(true);
    setTimeout(() => {
      updateTaskMutation({
        variables: {
          value: JSON.stringify(event),
          formId: JSON.parse(decodedStringFormId)[3],
          taskId: JSON.parse(decodedStringTaskId)[3],
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
      />
      <Hr />
      <CardContent style={{ paddingBottom: "47px" }}>
        <div className={classes.root}>
          <FormSchema
            formId={task.TaskDefinition.Form.id}
            onSubmit={data => handleConfirm(data)}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default SubTask;
