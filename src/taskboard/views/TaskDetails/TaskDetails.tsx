import LoginLoading from "@saleor/auth/components/LoginLoading";
import { useTaskByPkQuery } from "@saleor/graphql";
import TaskDetailPage from "@saleor/taskboard/components/TaskDetailPage";
import React from "react";

interface TaskDetailsProps {
  id: string;
  params: any;
}

const TaskDetails: React.FC<TaskDetailsProps> = ({ id }) => {
  // console.log('id', id)
  const { data, loading, refetch } = useTaskByPkQuery({
    variables: {
      id,
    },
  });
  if (loading) {
    return <LoginLoading />;
  }
  return (
    <>
      {data?.node && data.node.__typename === "Task" && (
        <TaskDetailPage taskDetail={data?.node} refetch={refetch} />
      )}
    </>
  );
};

export default TaskDetails;
