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
    if (
      typeof (model as any).currentOffice !== "undefined" &&
      typeof (model as any).destinationOffice !== "undefined"
    ) {
      if ((model as any).currentOffice === (model as any).destinationOffice) {
        validator.errors = [];
        validator.errors.push({
          instancePath: "",
          schemaPath: "#/required",
          keyword: "required",
          params: {
            missingProperty: "currentOffice",
          },
          message: "Current office and destination office cannot be the same",
        });
        validator.errors.push({
          instancePath: "",
          schemaPath: "#/required",
          keyword: "required",
          params: {
            missingProperty: "destinationOffice",
          },
          message: "Current office and destination office cannot be the same",
        });
      }
    }
    return validator.errors?.length
      ? {
          details: validator.errors.map(error => {
            if (error.message === "must be integer") {
              return {
                ...error,
                message:
                  "You must specify how many devices you want to request",
              };
            }
            if (error.message === "must be >= 1") {
              return {
                ...error,
                message:
                  "Minimum number of requested device must be greater than or equal to 1",
              };
            }
            if (error.message === "must be <= 100") {
              return {
                ...error,
                message:
                  "Maximum number of requested device must be less than or equal to 100",
              };
            }
            if (error.message.includes("currentOffice")) {
              return {
                ...error,
                message: "You must select your current office",
              };
            }
            if (error.message.includes("destinationOffice")) {
              return {
                ...error,
                message: "You must select your destination office",
              };
            }
            return error;
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
