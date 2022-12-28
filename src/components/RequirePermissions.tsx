import { useUserPermissions } from "@saleor/auth/hooks/useUserPermissions";
import React from "react";

const findPerm = (permList, perm) =>
  permList.find(userPerm => userPerm.code === perm);

export function hasPermissions(
  userPermissions: any[],
  requiredPermissions: any[],
): boolean {
  return requiredPermissions.reduce(
    (acc, perm) => acc && !!findPerm(userPermissions, perm),
    true,
  );
}

export function hasOneOfPermissions(
  userPermissions: any[],
  givenPermissions: any[],
): boolean {
  return givenPermissions.some(perm => !!findPerm(userPermissions, perm));
}

export interface RequirePermissionsProps {
  children: React.ReactNode | React.ReactNodeArray;
  requiredPermissions?: any[];
  oneOfPermissions?: any[];
}

const RequirePermissions: React.FC<RequirePermissionsProps> = ({
  children,
  requiredPermissions,
  oneOfPermissions,
}) => {
  const userPermissions = useUserPermissions();

  if (!userPermissions) {
    return null;
  }

  if (
    requiredPermissions &&
    hasPermissions(userPermissions, requiredPermissions)
  ) {
    return <>{children}</>;
  }

  if (
    oneOfPermissions &&
    hasOneOfPermissions(userPermissions, oneOfPermissions)
  ) {
    return <>{children}</>;
  }

  return null;
};

RequirePermissions.displayName = "RequirePermissions";
export default RequirePermissions;
