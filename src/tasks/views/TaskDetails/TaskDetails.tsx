import LoginLoading from "@saleor/auth/components/LoginLoading";
import { useTaskByPkQuery } from "@saleor/graphql";
import TaskDetailPage from "@saleor/tasks/components/TaskDetailPage";
import React from "react";

interface TaskDetailsProps {
  id: string;
  params: any;
}

const TaskDetails: React.FC<TaskDetailsProps> = ({ id }) => {
  const { data, loading } = useTaskByPkQuery({
    variables: {
      id,
    },
  });
  if (loading) {
    return <LoginLoading />;
  }
  return <>{data?.Task_by_pk && <TaskDetailPage taskDetail={data} />}</>;
};

export default TaskDetails;
