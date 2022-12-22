import { RJSFSchema } from "@rjsf/utils";
// chia nho file
export const schema: RJSFSchema = {
  type: "object",
  properties: {
    NewRequest: {
      type: "object",
      properties: {
        currentOffice: {
          type: "string",
          enum: ["one", "two", "three"],
        },
        cestinationOffice: {
          type: "string",
          enum: ["one", "two", "three"],
        },
        createDate: {
          type: "string",
          format: "date",
        },
        Content: {
          type: "string",
        },
        file: {
          type: "string",
          format: "file",
        },
      },
      required: ["currentOffice", "cestinationOffice", "createDate"],
    },
  },
};
