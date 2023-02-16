import { useUser } from "..";

export const useUserPermissions = () => {
  // eslint-disable-next-line no-console
  console.log("useUserPermissions", useUser().user);
  return useUser().user?.UserPermissions.map(item => item.Permission);
};
