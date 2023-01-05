import difference from "lodash/difference";

import { StaffDetailsFormData } from "./components/StaffDetailsPage";

/**
 * Return lists of groups which have to be added and removed from user.
 */
export const groupsDiff = (user: any, formData: StaffDetailsFormData) => {
  const newGroups = formData.permissionGroups;
  const oldGroups = user.permissionGroups.map(u => u.id);

  return {
    addGroups: difference(newGroups, oldGroups),
    removeGroups: difference(oldGroups, newGroups),
  };
};

export const isMemberActive = (staffMember: any) => {
  if (staffMember && "isActive" in staffMember) {
    return staffMember.isActive;
  }

  return false;
};

export const getMemberPermissionGroups = (staffMember: any) => {
  if (staffMember && "permissionGroups" in staffMember) {
    return staffMember.permissionGroups;
  }

  return [];
};
