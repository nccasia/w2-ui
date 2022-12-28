import { commonMessages } from "@saleor/intl";
import { IntlShape } from "react-intl";

import { UseNavigatorResult } from "../../../hooks/useNavigator";
import { UseNotifierResult } from "../../../hooks/useNotifier";
import { menuListUrl, menuUrl } from "../../urls";

export function handleItemCreate(
  data: any,
  notify: UseNotifierResult,
  closeModal: () => void,
  intl: IntlShape,
) {
  if (data.menuItemCreate.errors.length === 0) {
    closeModal();
    notify({
      status: "success",
      text: intl.formatMessage(commonMessages.savedChanges),
    });
  }
}

export function handleItemUpdate(
  data: any,
  id: string,
  navigate: UseNavigatorResult,
  notify: UseNotifierResult,
  intl: IntlShape,
) {
  if (data.menuItemUpdate.errors.length === 0) {
    notify({
      status: "success",
      text: intl.formatMessage(commonMessages.savedChanges),
    });
    navigate(
      menuUrl(id, {
        action: undefined,
        id: undefined,
      }),
    );
  }
}

export function handleDelete(
  data: any,
  navigate: UseNavigatorResult,
  notify: UseNotifierResult,
  intl: IntlShape,
) {
  if (data.menuDelete.errors.length === 0) {
    notify({
      status: "success",
      text: intl.formatMessage(commonMessages.savedChanges),
    });
    navigate(menuListUrl(), { replace: true });
  }
}

export function handleUpdate(
  data: any,
  notify: UseNotifierResult,
  refetch: () => void,
  intl: IntlShape,
) {
  if (
    data.menuItemBulkDelete.errors.length === 0 &&
    data.menuItemMove.errors.length === 0 &&
    data.menuUpdate.errors.length === 0
  ) {
    notify({
      status: "success",
      text: intl.formatMessage(commonMessages.savedChanges),
    });
    refetch();
  }
}
