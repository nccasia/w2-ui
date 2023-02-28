import "react-quill/dist/quill.snow.css";

import { makeStyles } from "@saleor/macaw-ui";
import React from "react";
import ReactQuill from "react-quill";

const useStyles = makeStyles(
  () => ({
    root: {
      width: "100%",
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
}

const QuillEditor: React.FC<QuillEditorProps> = ({
  value,
  key,
  modules,
  readonly,
  onChange,
  label,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span className={classes.labelQuillEditor}>{label}</span>
      <ReactQuill
        readOnly={readonly}
        key={key}
        modules={modules}
        theme="snow"
        value={value}
        onChange={onChange}
        scrollingContainer="#scrolling-container"
        placeholder="Description..."
      />
    </div>
  );
};

export default QuillEditor;
