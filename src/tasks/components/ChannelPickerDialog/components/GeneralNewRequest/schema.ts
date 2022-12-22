import Ajv from "ajv";
import { JSONSchemaBridge } from "uniforms-bridge-json-schema";

const ajv = new Ajv({ allErrors: true, useDefaults: true });

const schema = {
  title: "Person",
  type: "object",
  properties: {
    firstName: { type: "string" },
    lastName: { type: "string" },
    age: {
      description: "Age in years",
      type: "integer",
      minimum: 0,
    },
  },
  required: ["firstName", "lastName"],
};

function createValidator(schema: object) {
  const validator = ajv.compile(schema);

  return (model: object) => {
    validator(model);
    return validator.errors?.length ? { details: validator.errors } : null;
  };
}

const schemaValidator = createValidator(schema);

export const bridge = new JSONSchemaBridge(schema, schemaValidator);
