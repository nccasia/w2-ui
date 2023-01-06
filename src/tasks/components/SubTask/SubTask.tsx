import { Card, CardContent, Modal } from "@material-ui/core";
import Hr from "@saleor/components/Hr";
import Loading from "@saleor/components/Loading";
import React, { useState } from "react";

import EditQuillEditor from "../EditQuillEditor";
import FormConfirm from "../FormConfirm";
import TaskTitle from "../TaskTitle";

const content =
  "<p>Adipisicing ut sunt magna amet laboris est nulla ad sunt reprehenderit fugiat veniam ex. Nulla cupidatat amet laborum fugiat irure mollit. Aliquip labore anim velit ea. Cillum aute nulla sit excepteur et. Voluptate mollit fugiat ex voluptate ut ea mollit sint dolor quis laboris id qui. Eiusmod ipsum nisi eu culpa. Consequat commodo enim voluptate non nisi reprehenderit excepteur veniam duis.</p>";

const SubTask: React.FC = () => {
  const [modules, setModules] = useState({ toolbar: false });
  const [edit, setEdit] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
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

  const handleConfirm = async event => {
    // TODO: call api confirm subtask
    setLoading(true);
    localStorage.setItem("event", JSON.stringify(event.nativeEvent));
  };

  return (
    <Card>
      <Modal open={loading}>
        <Loading />
      </Modal>
      <TaskTitle avatar="https://c.wallhere.com/images/9f/27/449bb23063f3cf8d8f7fbcf13a6e-1519917.jpg!d" />
      <Hr />
      <CardContent style={{ paddingBottom: "47px" }}>
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
        <FormConfirm onConfirm={handleConfirm} />
      </CardContent>
    </Card>
  );
};

export default SubTask;
