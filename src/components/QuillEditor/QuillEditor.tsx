import "react-quill/dist/quill.snow.css";

import React from "react";
import ReactQuill from "react-quill";

interface QuillEditorProps {
  value: string | null;
}

const QuillEditor: React.FC<QuillEditorProps> = ({ value }) => {
  return <ReactQuill theme="snow" value={value} />;
};

export default QuillEditor;
