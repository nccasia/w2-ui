import { Card } from "@material-ui/core";
import { FormSchema } from "@saleor/components/FormSchema/FormSchema";
import { TaskDetailFragmentFragment } from "@saleor/graphql";
import { makeStyles } from "@saleor/macaw-ui";
import { bridge } from "@saleor/utils/schema";
import React from "react";
import { AutoForm } from "uniforms-material";

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
  task: TaskDetailFragmentFragment;
}
const Task = ({ task }: TaskType) => {
  const classes = useStyles();
  return (
    <Card className={classes.container}>
      <TaskTitle
        user={task.userByCreatorid}
        title={task.title}
        state={task?.state}
        status={task?.status}
      />
      <div className={classes.editor}>
        {false && <AutoForm schema={bridge} />}
        {task.definitionId && (
          <>
            <FormSchema
              formId={task?.Form?.id}
              readonly={true}
              modelData={task.values}
            />
          </>
        )}
      </div>
    </Card>
  );
};

export default Task;
