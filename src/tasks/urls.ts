import { stringifyQs } from "@saleor/utils/urls";
import urljoin from "url-join";

export const taskSectionUrl = "/tasks";

export const taskListPath = taskSectionUrl;

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
