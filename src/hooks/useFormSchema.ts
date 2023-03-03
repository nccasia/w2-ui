import { useGetFormSchemaLazyQuery } from "@saleor/graphql";
import Ajv from "ajv";
import { useEffect, useMemo } from "react";

import { CustomSchemaBridge } from "./customSchemaBridge";

const ajv = new Ajv({
  allErrors: true,
  formats: { date: true },
  useDefaults: true,
});

function createValidator(schema: object) {
  const validator = ajv.compile(schema);

  return (model: object) => {
    validator(model);
    return validator.errors?.length ? { details: validator.errors } : null;
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
