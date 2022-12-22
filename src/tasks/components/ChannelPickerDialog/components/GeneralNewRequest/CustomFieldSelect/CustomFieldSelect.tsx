import {
  RegistryWidgetsType,
  RJSFSchema,
  UiSchema,
  WidgetProps,
} from "@rjsf/utils";
import React from "react";

export const schema: RJSFSchema = {
  type: "object",
  properties: {
    NewRequest: {
      type: "object",
      properties: {
        currentOffice: {
          type: "string",
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

const CustomCheckbox: React.FC = (props: WidgetProps) => {
  // eslint-disable-next-line no-console
  // const { selectAgeOptions } = props.options as any;
  return (
    <input
      type="text"
      className="custom"
      value={props.value}
      required={props.required}
      onChange={event => props.onChange(event.target.value)}
    />
  );

  // return (
  //   <>
  //     <FormControl variant="outlined">
  //       <Select
  //         native
  //         label="Age"
  //         inputProps={{
  //           name: "age",
  //           id: "outlined-age-native-simple",
  //         }}
  //       >
  //         <option aria-label="None" value="" />
  //         {selectAgeOptions.map(item => {
  //           return <option value={10}>{item}</option>;
  //         })}
  //       </Select>
  //     </FormControl>
  //     <FormControl variant="outlined">
  //       <Select
  //         native
  //         label="Age"
  //         inputProps={{
  //           name: "age",
  //           id: "outlined-age-native-simple",
  //         }}
  //       >
  //         <option aria-label="None" value="" />
  //         <option value={10}>{props.value}</option>
  //         <option value={20}>{props.value}</option>
  //         <option value={30}>{props.value}</option>
  //       </Select>
  //     </FormControl>
  //   </>
  // );
};

export const uiSchema: UiSchema = {
  "ui:widget": "customCheckbox",
};

export const widgets: RegistryWidgetsType = {
  customCheckbox: CustomCheckbox,
};
