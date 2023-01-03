import { UseNavigatorResult } from "@saleor/hooks/useNavigator";
import { RelayToFlat } from "@saleor/types";
import { IntlShape } from "react-intl";

import { QuickSearchAction } from "../types";
import messages from "./messages";

export function searchInCustomers(
  intl: IntlShape,
  navigate: UseNavigatorResult,
  customers: RelayToFlat<any>,
): QuickSearchAction[] {
  return customers.map(customer => ({
    caption: customer.email,
    label:
      customer.firstName && customer.lastName
        ? intl.formatMessage(messages.customerWithName, {
            firstName: customer.firstName,
            lastName: customer.lastName,
          })
        : customer.email,
    onClick: () => {
      navigate("/");
      return false;
    },
    score: 1,
    type: "customer",
  }));
}

function getCustomersModeActions(
  intl: IntlShape,
  navigate: UseNavigatorResult,
  customers: RelayToFlat<any>,
): QuickSearchAction[] {
  return searchInCustomers(intl, navigate, customers);
}

export default getCustomersModeActions;
