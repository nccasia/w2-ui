import { PermissionGroupListUrlSortField } from "@saleor/permissionGroups/urls";
import { createGetSortQueryVariables } from "@saleor/utils/sort";

export function getSortQueryField(sort: PermissionGroupListUrlSortField): any {
  switch (sort) {
    case PermissionGroupListUrlSortField.name:
      return "NAME";
    default:
      return undefined;
  }
}

export const getSortQueryVariables = createGetSortQueryVariables(
  getSortQueryField,
);
