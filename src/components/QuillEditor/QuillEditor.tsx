import "react-quill/dist/quill.snow.css";

import { makeStyles } from "@saleor/macaw-ui";
import React from "react";
import ReactQuill from "react-quill";

const useStyles = makeStyles(
  () => ({
    container: {
      width: "100%",
      height: "250px",
    },
    quillEditor: {
      height: "200px",
    },
  }),
  { name: "QuillEditor" },
);

interface QuillEditorProps {
  value: string | null;
  key?: number;
  modules?: { toolbar: boolean };
  edit?: boolean;
  onChange: (text: string | null) => void;
}

const QuillEditor: React.FC<QuillEditorProps> = ({
  value,
  key,
  modules,
  edit,
  onChange,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <ReactQuill
        readOnly={edit}
        key={key}
        modules={modules}
        theme="snow"
        value={value}
        className={classes.quillEditor}
        onChange={onChange}
      />
    </div>
  );
};

export default QuillEditor;
