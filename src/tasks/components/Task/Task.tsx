import { Card } from "@material-ui/core";
import { FormSchema } from "@saleor/components/FormSchema/FormSchema";
import { TaskByPkQuery } from "@saleor/graphql";
import { makeStyles } from "@saleor/macaw-ui";
import React, { useState } from "react";

import EditQuillEditor from "../EditQuillEditor";
import TaskTitle from "../TaskTitle";

const useStyles = makeStyles(
  () => ({
    container: {
      marginBottom: "27px",
      paddingBottom: "40px",
    },
    editor: {
      padding: "0 3.2rem",
    },
  }),
  { name: "Task" },
);
interface TaskType {
  task: TaskByPkQuery;
}
const Task = ({ task }: TaskType) => {
  const classes = useStyles();
  const [modules, setModules] = useState({ toolbar: false });
  const [edit, setEdit] = useState<boolean>(true);
  const [key, setKey] = useState(1);

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
  return (
    <Card className={classes.container}>
      <TaskTitle
        avatar="https://c.wallhere.com/images/9f/27/449bb23063f3cf8d8f7fbcf13a6e-1519917.jpg!d"
        title="PM Approve"
      />
      <div className={classes.editor}>
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
            value={"s"}
          />
        )}
        {task.Task_by_pk.TaskDefinition && (
          <FormSchema
            formId={task.Task_by_pk.TaskDefinition.formId}
            onSubmit={undefined}
            readonly={true}
            modelData={task.Task_by_pk.values}
          />
        )}
      </div>
    </Card>
  );
};

export default Task;

// {"type":"object","title":"Device Request","required":["dueDate"],"properties":{"device":{"type":"array","items":{"type":"object","required":["type","detail","quantity"],"properties":{"type":{"type":"string","uniforms":{"resource":22,"uiComponent":"SelectResourceField"}},"detail":{"type":"string"},"quantity":{"type":"integer","maximum":100,"minimum":1}}},"minItems":1,"uniforms":{"index":1}},"content":{"type":"string","nullable":true,"uniforms":{"index":4,"uiComponent":"QuillEditorField"}},"dueDate":{"type":"string","format":"date-time","default":null,"nullable":true,"uniforms":{"index":2}}}}
