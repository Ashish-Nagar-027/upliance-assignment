import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button, Container, Typography } from "@mui/material";

const TextEditor = () => {
  const [content, setContent] = useState("Write Here ...");

  const handleSave = () => {
    localStorage.setItem("richTextContent", content);
    alert("Content saved successfully!");
  };

  React.useEffect(() => {
    const savedContent = localStorage.getItem("richTextContent");
    if (savedContent) {
      setContent(savedContent);
    }
  }, []);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        marginTop: 4,
      }}
    >
      <Typography variant="h5">Rich Text Editor</Typography>

      <ReactQuill
        value={content}
        onChange={(value) => setContent(value)}
        modules={{
          toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["clean"],
          ],
        }}
        theme="snow"
        style={{ width: "100%", maxWidth: 800 }}
      />

      <Button variant="contained" color="primary" onClick={handleSave}>
        Save Content
      </Button>
    </Container>
  );
};

export default TextEditor;
