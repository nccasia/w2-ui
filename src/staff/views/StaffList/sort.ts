import { UserSortField } from "@saleor/sdk/dist/apollo/types";
import { StaffListUrlSortField } from "@saleor/staff/urls";
import { createGetSortQueryVariables } from "@saleor/utils/sort";

export function getSortQueryField(sort: StaffListUrlSortField): UserSortField {
  switch (sort) {
    case StaffListUrlSortField.name:
      return "LAST_NAME";
    case StaffListUrlSortField.email:
      return "EMAIL";
    default:
      return undefined;
  }
}

export const getSortQueryVariables = createGetSortQueryVariables(
  getSortQueryField,
);
