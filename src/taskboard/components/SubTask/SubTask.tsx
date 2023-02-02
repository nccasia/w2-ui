import { MutationFunction } from "@apollo/client/react/types/types";
import { Card, CardContent, makeStyles, Modal } from "@material-ui/core";
import { FormSchema } from "@saleor/components/FormSchema/FormSchema";
import Hr from "@saleor/components/Hr";
import Loading from "@saleor/components/Loading";
import { SubmitTaskMutation, TaskFragmentFragment } from "@saleor/graphql";
import { Exact } from "@saleor/sdk/dist/apollo/types";
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
      "& .MuiFormControl-root>.MuiFormGroup-root": {
        justifyContent: "space-around",
        flexDirection: "initial !important",
      },
      "& .MuiFormGroup-root>label": {
        padding: "0 10px 0 0",
        borderRadius: "4px",
        border: "1px solid rgba(37, 41, 41, 0.1)",
      },
    },
  }),
  { name: "SubTask" },
);
interface SubTaskType {
  task: TaskFragmentFragment;
  submitTaskMutation: MutationFunction<
    SubmitTaskMutation,
    Exact<{
      value: any;
      formId: number;
      taskId: number;
    }>
  >;
}
const SubTask = ({ task, submitTaskMutation }: SubTaskType): JSX.Element => {
  const classes = useStyles();
  const [loading, setLoading] = useState<boolean>(false);

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
        user={task.userByCreatorid}
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
