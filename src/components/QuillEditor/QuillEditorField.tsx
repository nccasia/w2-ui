import React, { useCallback } from "react";
import { useField } from "uniforms";
import { AutoFieldProps } from "uniforms-material";

import QuillEditor from "./QuillEditor";

type Props = AutoFieldProps;

const QuillEditorField: React.FC<Props> = (props: Props) => {
  const [fieldProps] = useField(props.name, props);
  const handleLongText = useCallback(
    text => {
      fieldProps.onChange(text);
    },
    [fieldProps],
  );

  return (
    <>
      <QuillEditor
        value={fieldProps.value as string}
        onChange={handleLongText}
      />
    </>
  );
};

export default QuillEditorField;
