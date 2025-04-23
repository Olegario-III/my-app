import React, { useState } from "react";
import { marked } from "marked";
import "./App.css"; // Optional: for custom styling if you want to use it

function App() {
  const [markdown, setMarkdown] = useState(`# Welcome to my Markdown Previewer!

## This is a sub-heading

[Link to Google](https://google.com)

Here is some inline code: \`<div></div>\`

\`\`\`
function example() {
  return "This is a code block";
}
\`\`\`

- List item one
- List item two

> Blockquote

![Image](https://via.placeholder.com/100)

**Bold Text**
  `);

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>Markdown Previewer</h1>
      <textarea
        id="editor"
        rows="10"
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          marginBottom: "20px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <div
        id="preview"
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "5px",
          backgroundColor: "#f9f9f9",
        }}
        dangerouslySetInnerHTML={{ __html: marked(markdown, { breaks: true }) }}
      />
    </div>
  );
}

export default App;
