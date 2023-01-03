import { IntlShape } from "react-intl";

import {
  getCommonFormFieldErrorMessage,
} from "./common";

export type TaxClassError = any;

function getTaxesErrorMessage(
  err: any,
  intl: IntlShape,
): string {
  return getCommonFormFieldErrorMessage(err, intl);
}

export default getTaxesErrorMessage;
