import { Card, CardContent, Modal } from "@material-ui/core";
import Hr from "@saleor/components/Hr";
import Loading from "@saleor/components/Loading";
import { TaskFragmentFragment } from "@saleor/graphql";
import React, { useState } from "react";

import EditQuillEditor from "../EditQuillEditor";
import FormConfirm from "../FormConfirm";
import TaskTitle from "../TaskTitle";
interface SubTaskType {
  task: TaskFragmentFragment;
}
const SubTask = ({ task }: SubTaskType): JSX.Element => {
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
      <TaskTitle
        avatar="https://c.wallhere.com/images/9f/27/449bb23063f3cf8d8f7fbcf13a6e-1519917.jpg!d"
        title={task.title}
      />
      <Hr />
      <CardContent style={{ paddingBottom: "47px" }}>
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
        <FormConfirm
          onConfirm={handleConfirm}
          formId={task.TaskDefinition.Form.id}
        />
      </CardContent>
    </Card>
  );
};

export default SubTask;
