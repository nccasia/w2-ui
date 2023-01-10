export interface IEventLog {
  actionId: number;
  createdAt: string;
  id: number;
  organizationId: number;
  userId: number;
  taskId: number;
  Action: {
    content: string;
  };
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
