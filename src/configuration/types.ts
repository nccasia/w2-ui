import { IconProps } from "@material-ui/core";

export interface MenuItem {
  description: string;
  icon: React.ReactElement<IconProps>;
  permissions?: any[];
  title: string;
  url?: string;
  testId?: string;
}

export interface MenuSection {
  label: string;
  menuItems: MenuItem[];
}
