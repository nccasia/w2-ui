export enum TaskStatus {
  READY = "READY",
  TODO = "TODO",
  PROGRESS = "PROGRESS",
  READY_FOR_QA = "READY_FOR_QA",
  QA = "QA",
  DONE = "DONE",
}

export enum TaskType {
  CHANGE_OFFICE_REQ = "CHANGE_OFFICE_REQ",
  DEVICE_REQ = "DEVICE_REQ",
  WFH_REQ = "WFH_REQ",
}

export enum HistoryType {
  CONFIRM = "CONFIRM",
  REJECT = "REJECT",
  APPROVE = "APPROVE",
}

export enum TaskPriority {
  HIGHEST = "HIGHEST",
  HIGH = "HIGH",
  MEDIUM = "MEDIUM",
  LOW = "LOW",
  LOWEST = "LOWEST",
}

export enum TaskState {
  WAIT_PM_APPROVE = "WAIT_PM_APPROVE",
  WAIT_IT_APPROVE = "WAIT_IT_APPROVE",
  WAIT_CEO_APPROVE = "WAIT_CEO_APPROVE",
}

export interface User {
  email: string;
  firstname: string;
  id: string;
  lastname: string;
  organizationId: number;
  role: string;
}

export interface Task {
  id: string;
  creatorId: number;
  definitionId: number;
  description: string;
  dueDate: string;
  organizationId: number;
  parentId?: number;
  priority: string;
  status: string;
  stateName: string;
  teamId: number;
  title: string;
  User: User;
  state: string;
  __typename?: string;
}

export interface TaskDetail {
  id: string;
  name: string;
  userName: string;
  createdDate: string;
  priority: string;
  subTasks: SubTask[] | [];
  description: string | null;
  status: TaskStatus | null;
  state: TaskState | null;
  activity: string[];
  type: TaskType | null;
}

export interface History {
  amount: any;
  app: any;
  date: string | null;
  discount: string;
  email: string;
  emailType: string;
  id: string;
  invoiceNumber: number | null;
  lines: any | null;
  message: string | null;
  type: HistoryType | null;
  user: any | null;
}

interface SubTask {
  id: string;
  name: string;
  userName: string;
  desciption: string | null;
  status: TaskStatus | null;
}
