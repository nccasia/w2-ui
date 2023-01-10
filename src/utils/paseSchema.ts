export const paseSchema = schema => {
  const result = {
    ...schema,
  };
  if (result?.type === "object" && result?.properties) {
    for (const keys of Object.keys(result.properties)) {
      result.properties = {
        ...result.properties,
        [keys]: paseSchema(result.properties[keys]),
      };
    }
  }
  if (result?.type === "object" && result?.format === "date-time") {
    if (result.default === null) {
      result.default = new Date();
    }
  }
  return result;
};
