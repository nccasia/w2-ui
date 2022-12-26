import React, { useCallback } from "react";
import { AutoField } from "uniforms-material";

import SelectOffice from "../SelectOffice/SelectOffice";

const FormSchemaProvider: React.FC = ({ children }) => {
  const value = useCallback((props, uniforms) => {
    if (props.format === "office") {
      return SelectOffice;
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
