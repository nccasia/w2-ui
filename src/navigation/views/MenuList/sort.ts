import { MenuListUrlSortField } from "@saleor/navigation/urls";
import { createGetSortQueryVariables } from "@saleor/utils/sort";

export function getSortQueryField(sort: MenuListUrlSortField): any {
  switch (sort) {
    case MenuListUrlSortField.name:
      return "NAME";
    case MenuListUrlSortField.items:
      return "ITEMS_COUNT";
    default:
      return undefined;
  }
}

export const getSortQueryVariables = createGetSortQueryVariables(
  getSortQueryField,
);
