import { appsListUrl } from "@saleor/apps/urls";
import { UseNavigatorResult } from "@saleor/hooks/useNavigator";
import { sectionNames } from "@saleor/intl";
import { menuListUrl } from "@saleor/navigation/urls";
import { permissionGroupListUrl } from "@saleor/permissionGroups/urls";
import { siteSettingsUrl } from "@saleor/siteSettings/urls";
import { staffListUrl } from "@saleor/staff/urls";
import { score } from "fuzzaldrin";
import { IntlShape } from "react-intl";

import { QuickSearchActionInput } from "../../types";

interface View {
  label: string;
  url: string;
}
function searchInViews(
  search: string,
  intl: IntlShape,
  navigate: UseNavigatorResult,
): QuickSearchActionInput[] {
  const views: View[] = [
    {
      label: intl.formatMessage(sectionNames.apps),
      url: appsListUrl(),
    },
    {
      label: intl.formatMessage(sectionNames.attributes),
      url: "/",
    },
    {
      label: intl.formatMessage(sectionNames.categories),
      url: "/",
    },
    {
      label: intl.formatMessage(sectionNames.collections),
      url: "/",
    },
    {
      label: intl.formatMessage(sectionNames.customers),
      url: "/",
    },
    {
      label: intl.formatMessage(sectionNames.draftOrders),
      url: "/",
    },
    {
      label: intl.formatMessage(sectionNames.home),
      url: "/",
    },
    {
      label: intl.formatMessage(sectionNames.navigation),
      url: menuListUrl(),
    },
    {
      label: intl.formatMessage(sectionNames.orders),
      url: "/",
    },
    {
      label: intl.formatMessage(sectionNames.pages),
      url: "/",
    },
    {
      label: intl.formatMessage(sectionNames.permissionGroups),
      url: permissionGroupListUrl(),
    },
    {
      label: intl.formatMessage(sectionNames.plugins),
      url: "/",
    },
    {
      label: intl.formatMessage(sectionNames.productTypes),
      url: "/",
    },
    {
      label: intl.formatMessage(sectionNames.products),
      url: "/",
    },
    {
      label: intl.formatMessage(sectionNames.sales),
      url: "/",
    },
    {
      label: intl.formatMessage(sectionNames.shipping),
      url: "/",
    },
    {
      label: intl.formatMessage(sectionNames.siteSettings),
      url: siteSettingsUrl(),
    },
    {
      label: intl.formatMessage(sectionNames.staff),
      url: staffListUrl(),
    },
    {
      label: intl.formatMessage(sectionNames.taxes),
      url: "/",
    },
    {
      label: intl.formatMessage(sectionNames.vouchers),
      url: "/",
    },
    {
      label: intl.formatMessage(sectionNames.warehouses),
      url: "/",
    },
  ];

  return views.map(view => ({
    label: view.label,
    onClick: () => {
      navigate(view.url);
      return false;
    },
    score: score(view.label, search),
    text: view.label,
    type: "view",
  }));
}

export default searchInViews;
