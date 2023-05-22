/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useRef, useState } from "react";
import ToolContext from "../ToolContext";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useOnClickOutside } from "./hooks/useOnClickOutside";

const TextContainer = ({ width, height, placeholder }) => {
  // useContext Hook to access the ToolContext
  const [selectedTool, setSelectedTool] = useContext(ToolContext);

  // useState Hooks for various state variables
  const [content, setContent] = useState(""); // content in the quill editor
  const [showColorPalette, setShowColorPalette] = useState(false); // to manage the visibility of color palette
  const [selectedColor, setSelectedColor] = useState("#000000"); // selected text color
  const [savedSelection, setSavedSelection] = useState(null); // selected range in the quill editor
  const [showHighlightPalette, setShowHighlightPalette] = useState(false); // to manage the visibility of highlight color palette
  const [selectedHighlightColor, setSelectedHighlightColor] =
    useState("#FFFF00"); // selected highlight color

  // useRef Hooks to reference various DOM elements and functions
  const ref = useRef();
  useOnClickOutside(ref, () => {
    // When clicked outside the color palette
    setShowColorPalette(false);
    const quill = quillRef.current.getEditor();
    if (savedSelection) {
      quill.setSelection(savedSelection);
    }
  });
  const highlightRef = useRef();
  useOnClickOutside(highlightRef, () => {
    // When clicked outside the highlight color palette
    setShowHighlightPalette(false);
    const quill = quillRef.current.getEditor();
    if (savedSelection) {
      quill.setSelection(savedSelection);
    }
  });
  // Function to apply highlight color
  const applyHighlightColor = (color) => {
    const quill = quillRef.current.getEditor();
    const selection = quill.getSelection();
    if (selection) {
      quill.format("background", color);
    }
  };
  // Render component for highlight color palette
  const HighlightPalette = () => (
    <div
      ref={highlightRef}
      style={{
        position: "absolute",
        top: "40px",
        right: "40px",
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <div
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          backgroundColor: selectedHighlightColor,
        }}
      />
      <input
        type="color"
        value={selectedHighlightColor}
        onChange={(e) => setSelectedHighlightColor(e.target.value)}
      />
    </div>
  );
  // useEffect Hook to apply highlight color when it changes or the highlight palette is shown
  useEffect(() => {
    if (showHighlightPalette) {
      applyHighlightColor(selectedHighlightColor);
    }
  }, [selectedHighlightColor, showHighlightPalette]);
  // Function to apply text color
  const applyTextColor = (color) => {
    const quill = quillRef.current.getEditor();
    const selection = quill.getSelection();
    if (selection) {
      quill.format("color", color);
    }
  };
  // Render component for color palette
  const ColorPalette = () => (
    <div
      ref={ref}
      style={{
        position: "absolute",
        top: "40px",
        right: "10px",
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <div
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          backgroundColor: selectedColor,
        }}
      />
      <input
        type="color"
        value={selectedColor}
        onChange={(e) => setSelectedColor(e.target.value)}
      />
    </div>
  );
  const containerStyles = {
    width: width || "80%",
    height: height || "1000px",
  };
  const quillRef = useRef(null);
  // useEffect Hook that handles various toolbar actions
  useEffect(() => {
    console.log("tool : ", selectedTool);
    // Call tool function based on the selected tool
    if (selectedTool === "Undo") {
      // Handle undo functionality
      console.log("Undo");
    } else if (selectedTool === "Redo") {
      // Handle redo functionality
      console.log("Redo");
    } else if (selectedTool === "Print") {
      // Handle print functionality
      console.log("Print");
    } else if (selectedTool === "Spelling and grammar check") {
      // Handle spell-check functionality
      console.log("Spell Check");
    } else if (selectedTool === "Paint Format") {
      // Handle spell-check functionality
      console.log("Paint Format");
    } else if (selectedTool === "Zoom") {
      // Handle spell-check functionality
      console.log("Zoom");
    } else if (selectedTool === "Styles") {
      // Handle spell-check functionality
      console.log("Styles");
    } else if (selectedTool === "Font") {
      // Handle spell-check functionality
      console.log("Font");
    } else if (selectedTool === "decrease-font") {
      // Handle spell-check functionality
      console.log("decrease-font");
    } else if (selectedTool === "increase-font") {
      // Handle spell-check functionality
      console.log("increase-font");
    } else if (selectedTool === "bold") {
      // Handle spell-check functionality
      console.log("bold");
      applyBoldFormatting();
      setSelectedTool(null);
    } else if (selectedTool === "italic") {
      console.log("italic");
      applyItalicFormatting();
      setSelectedTool(null);
    } else if (selectedTool === "underline") {
      // Handle spell-check functionality
      console.log("underline");
      applyUnderlineFormatting();
      setSelectedTool(null);
    } else if (selectedTool === "font-color") {
      setShowColorPalette(true);
      const quill = quillRef.current.getEditor();
      setSavedSelection(quill.getSelection());
      setSelectedTool(null);
    } else if (selectedTool === "highlight") {
      // When 'highlight' tool is selected, show highlight color palette
      setShowHighlightPalette(true);
      setSelectedTool(null);
      // Handle spell-check functionality
      console.log("highlight");
    } else if (selectedTool === "add link") {
      // Handle spell-check functionality
      console.log("add link");
    } else if (selectedTool === "add comment") {
      // Handle spell-check functionality
      console.log("add comment");
    } else if (selectedTool === "add image") {
      // Handle spell-check functionality
      console.log("add image");
    } else if (selectedTool === "text-align") {
      // Handle spell-check functionality
      console.log("text-align");
    } else if (selectedTool === "line-space") {
      // Handle spell-check functionality
      console.log("line-space");
    } else if (selectedTool === "CheckList") {
      console.log("CheckList");
    } else if (selectedTool === "BulletList") {
      console.log("BulletList");
    } else if (selectedTool === "NumberList") {
      console.log("NumberList");
    } else if (selectedTool === "Ident Decrease") {
      console.log("Ident Decrease");
    } else if (selectedTool === "Ident Increase") {
      console.log("Ident Increase");
    } else if (selectedTool === "Format Clear") {
      console.log("Format Clear");
    }
    // Add more conditions for other tools...
  }, [selectedTool]);

  // useEffect Hook to apply text color when it changes or the color palette is shown
  useEffect(() => {
    if (showColorPalette) {
      applyTextColor(selectedColor);
    }
  }, [selectedColor, showColorPalette]);
  // Functions to apply bold, underline, and italic formatting
  const applyBoldFormatting = () => {
    const quill = quillRef.current.getEditor();
    const selection = quill.getSelection();
    if (selection) {
      const { index, length } = selection;
      const formats = quill.getFormat(index, length);
      let isBold = formats.bold;
      if (isBold === undefined) isBold = false;
      console.log("Before format change:", isBold);
      quill.format("bold", !isBold);
      const formatsAfter = quill.getFormat(index, length);
      const isBoldAfter = formatsAfter.bold;
      console.log("After format change:", isBoldAfter);
    }
  };
  const applyUnderlineFormatting = () => {
    const quill = quillRef.current.getEditor();
    const selection = quill.getSelection();
    if (selection) {
      const { index, length } = selection;
      const formats = quill.getFormat(index, length);
      let isUnderlined = formats.underline;
      if (isUnderlined === undefined) isUnderlined = false;
      console.log("Before format change:", isUnderlined);
      quill.format("underline", !isUnderlined);
      const formatsAfter = quill.getFormat(index, length);
      const isUnderlinedAfter = formatsAfter.underline;
      console.log("After format change:", isUnderlinedAfter);
    }
  };
  const applyItalicFormatting = () => {
    const quill = quillRef.current.getEditor();
    const selection = quill.getSelection();
    if (selection) {
      const { index, length } = selection;
      const formats = quill.getFormat(index, length);
      let isItalic = formats.italic;
      if (isItalic === undefined) isItalic = false;
      console.log("Before format change:", isItalic);
      quill.format("italic", !isItalic);
      const formatsAfter = quill.getFormat(index, length);
      const isItalicAfter = formatsAfter.italic;
      console.log("After format change:", isItalicAfter);
    }
  };

  // Function to handle content changes in the quill editor
  const handleChange = (value) => {
    setContent(value);
    console.log(value);
    // Update text logic
  };

  // Render the TextContainer component
  return (
    <div className="relative " style={containerStyles}>
      {showColorPalette && <ColorPalette />}
      {showHighlightPalette && <HighlightPalette />}
      <ReactQuill
        ref={quillRef}
        value={content}
        onChange={handleChange}
        modules={{
          toolbar: false, // Disable the toolbar
        }}
        placeholder={placeholder || "Start typing here..."}
        style={{ height: "100%", backgroundColor: "white" }}
      />
    </div>
  );
};

export default TextContainer;
