import { Card, CardContent, makeStyles, Modal } from "@material-ui/core";
import { useUser } from "@saleor/auth";
import { FormSchema } from "@saleor/components/FormSchema/FormSchema";
import Hr from "@saleor/components/Hr";
import Loading from "@saleor/components/Loading";
import { TaskFragmentFragment } from "@saleor/graphql";
import React from "react";

import { IFormSubTaskApprove } from "../TaskDetailPage";
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
  submitTaskMutation: (
    formValue: IFormSubTaskApprove,
    formId: number,
    taskId: number,
  ) => void;
  loading: boolean;
}
const SubTask = ({
  task,
  submitTaskMutation,
  loading,
}: SubTaskType): JSX.Element => {
  const classes = useStyles();
  const { user } = useUser();

  return (
    <>
      {+user.userId === task.assigneeId && (
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
                onSubmit={data =>
                  submitTaskMutation(data, task.formId, task.parentId)
                }
              />
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default SubTask;
