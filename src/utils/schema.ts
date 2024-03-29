import Ajv from "ajv";
import JSONSchemaBridge from "uniforms-bridge-json-schema";

const ajv = new Ajv({
  allErrors: true,
  useDefaults: true,
});

export const schema = {
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema",
  definitions: {
    actionObject: {
      type: "object",
      properties: {
        type: {
          type: "string",
          definition: "The action type",
        },
      },
      additionalProperties: true,
      required: ["type"],
    },
    baseStateNode: {
      type: "object",
      properties: {
        id: {
          type: "string",
        },
        key: {
          type: "string",
        },
        type: {
          type: "string",
          enum: ["atomic", "compound", "parallel", "final", "history"],
        },
        order: {
          $ref: "#/definitions/order",
        },
        description: {
          type: "string",
          description: "The description of the state node, in Markdown",
        },
      },
      required: ["id", "key", "type"],
    },
    compoundStateNode: {
      allOf: [
        { $ref: "#/definitions/baseStateNode" },
        {
          type: "object",
          properties: {
            type: {
              type: "string",
              pattern: "compound",
            },
            entry: {
              type: "array",
              items: {
                $ref: "#/definitions/actionObject",
              },
            },
            exit: {
              type: "array",
              items: {
                $ref: "#/definitions/actionObject",
              },
            },
            initial: {
              type: "string",
            },
            invoke: {
              $ref: "#/definitions/invokeArray",
            },
            on: {
              $ref: "#/definitions/transitionsObject",
            },
            states: {
              $ref: "#/definitions/statesObject",
            },
          },
          required: ["states"],
        },
      ],
    },
    parallelStateNode: {
      allOf: [
        { $ref: "#/definitions/baseStateNode" },
        {
          type: "object",
          properties: {
            type: {
              type: "string",
              pattern: "parallel",
            },
            entry: {
              type: "array",
              items: {
                $ref: "#/definitions/actionObject",
              },
            },
            exit: {
              type: "array",
              items: {
                $ref: "#/definitions/actionObject",
              },
            },
            invoke: {
              $ref: "#/definitions/invokeArray",
            },
            on: {
              $ref: "#/definitions/transitionsObject",
            },
            states: {
              $ref: "#/definitions/statesObject",
            },
          },
          required: ["states"],
        },
      ],
    },
    atomicStateNode: {
      allOf: [
        { $ref: "#/definitions/baseStateNode" },
        {
          type: "object",
          properties: {
            type: {
              type: "string",
              pattern: "atomic",
            },
            entry: {
              type: "array",
              items: {
                $ref: "#/definitions/actionObject",
              },
            },
            exit: {
              type: "array",
              items: {
                $ref: "#/definitions/actionObject",
              },
            },
            invoke: {
              $ref: "#/definitions/invokeArray",
            },
            on: {
              $ref: "#/definitions/transitionsObject",
            },
          },
          required: ["on"],
        },
      ],
    },
    historyStateNode: {
      allOf: [
        { $ref: "#/definitions/baseStateNode" },
        {
          type: "object",
          properties: {
            type: {
              type: "string",
              pattern: "history",
            },
            history: {
              type: "string",
              enum: ["shallow", "deep"],
            },
          },
          required: ["history"],
        },
      ],
    },
    finalStateNode: {
      allOf: [
        { $ref: "#/definitions/baseStateNode" },
        {
          type: "object",
          properties: {
            type: {
              type: "string",
              pattern: "final",
            },
            data: {
              type: "object",
            },
          },
        },
      ],
    },
    statesObject: {
      type: "object",
      properties: {
        stateForm: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: {
                type: "string",
              },
              key: {
                type: "string",
              },
              type: {
                type: "string",
                enum: ["atomic", "compound", "parallel", "final", "history"],
              },
              order: {
                type: "integer",
              },
              description: {
                type: "string",
                description: "The description of the state node, in Markdown",
              },
            },
            required: ["id", "key", "type"],
          },
        },
        stateOptions: {
          type: "array",
          items: {
            type: "object",
            properties: {
              type: {
                type: "string",
                pattern: "compound",
              },
              entry: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    type: {
                      type: "string",
                      definition: "The action type",
                    },
                  },
                  additionalProperties: true,
                  required: ["type"],
                },
              },
              exit: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    type: {
                      type: "string",
                      definition: "The action type",
                    },
                  },
                  additionalProperties: true,
                  required: ["type"],
                },
              },
              initial: {
                type: "string",
              },
              invoke: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    type: {
                      type: "string",
                    },
                    id: {
                      type: "string",
                    },
                    src: {
                      type: "object",
                      properties: {
                        type: { type: "string" },
                      },
                    },
                    // autoForward: {
                    //   type: "boolean",
                    //   default: false,
                    // },
                  },
                  required: ["type", "id", "src"],
                  additionalProperties: false,
                },
              },
              on: {
                type: "object",
                patternProperties: {
                  "^.*$": {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        actions: {
                          type: "array",
                          items: {
                            type: "object",
                            properties: {
                              type: {
                                type: "string",
                                definition: "The action type",
                              },
                            },
                            additionalProperties: true,
                            required: ["type"],
                          },
                        },
                        cond: {
                          type: "object",
                        },
                        eventType: {
                          type: "string",
                        },
                        source: {
                          type: "string",
                        },
                        target: {
                          type: "array",
                          items: {
                            type: "string",
                          },
                        },
                      },
                      required: ["actions", "eventType", "source", "target"],
                    },
                  },
                },
              },
              // states: {
              //   $ref: "#/definitions/statesObject",
              // },
            },
            required: ["states"],
          },
        },
      },
    },
    transitionsObject: {
      type: "object",
      patternProperties: {
        "^.*$": {
          type: "array",
          items: {
            $ref: "#/definitions/transitionObject",
          },
        },
      },
    },
    transitionObject: {
      type: "object",
      properties: {
        actions: {
          type: "array",
          items: {
            $ref: "#/definitions/actionObject",
          },
        },
        cond: {
          type: "object",
        },
        eventType: {
          type: "string",
        },
        source: {
          type: "string",
        },
        target: {
          type: "array",
          items: {
            type: "string",
          },
        },
      },
      required: ["actions", "eventType", "source", "target"],
    },
    invokeObject: {
      type: "object",
      properties: {
        type: {
          type: "string",
        },
        id: {
          type: "string",
        },
        src: {
          type: "object",
          properties: {
            type: { type: "string" },
          },
        },
        autoForward: {
          type: "boolean",
          default: false,
        },
      },
      required: ["type", "id", "src"],
      additionalProperties: false,
    },
    invokeArray: {
      type: "array",
      items: {
        $ref: "#/definitions/invokeObject",
      },
    },
    functionObject: {
      type: "object",
      properties: {
        $function: {
          type: "string",
        },
      },
    },
    order: {
      type: "integer",
    },
  },
  properties: {
    id: {
      title: "ID",
      type: "string",
    },
    initial: {
      type: "string",
    },
    key: {
      type: "string",
    },
    type: {
      type: "string",
      enum: ["compound", "parallel"],
    },
    context: {
      type: "object",
    },
    states: {
      $ref: "#/definitions/statesObject",
    },
    on: {
      $ref: "#/definitions/transitionsObject",
    },
    transitions: {
      type: "array",
      items: {
        $ref: "#/definitions/transitionObject",
      },
    },
    order: {
      $ref: "#/definitions/order",
    },
    invoke: {
      $ref: "#/definitions/invokeArray",
    },
    version: {
      type: "string",
    },
  },
  required: ["id", "key", "type", "states"],
};

ajv.addVocabulary([
  "uniforms",
  "allowedValues",
  "checkboxes",
  "definition",
  "prefixItems",
]);

function createValidator(schema: any) {
  const validator = ajv.compile(schema);

  return (model: Record<string, unknown>) => {
    validator(model);
    return validator.errors?.length ? { details: validator.errors } : null;
  };
}

const schemaValidator = createValidator(schema);

export const bridge = new JSONSchemaBridge(schema, schemaValidator);
