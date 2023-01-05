import { defineMessages } from "react-intl";

export const homeNotificationTableMessages = defineMessages({
  createNewChannel: {
    id: "Nuq83+",
    defaultMessage: "Create new channel",
  },
  noTasks: {
    id: "LazGNy",
    defaultMessage: "No tasks ready to fulfill",
  },
  noPaymentWaiting: {
    id: "5dyOs0",
    defaultMessage: "No payments waiting for capture",
  },
  noTasksOut: {
    id: "2tpxYm",
    defaultMessage: "No tasks are out of stock",
  },
  pendingTasks: {
    id: "iYFScv",
    defaultMessage:
      "{amount, plural,one {One order is ready to fulfill} other {{amount} pending tasks}}",
  },
  doneTasks: {
    id: "CJWMt+",
    defaultMessage:
      "{amount, plural,one {One payment to capture}other {{amount} done tasks}}",
  },
  TasksOut: {
    id: "OjXwwt",
    defaultMessage:
      "{amount, plural,one {One Tasks out of stock}other {{amount} Tasks out of stock}}",
  },
});
