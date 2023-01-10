import { Card } from "@material-ui/core";
import { makeStyles } from "@saleor/macaw-ui";
import React, { useState } from "react";

import EditQuillEditor from "../EditQuillEditor";
import TaskTitle from "../TaskTitle";

const useStyles = makeStyles(
  () => ({
    container: {
      marginTop: "27px",
    },
  }),
  { name: "Task" },
);

const content =
  "<p>Adipisicing ut sunt magna amet laboris est nulla ad sunt reprehenderit fugiat veniam ex. Nulla cupidatat amet laborum fugiat irure mollit. Aliquip labore anim velit ea. Cillum aute nulla sit excepteur et. Voluptate mollit fugiat ex voluptate ut ea mollit sint dolor quis laboris id qui. Eiusmod ipsum nisi eu culpa. Consequat commodo enim voluptate non nisi reprehenderit excepteur veniam duis.</p>";

const Task = () => {
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
        value={content}
      />
    </Card>
  );
};

export default Task;
