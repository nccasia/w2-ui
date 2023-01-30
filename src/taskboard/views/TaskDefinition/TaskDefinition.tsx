import LoginLoading from "@saleor/auth/components/LoginLoading";
import { useTaskByPkQuery } from "@saleor/graphql";
import TaskDefinitionPage from "@saleor/taskboard/components/TaskDefinitionPage";
import React from "react";

interface TaskDefinitionProps {
  id: string;
  params: any;
}

const TaskDefinition: React.FC<TaskDefinitionProps> = ({ id }) => {
  const { data, loading } = useTaskByPkQuery({
    variables: {
      id,
    },
  });
  if (loading) {
    return <LoginLoading />;
  }
  return <>{data?.node && <TaskDefinitionPage TaskDefinition={data?.node} />}</>;
};

export default TaskDefinition;
