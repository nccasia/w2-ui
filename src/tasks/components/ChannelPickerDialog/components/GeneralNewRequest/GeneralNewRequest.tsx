import { getSubmitButtonOptions, SubmitButtonProps } from "@rjsf/utils";
import FormSchema from "@saleor/components/FormSchema/FormSchema";
import { btnSaveRequest } from "@saleor/styles/modal";
import React from "react";
import { FormattedMessage } from "react-intl";

import {
  schema,
  uiSchema,
  widgets,
} from "./CustomFieldSelect/CustomFieldSelect";
// import { schema } from "./schema";

function SubmitButton(props: SubmitButtonProps) {
  const { uiSchema } = props;
  const { norender } = getSubmitButtonOptions(uiSchema);
  if (norender) {
    return null;
  }
  return (
    <button type="submit" style={btnSaveRequest}>
      <FormattedMessage defaultMessage="SAVE" id="S8ZlY6" />
    </button>
  );
}

const GeneralnewTask: React.FC = () => {
  return (
    <>
      <FormSchema
        schemaForm={schema}
        CustomButton={{ ButtonTemplates: { SubmitButton } }}
        uiSchema={uiSchema}
        widgets={widgets}
      />
    </>
  );
};

export default GeneralnewTask;
