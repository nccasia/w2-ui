import { useTaskByPkQuery } from "@saleor/graphql";
import TaskDetailPage from "@saleor/tasks/components/TaskDetailPage";
import React from "react";

interface TaskDetailsProps {
  id: string;
  params: any;
}

const TaskDetails: React.FC<TaskDetailsProps> = ({ id }) => {
  const { data } = useTaskByPkQuery({
    variables: {
      id,
    },
  });
  return (
    <>
      <TaskDetailPage taskDetail={data?.Task_by_pk} />
    </>
  );
};

export default TaskDetails;
