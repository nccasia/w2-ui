export const getLastSourcesOfPermission = (
  groupId: string,
  userPermissions: any,
) =>
  userPermissions
    .filter(
      perm =>
        perm.sourcePermissionGroups.length === 1 &&
        perm.sourcePermissionGroups[0].id === groupId,
    )
    .map(perm => perm.code);

export const getPermissionsComponentChoices = (
  userPermissions: any,
  shopPermissions: any,
  lastSourcesOfPermissionIds: string[],
) => {
  const userCodes = userPermissions.map(p => p.code) || [];

  return shopPermissions.map(perm => ({
    ...perm,
    __typename: "PermissionData",
    disabled: !userCodes.includes(perm.code),
    lastSource: lastSourcesOfPermissionIds.includes(perm.code),
  }));
};
