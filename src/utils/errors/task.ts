import { defineMessages, IntlShape } from "react-intl";

import { getCommonFormFieldErrorMessage } from "./common";
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const messages = defineMessages({
  invalidPassword: {
    id: "eu98dw",
    defaultMessage: "Invalid password",
  },
});

interface ErrorFragment {
  code: any;
  field: string | null;
}

function getTaskErrorMessage(err: ErrorFragment, intl: IntlShape): string {
  return getCommonFormFieldErrorMessage(err, intl);
}

export default getTaskErrorMessage;
