import "react-quill/dist/quill.snow.css";

import { makeStyles } from "@saleor/macaw-ui";
import React from "react";
import ReactQuill from "react-quill";

const useStyles = makeStyles(
  () => ({
    root: {
      width: "100%",
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
}

const QuillEditor: React.FC<QuillEditorProps> = ({
  value,
  key,
  modules,
  readonly,
  onChange,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
