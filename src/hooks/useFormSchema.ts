import Ajv from "ajv";
import { useEffect, useMemo, useState } from "react";
import { JSONSchemaBridge } from "uniforms-bridge-json-schema";

const schemaOffice = {
  title: "NewRequestCOR",
  type: "object",
  properties: {
    currentOffice: {
      type: "string",
      nullable: true,
      default: "HN1",
      uniforms: { uiComponent: "SelectOffice" },
    },
    destinationOffice: {
      type: "string",
      nullable: true,
      default: "HN1",
      uniforms: { uiComponent: "SelectOffice" },
    },
    createDate: {
      type: "object",
      format: "date-time",
      default: new Date(),
      nullable: true,
    },
    content: {
      type: "string",
      nullable: true,
      uniforms: { uiComponent: "QuillEditorField" },
    },
  },
  required: ["currentOffice", "destinationOffice", "createDate"] as never[],
};

const schemaDevice = {
  title: "NewRequestDR",
  type: "object",
  properties: {
    createDate: {
      type: "object",
      format: "date-time",
      default: new Date(),
      nullable: true,
    },
    content: {
      type: "string",
      nullable: true,
      uniforms: { uiComponent: "QuillEditorField" },
    },
  },
  required: ["createDate"] as never[],
};

const schemaWFH = {
  title: "NewRequestWFH",
  type: "object",
  properties: {
    createDate: {
      type: "object",
      format: "date-time",
      default: new Date(),
      nullable: true,
    },
    content: {
      type: "string",
      nullable: true,
      uniforms: { uiComponent: "QuillEditorField" },
    },
  },
  required: ["createDate"] as never[],
};

export const handleSchema = (formId: string) => {
  switch (formId) {
    case "Q2hhbm5lbDoxMg==":
      return schemaOffice;
    case "Q2hhbm5lbDoxMQ==":
      return schemaDevice;
    case "Q2hhbm5lbDoxMU==":
      return schemaWFH;
    default:
      break;
  }
};

const ajv = new Ajv({
  allErrors: true,
  formats: { "date-time": true },
  useDefaults: true,
});

function createValidator(schema: object) {
  const validator = ajv.compile(schema);

  return (model: object) => {
    validator(model);
    return validator.errors?.length ? { details: validator.errors } : null;
  };
}

ajv.addVocabulary(["uniforms"]);

export function useFormSchema(typeSelect: string) {
  const [schema, setSchema] = useState<any>();

  useEffect(() => {
    return setSchema(handleSchema(typeSelect));
  }, [typeSelect]);

  const bridge = useMemo(() => {
    if (!schema) {
      return null;
    }
    const schemaValidator = createValidator(schema);
    return new JSONSchemaBridge(schema, schemaValidator);
  }, [schema]);

  return { bridge };
}
