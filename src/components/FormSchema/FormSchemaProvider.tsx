import React, { useCallback } from "react";
import { AutoField } from "uniforms-material";

import CustomDateField from "../CustomDataField/CustomDateField";
import QuillEditorField from "../QuillEditor/QuillEditorField";
import RadioConfirmSubtask from "../RadioConfirmSubtask/RadioConfirmSubtask";
import SelectResourceField from "../SelectResourceField/SelectResourceField";
import TestField from "../TestField/TestField";

const FormSchemaProvider: React.FC = ({ children }) => {
  const value = useCallback((props, uniforms) => {
    if (props.uiComponent === "SelectResourceField") {
      return SelectResourceField;
    }
    if (props.uiComponent === "QuillEditorField") {
      return QuillEditorField;
    }
    if (props.uiComponent === "test") {
      return TestField;
    }
    if (props.field.format === "date") {
      return CustomDateField;
    }
    if (props.uiComponent === "SinglechoiceField") {
      return RadioConfirmSubtask;
    }
    return AutoField.defaultComponentDetector(props, uniforms);
  }, []);

  return (
    <AutoField.componentDetectorContext.Provider value={value}>
      {children}
    </AutoField.componentDetectorContext.Provider>
  );
};

export default FormSchemaProvider;
