import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../App.css";

export default function Editor({ editorValue, setEditorValue }) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ align: [] }],
      [{ color: [] }, { background: [] }],
      ["clean"],
    ],
  };
  return (
    <ReactQuill
      modules={modules}
      theme="snow"
      value={editorValue}
      onChange={setEditorValue}
    />
  );
}
