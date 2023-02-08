import { TaskType } from "../interface/Task";

export const typeTaskMock = [
  {
    currencyCode: "COR",
    defaultCountry: {
      code: "CO",
      country: "Change",
      __typename: "CountryDisplay",
    },
    id: "Q2hhbm5lbDoxMg==",
    isActive: true,
    name: TaskType.CHANGE_OFFICE_REQ,
    slug: "change_office_request",
    stockSettings: {
      allocationStrategy: "PRIORITIZE_HIGH_STOCK",
      __typename: "StockSettings",
    },
    __typename: "Type",
  },
  {
    currencyCode: "DR",
    defaultCountry: {
      code: "D",
      country: "Device",
      __typename: "CountryDisplay",
    },
    id: "Q2hhbm5lbDoxMQ==",
    isActive: true,
    name: TaskType.DEVICE_REQ,
    slug: "device_request",
    stockSettings: {
      allocationStrategy: "PRIORITIZE_HIGH_STOCK",
      __typename: "StockSettings",
    },
    __typename: "Type",
  },
  {
    currencyCode: "WR",
    defaultCountry: {
      code: "W",
      country: "WFH",
      __typename: "CountryDisplay",
    },
    id: "Q2hhbm5lbDoxMU==",
    isActive: true,
    name: TaskType.WFH_REQ,
    slug: "wfh_request",
    stockSettings: {
      allocationStrategy: "PRIORITIZE_HIGH_STOCK",
      __typename: "StockSettings",
    },
    __typename: "Type",
  },
];
