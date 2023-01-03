import { IntlShape } from "react-intl";

import { getCommonFormFieldErrorMessage } from "./common";

function getPermissionGroupErrorMessage(
  err: any,
  intl: IntlShape,
): string {

  return getCommonFormFieldErrorMessage(err, intl);
}

export default getPermissionGroupErrorMessage;
