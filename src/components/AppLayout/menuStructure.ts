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
      ariaLabel: "My Tasks",
      iconSrc: tasksIcon,
      label: "My Tasks",
      id: "tasks",
      url: `/taskboard/my-tasks`,
    },
    {
      ariaLabel: "Works & Projects",
      iconSrc: tasksIcon,
      label: "Works & Projects",
      id: "works",
      url: "/taskboard",
      children: [
        {
          ariaLabel: "WFH request",
          iconSrc: tasksIcon,
          label: "WFH request",
          id: "wfhRequest",
          url: "/taskboard/wfh_request",
        },
      ],
    },
    {
      ariaLabel: "Office",
      iconSrc: tasksIcon,
      label: "Office",
      id: "office",
      url: "/taskboard",
      children: [
        {
          ariaLabel: "Change office request",
          iconSrc: tasksIcon,
          label: "Change office request",
          id: "changeOfficeRequest",
          url: "/taskboard/change_office_request",
        },
      ],
    },
    {
      ariaLabel: "Asset & Facility",
      iconSrc: tasksIcon,
      label: "Asset & Facility",
      id: "asset",
      url: "/taskboard",
      children: [
        {
          ariaLabel: "Device requests",
          iconSrc: tasksIcon,
          label: "Device requests",
          id: "devicerequests",
          url: "/taskboard/device_request",
        },
      ],
    },
  ];

  const isMenuItemPermitted = (menuItem: FilterableMenuItem) => {
    const userPermissions = (user?.UserPermissions || []).map(
      permission => permission.Permission.code,
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
