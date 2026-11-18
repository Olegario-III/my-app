# Markdown Previewer 📝

A simple and clean **Markdown Previewer** built with React.

Type Markdown on the left and see the live preview instantly on the right.

## ✨ Features

- Live Markdown to HTML conversion
- Default starter content included
- Clean and responsive layout
- Uses the popular `marked` library
- Supports headings, links, code blocks, lists, blockquotes, images, and bold text

## 🖼️ Preview

- Top section: Markdown editor (`textarea`)
- Bottom section: Live rendered preview

## 🚀 How to Run

1. Make sure you have a React project set up
2. Install the required dependency:

``bash
npm install marked

## 🛠️ Tech Stack

React (Functional Component + useState)
marked (Markdown parser)
Inline CSS (optional App.css)

src/
├── App.js          # Main Markdown Previewer component
├── App.css         # Optional custom styles
└── index.js

## 🎯 How It Works

The markdown state holds the current text in the editor
Every time you type, onChange updates the state
The marked library converts the Markdown string into HTML
The preview section uses dangerouslySetInnerHTML to render the HTML
