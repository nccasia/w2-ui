import Ajv from "ajv";
import JSONSchemaBridge from "uniforms-bridge-json-schema";

const ajv = new Ajv({
  allErrors: true,
  formats: { date: true },
  useDefaults: true,
});

export const schema = {
  title: "Singlechoice",
  type: "object",
  properties: {
    singlechoice: {
      type: "string",
      nullable: true,
      uniforms: { uiComponent: "SinglechoiceField" },
    },
  },
  required: ["singlechoice"] as never[],
};

ajv.addVocabulary(["uniforms"]);

function createValidator(schema: any) {
  const validator = ajv.compile(schema);

  return (model: Record<string, unknown>) => {
    validator(model);
    return validator.errors?.length ? { details: validator.errors } : null;
  };
}

const schemaValidator = createValidator(schema);

export const bridge = new JSONSchemaBridge(schema, schemaValidator);
