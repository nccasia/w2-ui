import { useUser } from "@saleor/auth";
import { WindowTitle } from "@saleor/components/WindowTitle";
import useShop from "@saleor/hooks/useShop";
import { PermissionData } from "@saleor/permissionGroups/components/PermissionGroupDetailsPage";
import React from "react";
import { useIntl } from "react-intl";

import PermissionGroupCreatePage from "../../components/PermissionGroupCreatePage";

const PermissionGroupCreateView: React.FC = () => {
  const intl = useIntl();
  const shop = useShop();
  const user = useUser();


  const errors = [];

  const userPermissions = user?.user.userPermissions.map(p => p.code) || [];

  const permissions: PermissionData[] =
    shop?.permissions.map(
      p =>
        ({
          ...p,
          disabled: !userPermissions.includes(p.code),
          lastSource: false,
        } as PermissionData),
    ) || [];

  return (
    <>
      <WindowTitle
        title={intl.formatMessage({
          id: "Irflxf",
          defaultMessage: "Create category",
          description: "window title",
        })}
      />
      <PermissionGroupCreatePage
        errors={errors}
        disabled={false}
        permissions={permissions}
        saveButtonBarState={null}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onSubmit={null}
      />
    </>
  );
};
PermissionGroupCreateView.displayName = "PermissionGroupCreateView";

export default PermissionGroupCreateView;
