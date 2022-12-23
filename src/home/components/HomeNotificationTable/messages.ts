import { defineMessages } from "react-intl";

export const homeNotificationTableMessages = defineMessages({
  createNewChannel: {
    id: "Nuq83+",
    defaultMessage: "Create new channel",
  },
  noOrders: {
    id: "E9Jssl",
    defaultMessage: "No orders ready to fulfill",
  },
  noPaymentWaiting: {
    id: "5dyOs0",
    defaultMessage: "No payments waiting for capture",
  },
  noProductsOut: {
    id: "bFhzRX",
    defaultMessage: "No products are out of stock",
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
  productOut: {
    id: "cdxwA8",
    defaultMessage:
      "{amount, plural,one {One product out of stock}other {{amount} products out of stock}}",
  },
});
