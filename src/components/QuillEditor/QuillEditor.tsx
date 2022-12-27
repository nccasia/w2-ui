import "react-quill/dist/quill.snow.css";

import React from "react";
import ReactQuill from "react-quill";

interface QuillEditorProps {
  value: string;
  onChange: (text: any) => void;
}

const QuillEditor: React.FC<QuillEditorProps> = ({ value, onChange }) => {
  return <ReactQuill theme="snow" value={value} onChange={onChange} />;
};

export default QuillEditor;
