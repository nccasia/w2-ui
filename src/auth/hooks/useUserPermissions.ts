import { useUser } from "..";

export const useUserPermissions = () => useUser().user?.UserPermissions;
