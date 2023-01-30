export enum TaskStatus {
  READY = "READY",
  TODO = "TODO",
  PROGRESS = "PROGRESS",
  READY_FOR_QA = "READY FOR QA",
  QA = "QA",
  DONE = "DONE",
}

export enum TaskType {
  CHANGE_OFFICE_REQ = "Change Office Request",
  DEVICE_REQ = "Device Request",
  WFH_REQ = "WFH Request",
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
  type: TaskType | string;
  status: TaskStatus | null;
  state: TaskState | null;
}
