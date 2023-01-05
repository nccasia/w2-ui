import { DialogContentText } from "@material-ui/core";
import ActionDialog from "@saleor/components/ActionDialog";
import useNavigator from "@saleor/hooks/useNavigator";
import MenuDetailsPage from "@saleor/navigation/components/MenuDetailsPage";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

import { maybe } from "../../../misc";
import { MenuItemType } from "../../components/MenuItemDialog";
import { unknownTypeError } from "../../components/MenuItems";
import { menuUrl, MenuUrlQueryParams } from "../../urls";

interface MenuDetailsProps {
  id: string;
  params: MenuUrlQueryParams;
}

const MenuDetails: React.FC<MenuDetailsProps> = ({ id, params }) => {
  const navigate = useNavigator();
  const intl = useIntl();

  const closeModal = () =>
    navigate(
      menuUrl(id, {
        ...params,
        action: undefined,
        id: undefined,
      }),
      { replace: true },
    );

  const handleItemClick = (id: string, type: MenuItemType) => {
    switch (type) {
      case "category":
        window.open(id, "blank");
        break;

      case "collection":
        window.open(id, "blank");
        break;

      case "page":
        window.open(id, "blank");
        break;

      case "link":
        window.open(id, "blank");
        break;

      default:
        throw unknownTypeError;
        break;
    }
  };

  // This is a workaround to let know <MenuDetailsPage />
  // that it should clean operation stack if mutations
  // were successful
  const handleSubmit = async () => {
    const result = null;

    return [
      ...result.data.menuItemBulkDelete.errors,
      ...result.data.menuItemMove.errors,
      ...result.data.menuUpdate.errors,
    ];
  };

  return (
    <>
      <MenuDetailsPage
        disabled={false}
        errors={[...[], ...[], ...[]]}
        menu={maybe(() => "")}
        onDelete={() =>
          navigate(
            menuUrl(id, {
              action: "remove",
            }),
          )
        }
        onItemAdd={() =>
          navigate(
            menuUrl(id, {
              action: "add-item",
            }),
          )
        }
        onItemClick={handleItemClick}
        onItemEdit={itemId =>
          navigate(
            menuUrl(id, {
              action: "edit-item",
              id: itemId,
            }),
          )
        }
        onSubmit={handleSubmit}
        saveButtonState={null}
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
            id="G/SYtU"
            defaultMessage="Are you sure you want to delete menu {menuName}?"
            values={{
              menuName: <strong>{maybe(() => " ", "...")}</strong>,
            }}
          />
        </DialogContentText>
      </ActionDialog>
    </>
  );
};
MenuDetails.displayName = "MenuDetails";

export default MenuDetails;
