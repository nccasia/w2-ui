import { useUser } from "@saleor/auth";
import { Button } from "@saleor/components/Button";
import useNavigator from "@saleor/hooks/useNavigator";
import useShop from "@saleor/hooks/useShop";
import MembersErrorDialog from "@saleor/permissionGroups/components/MembersErrorDialog";
import PermissionGroupDetailsPage from "@saleor/permissionGroups/components/PermissionGroupDetailsPage";
import createSortHandler from "@saleor/utils/handlers/sortHandler";
import { mapEdgesToItems } from "@saleor/utils/maps";
import { getSortParams } from "@saleor/utils/sort";
import React from "react";
import { useIntl } from "react-intl";

import AssignMembersDialog from "../../components/AssignMembersDialog";
import UnassignMembersDialog from "../../components/UnassignMembersDialog";
import {
  permissionGroupDetailsUrl,
  PermissionGroupDetailsUrlQueryParams,
} from "../../urls";

interface PermissionGroupDetailsProps {
  id: string;
  params: PermissionGroupDetailsUrlQueryParams;
}

export const PermissionGroupDetails: React.FC<PermissionGroupDetailsProps> = ({
  id,
  params,
}) => {
  const navigate = useNavigator();
  const shop = useShop();
  const intl = useIntl();
  const user = useUser();

  const [membersList] = [null];

  const handleSort = createSortHandler(
    navigate,
    params => permissionGroupDetailsUrl(id, params),
    params,
  );

  const lastSourcesOfPermission = [];

  const userPermissions = user?.user.permissions.map(p => p.code) || [];

  const permissions = (shop?.permissions || []).map(perm => ({
    ...perm,
    disabled: !userPermissions.includes(perm.code),
    lastSource: lastSourcesOfPermission.includes(perm.code),
  }));

  const disabled = false;

  return (
    <>
      <PermissionGroupDetailsPage
        permissionGroup={null}
        permissionsExceeded={null}
        members={membersList || []}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onAssign={() => {}}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onUnassign={() => {}}
        errors={[]}
        onSubmit={async () => true}
        permissions={permissions}
        saveButtonBarState={null}
        disabled={disabled}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        toggle={() => {}}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        toggleAll={() => {}}
        isChecked={() => false}
        selected={0}
        sort={getSortParams(params)}
        toolbar={
          <Button variant="secondary" onClick={() => true}>
            {intl.formatMessage({
              id: "15PiOX",
              defaultMessage: "Unassign",
              description: "button title",
            })}
          </Button>
        }
        onSort={handleSort}
      />
      <AssignMembersDialog
        loading={false}
        staffMembers={mapEdgesToItems({ edges: [] })}
        onSearchChange={() => true}
        onFetchMore={() => true}
        disabled={disabled}
        hasMore={false}
        initialSearch=""
        confirmButtonState={null}
        open={params.action === "assign"}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onClose={() => {}}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onSubmit={() => {}}
      />
      <UnassignMembersDialog
        onConfirm={() => true}
        confirmButtonState={null}
        quantity={0}
        open={params.action === "unassign"}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onClose={() => {}}
      />
      <MembersErrorDialog
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onConfirm={() => {}}
        confirmButtonState={null}
        open={false}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onClose={() => {}}
      />
    </>
  );
};

export default PermissionGroupDetails;
