import { IntlShape } from "react-intl";

import { getCommonFormFieldErrorMessage } from "./common";

function getPageErrorMessage(err: any, intl: IntlShape): string {
  return getCommonFormFieldErrorMessage(err, intl);
}

export default getPageErrorMessage;
