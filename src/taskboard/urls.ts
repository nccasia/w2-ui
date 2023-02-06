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
export const workFlowSectionUrl = urljoin(taskBoardSectionUrl, "workflow");

export const taskListPath = taskSectionUrl;
export const workFlowPath = workFlowSectionUrl;
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

export const workFlowPathUrl = (id: string) => urljoin(workFlowSectionUrl, id);

export const orderListUrl = (params?: TaskListUrlQueryParams): string => {
  const orderList = taskListPath;
  if (params === undefined) {
    return orderList;
  } else {
    return urljoin(orderList, "?" + stringifyQs(params));
  }
};

export const taskDefinitionPath = () =>
  urljoin(taskBoardSectionUrl, "settings");

export const taskPath = (id: string) => urljoin(taskSectionUrl, id);

export const taskBoardPath = (id: string) => urljoin(taskBoardSectionUrl, id);

export const taskListUrl = (_params?: any, id?: string): string => {
  if (id) {
    return urljoin(taskBoardSectionUrl, `/${id}`);
  }
};
// export const taskListUrl = (params?: any): string => {
//   const taskList = taskListPath;
//   if (params === undefined) {
//     return taskList;
//   } else {
//     return urljoin(taskList, "?" + stringifyQs(params));
//   }
// };

export const workUrl = (params?: any): string => {
  const workFlowList = workFlowPath;
  if (params === undefined) {
    return workFlowList;
  } else {
    return urljoin(workFlowList, "?" + stringifyQs(params));
  }
};

export const taskUrl = (id: string, params?: any) =>
  taskPath(encodeURIComponent(id)) + "?" + stringifyQs(params);
export const workFlowUrl = (id: string, params?: any) =>
  workFlowPathUrl(encodeURIComponent(id)) + "?" + stringifyQs(params);
