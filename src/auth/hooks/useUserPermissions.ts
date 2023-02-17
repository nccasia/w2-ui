import { useUser } from "..";

export const useUserPermissions = () => {
  return useUser().user?.UserPermissions.map(item => item.Permission);
};
