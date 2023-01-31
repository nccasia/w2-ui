import Ajv from "ajv";
import JSONSchemaBridge from "uniforms-bridge-json-schema";

const ajv = new Ajv({
  allErrors: true,
  useDefaults: true,
});

export const schema = {
  title: "Singlechoice",
  type: "object",
  properties: {
    singlechoice: {
      type: "string",
      nullable: true,
      allowedValues: ["Approve", "Reject"],
      uniforms: {
        index: 1,
        checkboxes: true,
      },
    },
    reason: {
      type: "string",
      nullable: true,
      uniforms: { index: 2 },
    },
  },
  required: ["singlechoice", "reason"] as never[],
};

ajv.addVocabulary(["uniforms", "allowedValues", "checkboxes"]);

function createValidator(schema: any) {
  const validator = ajv.compile(schema);

  return (model: Record<string, unknown>) => {
    validator(model);
    return validator.errors?.length ? { details: validator.errors } : null;
  };
}

const schemaValidator = createValidator(schema);

export const bridge = new JSONSchemaBridge(schema, schemaValidator);
