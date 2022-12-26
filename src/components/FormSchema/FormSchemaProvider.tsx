import React, { useCallback } from "react";
import { AutoField } from "uniforms-material";

import SelectOffice from "../SelectOffice/SelectOffice";

const FormSchemaProvider: React.FC = ({ children }) => {
  const value = useCallback((props, uniforms) => {
    // eslint-disable-next-line no-console
    console.log("🚀 ~ file: FormSchemaProvider.tsx:8 ~ value ~ props", props);
    if (props.uiWidget === "COR") {
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
