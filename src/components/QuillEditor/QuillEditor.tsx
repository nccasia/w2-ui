import "react-quill/dist/quill.snow.css";

import { makeStyles } from "@saleor/macaw-ui";
import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";

const useStyles = makeStyles(
  theme => ({
    root: {
      width: "100%",
      "& .ql-picker-label": {
        color: theme.palette.type === "dark" && "#FAFAFA",
      },
      "& .ql-editor:before": {
        color: theme.palette.type === "dark" && "rgba(124, 127, 127, 1)",
      },
      "& .ql-toolbar .ql-stroke": {
        stroke: theme.palette.type === "dark" && "#FAFAFA",
      },
      "& .ql-toolbar .ql-fill": {
        fill: theme.palette.type === "dark" && "#FAFAFA",
      },
    },
    labelQuillEditor: {
      color: "rgba(124, 127, 127, 1)",
      fontSize: "1.2rem",
      paddingLeft: "12px",
      fontWeight: 400,
    },
  }),
  { name: "QuillEditor" },
);

export interface QuillEditorProps {
  value: string | null;
  key?: number;
  modules?: { toolbar: boolean };
  readonly?: boolean;
  onChange: (text: string | null) => void;
  label?: string;
  isRequired?: boolean;
}

const QuillEditor: React.FC<QuillEditorProps> = ({
  value,
  key,
  modules,
  readonly,
  onChange,
  label,
  isRequired,
}) => {
  const classes = useStyles();
  const [quillValue, setQuillValue] = useState("");

  const quillRef = useRef<ReactQuill>(null);

  const handleRef = useCallback((ref: ReactQuill) => {
    const quill = ref?.getEditor();
    if (quill === null || quill === undefined) {
      return;
    }

    // disable spellcheck
    quill.root.setAttribute("spellcheck", "false");

    quillRef.current = ref;
  }, []);

  const onQuillValueChange = useCallback(
    (value: string, editor: ReactQuill.UnprivilegedEditor) => {
      setQuillValue(value);
      if (editor.getText() === "\n") {
        return onChange(null);
      }

      onChange(value);
    },
    [onChange],
  );

  useEffect(() => {
    setQuillValue(value);
  }, []);

  return (
    <div className={classes.root}>
      <span className={classes.labelQuillEditor}>
        {isRequired ? `${label} *` : label}
      </span>
      <ReactQuill
        ref={handleRef}
        readOnly={readonly}
        key={key}
        modules={modules}
        theme="snow"
        value={quillValue}
        onChange={(
          value,
          _delta,
          _source,
          editor: ReactQuill.UnprivilegedEditor,
        ) => onQuillValueChange(value, editor)}
        scrollingContainer="#scrolling-container"
        placeholder="Description..."
      />
    </div>
  );
};

export default QuillEditor;
