import Ajv, { JSONSchemaType } from "ajv";
import { JSONSchemaBridge } from "uniforms-bridge-json-schema";

const ajv = new Ajv({
  allErrors: true,
  formats: { "date-time": true },
  useDefaults: true,
});

const schema: JSONSchemaType<any> = {
  title: "NewRequest",
  type: "object",
  properties: {
    currentOffice: { type: "string", nullable: true, format: "office" },
    destinationOffice: { type: "string", nullable: true, format: "office" },
    createDate: {
      type: "object",
      format: "date-time",
      default: new Date(),
      nullable: true,
    },
    content: { type: "string", nullable: true },
  },
  // @ts-ignore
  required: ["createDate"] as never[],
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
