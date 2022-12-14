import homeIcon from "@assets/images/menu-home-icon.svg";
import tasksIcon from "@assets/images/tasks-icon.svg";
import { useExtensions } from "@saleor/apps/useExtensions";
import { sectionNames } from "@saleor/intl";
import { SidebarMenuItem } from "@saleor/macaw-ui";
import { IntlShape } from "react-intl";

import { getMenuItemExtension } from "./utils";

export interface FilterableMenuItem extends Omit<SidebarMenuItem, "children"> {
  children?: FilterableMenuItem[];
  permissions?: any[];
}

function useMenuStructure(
  intl: IntlShape,
  user: any,
): [SidebarMenuItem[], (menuItem: SidebarMenuItem) => void] {
  const extensions = useExtensions([]);

  const handleMenuItemClick = (menuItem: SidebarMenuItem) => {
    const extension = getMenuItemExtension(extensions, menuItem);
    if (extension) {
      extension.open();
      return;
    }
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
      iconSrc: tasksIcon,
      label: intl.formatMessage(sectionNames.tasks),
      id: "tasks",
      url: "/tasks",
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
