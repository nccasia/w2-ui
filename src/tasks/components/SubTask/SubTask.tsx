import { Card } from "@material-ui/core";
import QuillEditor from "@saleor/components/QuillEditor";
import { Button, makeStyles } from "@saleor/macaw-ui";
import React from "react";

import FormConfirm from "../FormConfirm";
import TaskTitle from "../TaskTitle";

const useStyles = makeStyles(
  () => ({
    listButton: {
      width: "98%",
      margin: "24px auto",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      gap: "24px",
    },
  }),
  { name: "C:Workspacew2-uisrc\taskscomponentsSubTaskSubTask" },
);

const SubTask: React.FC = () => {
  const classes = useStyles();

  return (
    <Card>
      <TaskTitle avatar="https://c.wallhere.com/images/9f/27/449bb23063f3cf8d8f7fbcf13a6e-1519917.jpg!d" />
      <QuillEditor
        value="<h1>Hello</h1>"
        // title="Description"
        onChange={() => ""}
      />
      <FormConfirm />
      <div className={classes.listButton}>
        <Button variant="secondary">Reject</Button>
        <Button variant="primary">Approve</Button>
      </div>
    </Card>
  );
};

export default SubTask;
