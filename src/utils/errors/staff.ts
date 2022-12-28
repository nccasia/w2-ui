import { IntlShape } from "react-intl";

import getAccountErrorMessage from "./account";

function getStaffErrorMessage(
  err: any,
  intl: IntlShape,
): string {
  return getAccountErrorMessage(err, intl);
}

export default getStaffErrorMessage;
