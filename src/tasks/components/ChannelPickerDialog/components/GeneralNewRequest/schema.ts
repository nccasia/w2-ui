import Ajv from "ajv";
import { JSONSchemaBridge } from "uniforms-bridge-json-schema";

const ajv = new Ajv({
  allErrors: true,
  useDefaults: true,
});

const schema = {
  title: "NewRequest",
  type: "object",
  properties: {
    currentOffice: { type: "string" },
    destinationOffice: { type: "string" },
    createDate: { type: "string" },
    content: { type: "string" },
  },
  required: ["createDate"],
};

function createValidator(schema: object) {
  const validator = ajv.compile(schema);

  return (model: object) => {
    validator(model);
    return validator.errors?.length ? { details: validator.errors } : null;
  };
}

ajv.addVocabulary(["options", "uniforms"]);

const schemaValidator = createValidator(schema);

export const bridge = new JSONSchemaBridge(schema, schemaValidator);
