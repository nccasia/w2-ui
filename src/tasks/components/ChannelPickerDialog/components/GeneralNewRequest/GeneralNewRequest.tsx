import React from "react";
import { AutoForm } from "uniforms-material";

import { bridge as schema } from "./schema";
// https://github.com/vazco/uniforms/issues/750#issuecomment-646588538

export default function GuestFormBasic() {
  // eslint-disable-next-line no-console
  return <AutoForm schema={schema} onSubmit={console.log} />;
}
