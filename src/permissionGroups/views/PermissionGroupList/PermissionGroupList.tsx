import useListSettings from "@saleor/hooks/useListSettings";
import useNavigator from "@saleor/hooks/useNavigator";
import useNotifier from "@saleor/hooks/useNotifier";
import { usePaginationReset } from "@saleor/hooks/usePaginationReset";
import usePaginator, {
  createPaginationState,
  PaginatorContext,
} from "@saleor/hooks/usePaginator";
import PermissionGroupDeleteDialog from "@saleor/permissionGroups/components/PermissionGroupDeleteDialog";
import { ListViews } from "@saleor/types";
import createDialogActionHandlers from "@saleor/utils/handlers/dialogActionHandlers";
import createSortHandler from "@saleor/utils/handlers/sortHandler";
import { mapEdgesToItems } from "@saleor/utils/maps";
import { getSortParams } from "@saleor/utils/sort";
import React from "react";
import { useIntl } from "react-intl";

import PermissionGroupListPage from "../../components/PermissionGroupListPage";
import {
  permissionGroupListUrl,
  PermissionGroupListUrlDialog,
  PermissionGroupListUrlQueryParams,
} from "../../urls";

interface PermissionGroupListProps {
  params: PermissionGroupListUrlQueryParams;
}

export const PermissionGroupList: React.FC<PermissionGroupListProps> = ({
  params,
}) => {
  const navigate = useNavigator();
  const notify = useNotifier();
  const intl = useIntl();
  const { updateListSettings, settings } = useListSettings(
    ListViews.STAFF_MEMBERS_LIST,
  );

  usePaginationReset(permissionGroupListUrl, params, settings.rowNumber);

  const paginationState = createPaginationState(settings.rowNumber, params);

  const paginationValues = usePaginator({
    pageInfo: null,
    paginationState,
    queryString: params,
  });

  const handleSort = createSortHandler(
    navigate,
    permissionGroupListUrl,
    params,
  );

  const [openModal, closeModal] = createDialogActionHandlers<
    PermissionGroupListUrlDialog,
    PermissionGroupListUrlQueryParams
  >(navigate, permissionGroupListUrl, params);

  const permissionGroups = mapEdgesToItems(null);
  const [deleteError, setDeleteError] = React.useState<
    any
  >();

  return (
    <PaginatorContext.Provider value={paginationValues}>
      <PermissionGroupListPage
        disabled={false}
        settings={settings}
        sort={getSortParams(params)}
        permissionGroups={permissionGroups}
        onDelete={id => openModal("remove", { id })}
        onUpdateListSettings={updateListSettings}
        onSort={handleSort}
      />
      <PermissionGroupDeleteDialog
        onConfirm={() =>
          {}
        }
        error={deleteError}
        name={' '}
        confirmButtonState={"default"}
        open={params.action === "remove"}
        onClose={closeModal}
      />
    </PaginatorContext.Provider>
  );
};

export default PermissionGroupList;
