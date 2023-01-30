/* eslint-disable no-console */
import { Card, CardContent, makeStyles, Modal } from "@material-ui/core";
import { FormSchema } from "@saleor/components/FormSchema/FormSchema";
import Hr from "@saleor/components/Hr";
import Loading from "@saleor/components/Loading";
import { TaskFragmentFragment, useUpdateTaskMutation } from "@saleor/graphql";
import React, { useState } from "react";

import EditQuillEditor from "../EditQuillEditor";
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
  const [modules, setModules] = useState({ toolbar: false });
  const [edit, setEdit] = useState<boolean>(true);
  const [key, setKey] = useState(1);

  const [updateTaskMutation] = useUpdateTaskMutation();

  const handleEdit = () => {
    setModules({ toolbar: true });
    setEdit(false);
    setKey(key => key + 1);
  };

  const handleCancel = () => {
    setModules({ toolbar: false });
    setEdit(true);
    setKey(key => key + 1);
  };

  const handleSave = () => {
    setModules({ toolbar: false });
    setEdit(true);
    setKey(key => key + 1);
  };

  const handleConfirm = async event => {
    const decodedStringFormId = atob(task.TaskDefinition.Form.id);
    const decodedStringTaskId = atob(task.id);
    updateTaskMutation({
      variables: {
        value: JSON.stringify(event),
        formId: JSON.parse(decodedStringFormId)[3],
        taskId: JSON.parse(decodedStringTaskId)[3],
      },
    });
  };
  return (
    <Card>
      <Modal open={false}>
        <Loading />
      </Modal>
      <TaskTitle
        creatorId={task.creatorId}
        avatar="https://c.wallhere.com/images/9f/27/449bb23063f3cf8d8f7fbcf13a6e-1519917.jpg!d"
        title={task.title}
      />
      <Hr />
      <CardContent style={{ paddingBottom: "47px" }}>
        {false && (
          <EditQuillEditor
            key={key}
            readonly={edit}
            modules={modules}
            onChange={() => true}
            handleCancel={handleCancel}
            handleEdit={handleEdit}
            handleSave={handleSave}
            title={"Description"}
            value={task.description}
          />
        )}
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
