import { Card } from "@material-ui/core";
import QuillEditor from "@saleor/components/QuillEditor";
import { makeStyles } from "@saleor/macaw-ui";
import React from "react";

import TaskTitle from "../TaskTitle";

const useStyles = makeStyles(
  () => ({
    container: {
      marginTop: "27px",
    },
  }),
  { name: "C:Workspacew2-uisrc\taskscomponentsTaskTask" },
);

const Task = () => {
  const classes = useStyles();
  return (
    <Card className={classes.container}>
      <TaskTitle avatar="https://c.wallhere.com/images/9f/27/449bb23063f3cf8d8f7fbcf13a6e-1519917.jpg!d" />
      <QuillEditor value="<h1>Hello</h1>" title="Description" />
    </Card>
  );
};

export default Task;
