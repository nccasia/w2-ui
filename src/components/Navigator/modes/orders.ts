import { UseNavigatorResult } from "@saleor/hooks/useNavigator";
import { maybe, transformOrderStatus } from "@saleor/misc";
import { IntlShape } from "react-intl";

import { QuickSearchAction } from "../types";
import messages from "./messages";

export function isQueryValidOrderNumber(query: string): boolean {
  return query === parseInt(query, 10).toString();
}

export function getGqlOrderId(orderNumber: string): string {
  return btoa(`Order:${orderNumber}`);
}

function getOrdersModeActions(
  query: string,
  intl: IntlShape,
  navigate: UseNavigatorResult,
  order: any,
): QuickSearchAction[] {
  const gqlId = getGqlOrderId(query);

  if (isQueryValidOrderNumber(query) && maybe(() => order.id === gqlId)) {
    return [
      {
        extraInfo: transformOrderStatus(order.status, intl).localized,
        label: intl.formatMessage(messages.goToOrder, {
          orderNumber: query,
        }),
        onClick: () => {
          navigate("/");
          return false;
        },
        type: "action",
      },
    ];
  }

  return [];
}

export default getOrdersModeActions;
