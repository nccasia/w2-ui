import { DialogContentText } from "@material-ui/core";
import ActionDialog from "@saleor/components/ActionDialog";
import { Button } from "@saleor/components/Button";
import useBulkActions from "@saleor/hooks/useBulkActions";
import useListSettings from "@saleor/hooks/useListSettings";
import useNavigator from "@saleor/hooks/useNavigator";
import { usePaginationReset } from "@saleor/hooks/usePaginationReset";
import usePaginator, {
  createPaginationState,
  PaginatorContext,
} from "@saleor/hooks/usePaginator";
import { buttonMessages } from "@saleor/intl";
import { getStringOrPlaceholder, maybe } from "@saleor/misc";
import { ListViews } from "@saleor/types";
import createSortHandler from "@saleor/utils/handlers/sortHandler";
import { mapEdgesToItems } from "@saleor/utils/maps";
import { getSortParams } from "@saleor/utils/sort";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

import MenuCreateDialog from "../../components/MenuCreateDialog";
import MenuListPage from "../../components/MenuListPage";
import { menuListUrl, MenuListUrlQueryParams } from "../../urls";

interface MenuListProps {
  params: MenuListUrlQueryParams;
}
const MenuList: React.FC<MenuListProps> = ({ params }) => {
  const navigate = useNavigator();
  const { isSelected, listElements, toggle, toggleAll } = useBulkActions(
    params.ids,
  );
  const { updateListSettings, settings } = useListSettings(
    ListViews.NAVIGATION_LIST,
  );

  usePaginationReset(menuListUrl, params, settings.rowNumber);

  const intl = useIntl();

  const closeModal = () =>
    navigate(
      menuListUrl({
        ...params,
        action: undefined,
        id: undefined,
        ids: undefined,
      }),
      { replace: true },
    );

  const paginationState = createPaginationState(settings.rowNumber, params);
  const paginationValues = usePaginator({
    pageInfo: maybe(() => null),
    paginationState,
    queryString: params,
  });

  const handleSort = createSortHandler(navigate, menuListUrl, params);

  return (
    <PaginatorContext.Provider value={paginationValues}>
      <MenuListPage
        disabled={false}
        menus={mapEdgesToItems({ edges: [] })}
        settings={settings}
        onDelete={id =>
          navigate(
            menuListUrl({
              action: "remove",
              id,
            }),
          )
        }
        onUpdateListSettings={updateListSettings}
        onSort={handleSort}
        isChecked={isSelected}
        selected={listElements.length}
        sort={getSortParams(params)}
        toggle={toggle}
        toggleAll={toggleAll}
        toolbar={
          <Button
            onClick={() =>
              navigate(
                menuListUrl({
                  ...params,
                  action: "remove-many",
                  ids: listElements,
                }),
              )
            }
          >
            <FormattedMessage {...buttonMessages.remove} />
          </Button>
        }
      />
      <MenuCreateDialog
        open={params.action === "add"}
        confirmButtonState={null}
        disabled={false}
        errors={[]}
        onClose={closeModal}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onConfirm={() => {}}
      />
      <ActionDialog
        open={params.action === "remove"}
        onClose={closeModal}
        confirmButtonState={null}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onConfirm={() => {}}
        variant="delete"
        title={intl.formatMessage({
          id: "QzseV7",
          defaultMessage: "Delete Menu",
          description: "dialog header",
        })}
      >
        <DialogContentText>
          <FormattedMessage
            id="bj1U23"
            defaultMessage="Are you sure you want to delete {menuName}?"
            values={{
              menuName: getStringOrPlaceholder("menu"),
            }}
          />
        </DialogContentText>
      </ActionDialog>
      <ActionDialog
        open={
          params.action === "remove-many" && maybe(() => params.ids.length > 0)
        }
        onClose={closeModal}
        confirmButtonState={null}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onConfirm={() => {}}
        variant="delete"
        title={intl.formatMessage({
          id: "1LBYpE",
          defaultMessage: "Delete Menus",
          description: "dialog header",
        })}
      >
        <DialogContentText>
          <FormattedMessage
            id="svK+kv"
            defaultMessage="{counter,plural,one{Are you sure you want to delete this menu?} other{Are you sure you want to delete {displayQuantity} menus?}}"
            values={{
              counter: maybe(() => params.ids.length.toString(), "..."),
              displayQuantity: (
                <strong>
                  {maybe(() => params.ids.length.toString(), "...")}
                </strong>
              ),
            }}
          />
        </DialogContentText>
      </ActionDialog>
    </PaginatorContext.Provider>
  );
};
export default MenuList;
