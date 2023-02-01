import { Card } from "@material-ui/core";
import { FormSchema } from "@saleor/components/FormSchema/FormSchema";
import { TaskDetailFragmemtFragment } from "@saleor/graphql";
import { makeStyles } from "@saleor/macaw-ui";
import { bridge } from "@saleor/utils/schema";
import React from "react";
import { AutoForm } from "uniforms-material";

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
  task: TaskDetailFragmemtFragment;
}
const Task = ({ task }: TaskType) => {
  const classes = useStyles();

  return (
    <Card className={classes.container}>
      {/* <TaskTitle avatar="https://c.wallhere.com/images/9f/27/449bb23063f3cf8d8f7fbcf13a6e-1519917.jpg!d" /> */}
      <div className={classes.editor}>
        {false && <AutoForm schema={bridge} />}
        {task.definitionId && (
          <>
            <FormSchema
              formId={task.Form.id}
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
