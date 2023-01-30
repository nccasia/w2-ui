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
      url: "/taskboard",
    },
    {
      ariaLabel: "Works & Projects",
      iconSrc: tasksIcon,
      label: "Works & Projects",
      id: "works",
      url: "/taskboard",
      children: [
        {
          ariaLabel: "Check-in",
          iconSrc: tasksIcon,
          label: "Check-in",
          id: "checkin",
          url: "/taskboard",
        },
        {
          ariaLabel: "Check-out",
          iconSrc: tasksIcon,
          label: "Check-out",
          id: "checkout",
          url: "/taskboard",
        },
        {
          ariaLabel: "Daily report",
          iconSrc: tasksIcon,
          label: "Daily report",
          id: "dailyreport",
          url: "/taskboard",
        },
        {
          ariaLabel: "Log Timesheet",
          iconSrc: tasksIcon,
          label: "Log Timesheet",
          id: "logtimesheet",
          url: "/taskboard",
        },
      ],
    },
    {
      ariaLabel: "Project Management",
      iconSrc: tasksIcon,
      label: "Project Management",
      id: "project",
      url: "/taskboard",
      children: [
        {
          ariaLabel: "Weekly Report",
          iconSrc: tasksIcon,
          label: "Weekly Report",
          id: "weeklyreport",
          url: "/taskboard",
        },
        {
          ariaLabel: "Weekly Meeting",
          iconSrc: tasksIcon,
          label: "Weekly Meeting",
          id: "weeklymeeting",
          url: "/taskboard",
        },
        {
          ariaLabel: "Retrospective",
          iconSrc: tasksIcon,
          label: "Retrospective",
          id: "retrospective",
          url: "/taskboard",
        },
      ],
    },
    {
      ariaLabel: "Training & Development",
      iconSrc: tasksIcon,
      label: "Training & Development",
      id: "training",
      url: "/taskboard",
      children: [
        {
          ariaLabel: "Review Intern",
          iconSrc: tasksIcon,
          label: "Review Intern",
          id: "reviewintern",
          url: "/taskboard",
        },
      ],
    },
    {
      ariaLabel: "Company Activities",
      iconSrc: tasksIcon,
      label: "Company Activities",
      id: "general",
      url: "/taskboard",
      children: [
        {
          ariaLabel: "Đăng ký Open Tasks",
          iconSrc: tasksIcon,
          label: "Open tasks",
          id: "opentalks",
          url: "/taskboard",
        },
      ],
    },
    {
      ariaLabel: "NCC8 Producer",
      iconSrc: tasksIcon,
      label: "NCC8 Producer",
      id: "ncc8",
      url: "/taskboard",
    },
    {
      ariaLabel: "Finance",
      iconSrc: tasksIcon,
      label: "Finance",
      id: "finance",
      url: "/taskboard",
    },
    {
      ariaLabel: "Danang Office",
      iconSrc: tasksIcon,
      label: "Danang Office",
      id: "danang",
      url: "/taskboard",
    },
    {
      ariaLabel: "Sale & marketing",
      iconSrc: tasksIcon,
      label: "Sale & marketing",
      id: "sale",
      url: "/taskboard",
      children: [
        {
          ariaLabel: "Estimate - Quotation",
          iconSrc: tasksIcon,
          label: "Estimate - Quotation",
          id: "estimate",
          url: "/taskboard",
        },
        {
          ariaLabel: "Bid & Inteview",
          iconSrc: tasksIcon,
          label: "Bid & Inteview",
          id: "bid",
          url: "/taskboard",
        },
      ],
    },
    {
      ariaLabel: "Sipdo",
      iconSrc: tasksIcon,
      label: "Sipdo",
      id: "sipdo",
      url: "/taskboard",
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
          url: "/taskboard",
        },
      ],
    },
    {
      ariaLabel: "Human Resource",
      iconSrc: tasksIcon,
      label: "Human Resource",
      id: "hr",
      url: "/taskboard",
      children: [
        {
          ariaLabel: "Interview",
          iconSrc: tasksIcon,
          label: "Interview",
          id: "interview",
          url: "/taskboard",
        },
        {
          ariaLabel: "Onboarding",
          iconSrc: tasksIcon,
          label: "Onboarding",
          id: "onboarding",
          url: "/taskboard",
        },
        {
          ariaLabel: "Offboarding",
          iconSrc: tasksIcon,
          label: "Offboarding",
          id: "offboarding",
          url: "/taskboard",
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
