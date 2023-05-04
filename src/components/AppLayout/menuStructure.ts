import changeOfficeIcon from "@assets/images/change-office-icon.svg";
import deviceIcon from "@assets/images/device-icon.svg";
import homeIcon from "@assets/images/menu-home-icon.svg";
import tasksIcon from "@assets/images/tasks-icon.svg";
import wfhIcon from "@assets/images/work-from-home-icon.svg";
import { useExtensions } from "@saleor/apps/useExtensions";
import { sectionNames } from "@saleor/intl";
import { SidebarMenuItem } from "@saleor/macaw-ui";
import { IntlShape } from "react-intl";

// import { AccessAlarm } from '@mui/icons-material';
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
    // {
    //   ariaLabel: "Works & Projects",
    //   iconSrc: wfhIcon,
    //   label: "Works & Projects",
    //   id: "works",
    //   url: "/taskboard",
    //   children: [
    //     {
    //       ariaLabel: "WFH request",
    //       iconSrc: wfhIcon,
    //       label: "WFH request",
    //       id: "wfhRequest",
    //       url: "/taskboard/wfh-request",
    //     },
    //   ],
    // },
    {
      ariaLabel: "WFH Requests",
      iconSrc: wfhIcon,
      label: "WFH Requests",
      id: "wfhRequest",
      url: "/taskboard/wfh-request",
    },
    // {
    //   ariaLabel: "Office",
    //   iconSrc: changeOfficeIcon,
    //   label: "Office",
    //   id: "office",
    //   url: "/taskboard",
    //   children: [
    //     {
    //       ariaLabel: "Change office request",
    //       iconSrc: changeOfficeIcon,
    //       label: "Change office request",
    //       id: "changeOfficeRequest",
    //       url: "/taskboard/change-office-request",
    //     },
    //   ],
    // },
    {
      ariaLabel: "Change Office Requests",
      iconSrc: changeOfficeIcon,
      label: "Change Office Requests",
      id: "changeOfficeRequest",
      url: "/taskboard/change-office-request",
    },
    // {
    //   ariaLabel: "Asset & Facility",
    //   iconSrc: deviceIcon,
    //   label: "Asset & Facility",
    //   id: "asset",
    //   url: "/taskboard",
    //   children: [
    //     {
    //       ariaLabel: "Device requests",
    //       iconSrc: deviceIcon,
    //       label: "Device requests",
    //       id: "devicerequests",
    //       url: "/taskboard/device-request",
    //     },
    //   ],
    // },
    {
      ariaLabel: "Device Requests",
      iconSrc: deviceIcon,
      label: "Device Requests",
      id: "devicerequest",
      url: "/taskboard/device-request",
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
