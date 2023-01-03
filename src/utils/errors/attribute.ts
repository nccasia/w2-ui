import { IntlShape } from "react-intl";

import { getCommonFormFieldErrorMessage } from "./common";

// const messages = defineMessages({
//   alreadyExists: {
//     id: "KFv8hX",
//     defaultMessage: "An attribute already exists.",
//   },
//   nameAlreadyTaken: {
//     id: "FuAV5G",
//     defaultMessage: "This name is already taken. Please provide another.",
//   },
//   notFound: {
//     id: "SKFr04",
//     defaultMessage: "Attribute not found.",
//   },
// });

function getAttributeErrorMessage(err: any, intl: IntlShape): string {
  return getCommonFormFieldErrorMessage(err, intl);
}

export default getAttributeErrorMessage;
