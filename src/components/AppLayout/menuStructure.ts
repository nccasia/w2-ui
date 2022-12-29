import customerIcon from "@assets/images/menu-customers-icon.svg";
import homeIcon from "@assets/images/menu-home-icon.svg";
import translationIcon from "@assets/images/menu-translation-icon.svg";
import {
  extensionMountPoints,
  useExtensions,
} from "@saleor/apps/useExtensions";
import { PermissionEnum, UserFragment } from "@saleor/graphql";
import { sectionNames } from "@saleor/intl";
import { SidebarMenuItem, TasksIcon } from "@saleor/macaw-ui";
import { IntlShape } from "react-intl";

import { customerListUrl } from "../../customers/urls";
import { languageListUrl } from "../../translations/urls";
import { getMenuItemExtension, mapToExtensionsItems } from "./utils";

export interface FilterableMenuItem extends Omit<SidebarMenuItem, "children"> {
  children?: FilterableMenuItem[];
  permissions?: PermissionEnum[];
}

function useMenuStructure(
  intl: IntlShape,
  user: UserFragment,
): [SidebarMenuItem[], (menuItem: SidebarMenuItem) => void] {
  const extensions = useExtensions(extensionMountPoints.NAVIGATION_SIDEBAR);

  const handleMenuItemClick = (menuItem: SidebarMenuItem) => {
    const extension = getMenuItemExtension(extensions, menuItem);
    if (extension) {
      extension.open();
      return;
    }
  };

  const appExtensionsHeaderItem = {
    id: "extensions",
    ariaLabel: "apps",
    label: intl.formatMessage(sectionNames.appExtensions),
  };

  const menuItems: FilterableMenuItem[] = [
    {
      ariaLabel: "home",
      iconSrc: homeIcon,
      label: intl.formatMessage(sectionNames.home),
      id: "home",
      url: "/",
    },
    {
      ariaLabel: "tasks",
      iconSrc: TasksIcon,
      label: intl.formatMessage(sectionNames.tasks),
      id: "tasks",
      url: "/tasks",
    },
    {
      ariaLabel: "customers",
      children: extensions.NAVIGATION_CUSTOMERS.length > 0 && [
        {
          ariaLabel: "customers",
          label: intl.formatMessage(sectionNames.customers),
          permissions: [PermissionEnum.MANAGE_USERS],
          id: "customers",
          url: customerListUrl(),
        },
        ...mapToExtensionsItems(
          extensions.NAVIGATION_CUSTOMERS,
          appExtensionsHeaderItem,
        ),
      ],
      iconSrc: customerIcon,
      label: intl.formatMessage(sectionNames.customers),
      permissions: [PermissionEnum.MANAGE_USERS],
      id: "customers",
      url: customerListUrl(),
    },
    {
      ariaLabel: "translations",
      children: extensions.NAVIGATION_TRANSLATIONS.length > 0 && [
        {
          ariaLabel: "translations",
          label: intl.formatMessage(sectionNames.translations),
          permissions: [PermissionEnum.MANAGE_TRANSLATIONS],
          id: "translations",
          url: languageListUrl,
        },
        ...mapToExtensionsItems(
          extensions.NAVIGATION_TRANSLATIONS,
          appExtensionsHeaderItem,
        ),
      ],
      iconSrc: translationIcon,
      label: intl.formatMessage(sectionNames.translations),
      permissions: [PermissionEnum.MANAGE_TRANSLATIONS],
      id: "translations",
      url: languageListUrl,
    },
  ];

  const isMenuItemPermitted = (menuItem: FilterableMenuItem) => {
    const userPermissions = (user?.userPermissions || []).map(
      permission => permission.code,
    );
    if (!menuItem?.permissions || menuItem?.permissions?.length < 1) {
      return true;
    }
    return menuItem.permissions.some(permission =>
      userPermissions.includes(permission),
    );
  };

  const getFilteredMenuItems = (menuItems: FilterableMenuItem[]) =>
    menuItems.filter(isMenuItemPermitted);

  return [
    menuItems.reduce(
      (resultItems: FilterableMenuItem[], menuItem: FilterableMenuItem) => {
        if (!isMenuItemPermitted(menuItem)) {
          return resultItems;
        }
        const { children } = menuItem;
        const filteredChildren = children
          ? getFilteredMenuItems(children)
          : undefined;

        return [...resultItems, { ...menuItem, children: filteredChildren }];
      },
      [] as FilterableMenuItem[],
    ),
    handleMenuItemClick,
  ];
}

export default useMenuStructure;
