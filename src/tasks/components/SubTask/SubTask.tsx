import { Card } from "@material-ui/core";
import { Button, makeStyles } from "@saleor/macaw-ui";
import React, { useState } from "react";

import EditQuillEditor from "../EditQuillEditor";
import FormConfirm from "../FormConfirm";
import TaskTitle from "../TaskTitle";

const useStyles = makeStyles(
  theme => ({
    listButton: {
      width: "98%",
      margin: "24px auto",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      gap: "24px",
    },
    containerQuillEditor: {
      width: "98%",
      margin: "0 auto",
      marginBottom: theme.spacing(8),
    },
    title: {
      display: "flex",
      alignItems: "flex-end",
      gap: 4,
    },
    quillTitle: {
      fontWeight: "bold",
      color: "gray",
    },
    editIcon: {
      cursor: "pointer",
      fontSize: 20,
    },
    listButtonQuillEditor: {
      display: "flex",
      justifyContent: "flex-start",
      gap: "24px",
      marginTop: 50,
    },
  }),
  { name: "SubTask" },
);

const SubTask: React.FC = () => {
  const [modules, setModules] = useState({ toolbar: false });
  const [edit, setEdit] = useState<boolean>(true);
  const [key, setKey] = useState(1);
  const classes = useStyles();

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
    <Card>
      <TaskTitle avatar="https://c.wallhere.com/images/9f/27/449bb23063f3cf8d8f7fbcf13a6e-1519917.jpg!d" />
      <EditQuillEditor
        key={key}
        edit={edit}
        modules={modules}
        onChange={() => true}
        handleCancel={handleCancel}
        handleEdit={handleEdit}
        handleSave={handleSave}
        title={"Description"}
        value={"<h2>Hello world!</h2>"}
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
