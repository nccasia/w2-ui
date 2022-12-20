import { stringifyQs } from "@saleor/utils/urls";
import urljoin from "url-join";

export const taskSectionUrl = "/tasks";

export const taskListPath = taskSectionUrl;

export const taskPath = (id: string) => urljoin(taskSectionUrl, id);

export const taskUrl = (id: string, params?: any) =>
  taskPath(encodeURIComponent(id)) + "?" + stringifyQs(params);
