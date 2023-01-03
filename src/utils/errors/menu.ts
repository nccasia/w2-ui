import { IntlShape } from "react-intl";

import { getCommonFormFieldErrorMessage } from "./common";

function getMenuErrorMessage(
  err: any,
  intl: IntlShape,
): string {
  return getCommonFormFieldErrorMessage(err, intl);
}

export default getMenuErrorMessage;
