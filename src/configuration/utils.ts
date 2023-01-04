import { IntlShape } from "react-intl";

import { createConfigurationMenu } from ".";
import { MenuItem } from "./types";

export const getConfigMenuItemsPermissions = (intl: IntlShape): any[] =>
  createConfigurationMenu(intl)
    .reduce(
      (prev, { menuItems }) => [
        ...prev,
        ...menuItems.map(({ permissions }) => permissions),
      ],
      [],
    )
    .flat();

export const hasUserMenuItemPermissions = (
  menuItem: MenuItem,
  _user: any,
): boolean => (menuItem.permissions ? false : true);
