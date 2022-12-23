import TaskDetailPage from "@saleor/tasks/components/TaskDetailPage";
import React from "react";

interface TaskDetailsProps {
  id: string;
  params: any;
}

const TaskDetails: React.FC<TaskDetailsProps> = ({}) => (
  <>
    <TaskDetailPage />
  </>
);

export default TaskDetails;
