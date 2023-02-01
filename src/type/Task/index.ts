export interface IEventLog {
  createdAt: string;
  id: number;
  organizationId: number;
  userId: number;
  taskId: number;
  content: string;
  User: {
    email: string;
    avatar?: string;
  };
  Organization: {
    name: string;
  };
  Task: {
    title: string;
  };
}

export interface IQuantityTasks {
  pending: number;
  done: number;
}
