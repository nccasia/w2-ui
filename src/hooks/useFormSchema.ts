import { useGetFormSchemaLazyQuery } from "@saleor/graphql";
import Ajv from "ajv";
import { useEffect, useMemo } from "react";

import { CustomSchemaBridge } from "./customSchemaBridge";

const errorMessages = {
  currentOffice: "You must select your current office",
  destinationOffice: "You must select your destination office",
  dueDate: "You must select a due date!",
  dueDateStart: "You must select a start date",
  dueDateEnd: "You must select an end date",
  content: "You must enter some content",
  type: "You must select the device type",
  detail: "You must enter some details about the device",
  quantity: "You must specify how many devices you want",
};

const ajv = new Ajv({
  allErrors: true,
  formats: { date: true },
  useDefaults: true,
});

function createValidator(schema: object) {
  const validator = ajv.compile(schema);

  return (model: object) => {
    validator(model);
    return validator.errors?.length
      ? {
          details: validator.errors.map(error => {
            const customMessage =
              errorMessages[error.message.match(/'([^']+)'/)[1]];
            const message = customMessage || error.message;
            return { ...error, message };
          }),
        }
      : null;
  };
}

ajv.addVocabulary([
  "uniforms",
  "label",
  "allowedValues",
  "checkboxes",
  "formats",
]);

export function useFormSchema(formId: string) {
  const [fetch, { data }] = useGetFormSchemaLazyQuery();

  // @ts-ignore
  const schema = data?.node?.schema;

  const bridge = useMemo(() => {
    if (!schema) {
      return null;
    }
    const schemaValidator = createValidator(schema);
    return new CustomSchemaBridge(schema, schemaValidator);
  }, [schema]);

  useEffect(() => {
    if (formId) {
      fetch({
        variables: {
          id: formId,
        },
      });
    }
  }, [formId]);

  return { bridge };
}
