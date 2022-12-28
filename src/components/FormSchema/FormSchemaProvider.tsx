import React, { useCallback } from "react";
import { AutoField } from "uniforms-material";

import QuillEditorField from "../QuillEditor/QuillEditorField";
import SelectOffice from "../SelectOffice/SelectOffice";
import TestField from "../TestField/TestField";

const FormSchemaProvider: React.FC = ({ children }) => {
  const value = useCallback((props, uniforms) => {
    if (props.uiComponent === "SelectOffice") {
      return SelectOffice;
    }
    if (props.uiComponent === "QuillEditorField") {
      return QuillEditorField;
    }
    if (props.uiComponent === "test") {
      return TestField;
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
