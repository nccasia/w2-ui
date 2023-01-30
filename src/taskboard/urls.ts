import {
  ActiveTab,
  BulkAction,
  Dialog,
  Filters,
  FiltersWithKeyValueValues,
  FiltersWithMultipleValues,
  Pagination,
  Sort,
  TabActionDialog,
} from "@saleor/types";
import { stringifyQs } from "@saleor/utils/urls";
import urljoin from "url-join";

export const taskBoardSectionUrl = "/taskboard";

export const taskSectionUrl = urljoin(taskBoardSectionUrl, "tasks");

export const taskListPath = taskSectionUrl;
type CreatetaskDialog = "create-task";

export enum TaskListUrlFiltersEnum {
  createdFrom = "createdFrom",
  createdTo = "createdTo",
  customer = "customer",
  payment = "payment",
  query = "query",
  clickAndCollect = "clickAndCollect",
  preorder = "preorder",
}
export enum OrderListUrlFiltersWithMultipleValues {
  status = "status",
  paymentStatus = "paymentStatus",
  channel = "channel",
  giftCard = "giftCard",
}
export enum OrderListFitersWithKeyValueValues {
  metadata = "metadata",
}

export type TaskListUrlFilters = Filters<TaskListUrlFiltersEnum> &
  FiltersWithMultipleValues<OrderListUrlFiltersWithMultipleValues> &
  FiltersWithKeyValueValues<OrderListFitersWithKeyValueValues>;
export enum TaskListUrlSortField {
  number = "number",
  customer = "customer",
  date = "date",
  fulfillment = "status",
  payment = "payment",
  total = "total",
  rank = "rank",
}
export type TaskListUrlDialog = "cancel" | CreatetaskDialog | TabActionDialog;
export type TaskListUrlSort = Sort<TaskListUrlSortField>;
export type TaskListUrlQueryParams = BulkAction &
  Dialog<TaskListUrlDialog> &
  TaskListUrlFilters &
  TaskListUrlSort &
  Pagination &
  ActiveTab;
export const orderListUrl = (params?: TaskListUrlQueryParams): string => {
  const orderList = taskListPath;
  if (params === undefined) {
    return orderList;
  } else {
    return urljoin(orderList, "?" + stringifyQs(params));
  }
};

export const taskDefinitionPath = (id) => urljoin(taskBoardSectionUrl, "settings");

export const taskPath = (id: string) => urljoin(taskSectionUrl, id);

export const taskListUrl = (params?: any): string => {
  const taskList = taskListPath;
  if (params === undefined) {
    return taskList;
  } else {
    return urljoin(taskList, "?" + stringifyQs(params));
  }
};

export const taskUrl = (id: string, params?: any) =>
  taskPath(encodeURIComponent(id)) + "?" + stringifyQs(params);
