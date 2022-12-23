import QuillEditor from "@saleor/components/QuillEditor/QuillEditor";
import Ajv from "ajv";
import { JSONSchemaBridge } from "uniforms-bridge-json-schema";

const ajv = new Ajv({
  allErrors: true,
  formats: { "date-time": true, file: true },
  useDefaults: true,
});

const schema = {
  title: "NewRequest",
  type: "object",
  properties: {
    currentOffice: {
      type: "string",
      options: [
        {
          label: "Hà Nội 1",
          value: "HN1",
        },
        {
          label: "Hà Nội 2",
          value: "HN2",
        },
        {
          label: "Hà Nội 3",
          value: "HN3",
        },
        {
          label: "Đà Nẵng",
          value: "DN",
        },
      ],
    },
    destinationOffice: {
      type: "string",
      options: [
        {
          label: "Hà Nội 1",
          value: "HN1",
        },
        {
          label: "Hà Nội 2",
          value: "HN2",
        },
        {
          label: "Hà Nội 3",
          value: "HN3",
        },
        {
          label: "Đà Nẵng",
          value: "DN",
        },
      ],
    },
    createDate: { type: "string", format: "date-time" },
    content: { type: "string", uniforms: { component: QuillEditor } },
  },
  required: ["currentOffice", "destinationOffice", "createDate"],
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
