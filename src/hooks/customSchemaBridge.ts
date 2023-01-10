import { paseSchema } from "@saleor/utils/paseSchema";
import { joinName } from "uniforms";
import { JSONSchemaBridge } from "uniforms-bridge-json-schema";

export class CustomSchemaBridge extends JSONSchemaBridge {
  constructor(
    schema: Record<string, any>,
    public validator: (model: Record<string, any>) => any,
  ) {
    const paseSchem = paseSchema(schema);
    super(paseSchem, validator);
  }
  getSubfields(name = "") {
    const field = this.getField(name);
    const {
      properties = field.properties,
      type = field.type,
    } = this._compiledSchema[name];

    if (type === "object" && properties) {
      const propertieFields = Object.entries(properties)
        .sort((item1, item2) => {
          // @ts-ignore
          const index1 = item1[1]?.uniforms?.index ?? 99;
          // @ts-ignore
          const index2 = item2[1]?.uniforms?.index ?? 99;
          return index1 - index2;
        })
        .map(item => {
          return item[0];
        })
        .map(joinName.escape);

      return propertieFields;
    }

    return [];
  }
}
