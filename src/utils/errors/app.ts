import { IntlShape } from "react-intl";

import { getCommonFormFieldErrorMessage } from "./common";

// const messages = defineMessages({
//   invalidManifestFormat: {
//     id: "pC6/1z",
//     defaultMessage: "Invalid manifest format",
//   },
//   invalidPermission: {
//     id: "D2qihU",
//     defaultMessage: "Permission is invalid",
//   },
//   invalidStatus: {
//     id: "v3WWK+",
//     defaultMessage: "Status is invalid",
//   },
//   invalidUrlFormat: {
//     id: "g/BrOt",
//     defaultMessage: "Url has invalid format",
//   },
//   outOfScopeApp: {
//     id: "C4hCsD",
//     defaultMessage: "App is out of your permissions scope",
//   },
//   outOfScopeGroup: {
//     id: "1n1tOR",
//     defaultMessage: "Group is out of your permission scope",
//   },
//   outOfScopePermission: {
//     id: "4prRLv",
//     defaultMessage: "Permission is out of your scope",
//   },
//   unique: {
//     id: "TDhHMi",
//     defaultMessage: "This needs to be unique",
//   },
// });

function getAppErrorMessage(err: any, intl: IntlShape): string {
  return getCommonFormFieldErrorMessage(err, intl);
}

export default getAppErrorMessage;
