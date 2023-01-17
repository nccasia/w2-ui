import { useGetFormSchemaQuery } from "@saleor/graphql";
import Ajv from "ajv";
import { useMemo } from "react";

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

ajv.addVocabulary(["uniforms", "formats"]);

export function useFormSchema(formId: string) {
  const { data } = useGetFormSchemaQuery({
    variables: {
      id: formId,
    },
  });

  // @ts-ignore
  const schema = data?.node?.schema;

  const bridge = useMemo(() => {
    if (!schema) {
      return null;
    }
    const schemaValidator = createValidator(schema);
    return new CustomSchemaBridge(schema, schemaValidator);
  }, [schema]);

  return { bridge };
}
