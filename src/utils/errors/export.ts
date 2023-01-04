import { IntlShape } from "react-intl";

import { getCommonFormFieldErrorMessage } from "./common";

function getExportErrorMessage(err: any, intl: IntlShape): string {
  return getCommonFormFieldErrorMessage(err, intl);
}

export default getExportErrorMessage;
