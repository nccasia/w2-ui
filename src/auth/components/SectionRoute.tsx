import React from "react";
import { Route, RouteProps } from "react-router-dom";

import { useUser } from "..";
import NotFound from "../../NotFound";

type MatchPermissionType = "all" | "any";

interface SectionRouteProps extends RouteProps {
  permissions?: any[];
  matchPermission?: MatchPermissionType;
}

const matchAll = (match: MatchPermissionType) => match === "all";

export const SectionRoute: React.FC<SectionRouteProps> = ({
  permissions,
  matchPermission = "all",
  ...props
}) => {
  const { user } = useUser();

  // Prevents race condition
  if (user === undefined) {
    return null;
  }

  const hasSectionPermissions = () => {
    if (!permissions) {
      return true;
    }

    if (matchAll(matchPermission)) {
      return true;
      // return hasAllPermissions(permissions, user);
    }

    return false;
  };

  return hasSectionPermissions() ? <Route {...props} /> : <NotFound />;
};
SectionRoute.displayName = "Route";
export default SectionRoute;
