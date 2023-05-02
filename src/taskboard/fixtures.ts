import { FilterElement, FilterElementRegular } from "@saleor/components/Filter";
import { getSingleEnumValueQueryParam } from "@saleor/utils/filters";

import {
  OrderListUrlFiltersWithMultipleValues,
  TaskListUrlFilters,
} from "./urls";

export enum TaskFilterKeys {
  status = "Status",
  state = "State",
  REJECTED = "REJECTED",
  APPROVED = "APPROVED",
  PM_APPROVAL = "PM_APPROVAL",
  CUSTOMER_APPROVAL = "CUSTOMER_APPROVAL",
  CUSTOMER_OFFICE_APPROVAL = "CUSTOMER_OFFICE_APPROVAL",
  IT_APPROVAL = "IT_APPROVAL",
  DONE = "DONE",
  DOING = "DOING",
  PENDING = "PENDING",
  DESTINATION_OFFICE_APPROVAL = "DESTINATION_OFFICE_APPROVAL",
}

export function getFilterQueryParam(
  filter: FilterElement<TaskFilterKeys>,
): TaskListUrlFilters {
  const { name } = filter;

  switch (name) {
    case TaskFilterKeys.status:
      return getSingleEnumValueQueryParam(
        filter as FilterElementRegular<TaskFilterKeys.status>,
        OrderListUrlFiltersWithMultipleValues.status,
        TaskFilterKeys,
      );
    case TaskFilterKeys.state:
      return getSingleEnumValueQueryParam(
        filter as FilterElementRegular<TaskFilterKeys.state>,
        OrderListUrlFiltersWithMultipleValues.state,
        TaskFilterKeys,
      );
  }
}
