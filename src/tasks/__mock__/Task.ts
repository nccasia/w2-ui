import {
  History,
  HistoryType,
  TaskDetail,
  TaskPriority,
  TaskState,
  TaskStatus,
  TaskType,
} from "../model/Task";

const taskDetail: TaskDetail = {
  id: "Bhe3sr",
  name: "W2-678",
  userName: "Minh Luc",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  createdDate: "2022-12-15T11:07:55.916944+00:00",
  priority: TaskPriority.HIGHEST,
  status: TaskStatus.PROGRESS,
  subTasks: [
    {
      id: "2bsk23",
      name: "W2-678-sub1",
      userName: "Son",
      desciption:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      status: TaskStatus.READY,
    },
    {
      id: "fs345s",
      name: "W2-678-sub2",
      userName: "Tin",
      desciption:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      status: TaskStatus.TODO,
    },
  ],
  activity: ["history", "comment"],
  type: TaskType.DEVICE_REQ,
  state: TaskState.WAIT_PM_APPROVE,
};
const histories: History[] = [
  {
    amount: null,
    app: null,
    date: "2022-12-20T19:54:36.454776+00:00",
    discount: null,
    email: null,
    emailType: null,
    id: "T3JkZXJFdmVudDozNjEy",
    invoiceNumber: 2,
    lines: null,
    message: "Approve request device 89",
    type: HistoryType.CONFIRM,
    user: null,
  },
  {
    amount: null,
    app: null,
    date: "2022-12-20T19:54:36.454776+00:00",
    discount: null,
    email: null,
    emailType: null,
    id: "T3JkZXJFdmVudDssNjEy",
    invoiceNumber: 2,
    lines: null,
    message: "Reject request meeting",
    type: HistoryType.CONFIRM,
    user: null,
  },
];

const choices = [
  {
    label: "Vu Thanh Tuan",
    value: "Vu Thanh Tuan",
  },
  {
    label: "Minh Luc",
    value: "Minh Luc",
  },
  {
    label: "Ho Trong Son",
    value: "Ho Trong Son",
  },
  {
    label: "Nguyen Ngoc Tuyen",
    value: "Nguyen Ngoc Tuyen",
  },
  {
    label: "Nguyen Van Manh",
    value: "Nguyen Van Manh",
  },
];
export { taskDetail, histories, choices };
