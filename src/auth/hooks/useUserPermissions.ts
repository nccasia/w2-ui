import { useUser } from "..";

export const useUserPermissions = () =>
  useUser().user?.UserPermissions.map(item => item.Permission);
