import { defineMessages, IntlShape } from "react-intl";

import { getCommonFormFieldErrorMessage } from "./common";

const messages = defineMessages({
  slugUnique: {
    id: "QFBjlV",
    defaultMessage:
      "Stock for this warehouse already exists for this product variant",
    description: "error message",
  },
});

function getStockErrorMessage(err: any, intl: IntlShape): string {
  if (err) {
    switch (err.code) {
      case "UNIQUE":
        return intl.formatMessage(messages.slugUnique);
    }
  }

  return getCommonFormFieldErrorMessage(err, intl);
}

export function getBulkStockErrorMessage(_err: any, _intl: IntlShape): string {
  return "";
}

export default getStockErrorMessage;
