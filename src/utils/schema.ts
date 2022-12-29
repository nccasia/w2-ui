export const schemaOffice = {
  title: "NewRequestCOR",
  type: "object",
  properties: {
    currentOffice: {
      type: "string",
      nullable: true,
      default: "HN1",
      uniforms: { uiComponent: "SelectResourceField" },
    },
    destinationOffice: {
      type: "string",
      nullable: true,
      default: "HN1",
      uniforms: { uiComponent: "SelectResourceField" },
    },
    dueDate: {
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
  required: ["currentOffice", "destinationOffice", "dueDate"] as never[],
};

export const schemaDevice = {
  title: "NewRequestDR",
  type: "object",
  properties: {
    device: {
      type: "array",
      items: {
        type: "object",
        properties: {
          type: {
            type: "string",
            uniforms: { uiComponent: "SelectResourceField" },
          },
          quantity: {
            type: "integer",
            minimum: 1,
            maximum: 100,
          },
          detail: {
            type: "string",
          },
        },
        required: ["type", "detail", "quantity"] as never[],
      },
      minItems: 1,
    },
    dueDate: {
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
  required: ["dueDate"] as never[],
};

export const schemaWFH = {
  title: "NewRequestWFH",
  type: "object",
  properties: {
    dueDateStart: {
      type: "object",
      format: "date-time",
      default: new Date(),
      nullable: true,
    },
    dueDateEnd: {
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
  required: ["dueDateStart", "dueDateEnd", "content"] as never[],
};
