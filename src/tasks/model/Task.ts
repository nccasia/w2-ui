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

export interface Task {
  id: string;
  name: string;
  userName: string;
  createdDate: string;
  priority: string;
  type: TaskType | null;
  status: TaskStatus | null;
  state: TaskState | null;
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

interface SubTask {
  id: string;
  name: string;
  userName: string;
  desciption: string | null;
  status: TaskStatus | null;
}
