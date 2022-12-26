import Ajv from "ajv";
import { JSONSchemaBridge } from "uniforms-bridge-json-schema";

const ajv = new Ajv({
  allErrors: true,
  formats: { "date-time": true },
  useDefaults: true,
});

const schema = {
  title: "NewRequest",
  type: "object",
  properties: {
    currentOffice: {
      type: "string",
      nullable: true,
      uniforms: { uiWidget: "COR" },
    },
    destinationOffice: {
      type: "string",
      nullable: true,
      uniforms: { uiWidget: "COR" },
    },
    createDate: {
      type: "object",
      format: "date-time",
      default: new Date(),
      nullable: true,
    },
    content: { type: "string", nullable: true },
  },
  required: ["createDate"] as never[],
};

function createValidator(schema: object) {
  const validator = ajv.compile(schema);

  return (model: object) => {
    validator(model);
    return validator.errors?.length ? { details: validator.errors } : null;
  };
}

ajv.addVocabulary(["uniforms"]);

const schemaValidator = createValidator(schema);

export const bridge = new JSONSchemaBridge(schema, schemaValidator);
