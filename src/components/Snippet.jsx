import React, { useEffect, useState, useRef, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopy,
  faShareNodes,
  faTrash,
  faPen,
  faUndo,
  faRedo,
  faSpinner,
  faCheckCircle,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { okaidia } from "@uiw/codemirror-theme-okaidia";

import ReactMarkdown from "react-markdown";

const Snippet = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [snippet, setSnippet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [isEditingTitle, setIsEditingTitle] = useState(false);

  const [saveStatus, setSaveStatus] = useState("saved");
  const [showPreview, setShowPreview] = useState(false);

  const editorRef = useRef(null);
  const typingTimeoutRef = useRef();

  // Fetch snippet
  useEffect(() => {
    const fetchSnippet = async () => {
      setLoading(true);
      try {
        const resp = await fetch(`http://localhost:8080/snippet/${id}`);
        if (resp.status === 404) {
          setSnippet(null);
          toast.error("Snippet not found");
          setLoading(false);
          return;
        }
        const data = await resp.json();
        setSnippet(data);
        setTitle(data.title);
        setContent(data.content);
      } catch {
        toast.error("Failed to load snippet");
      } finally {
        setLoading(false);
      }
    };
    fetchSnippet();
  }, [id]);

  // Save with debounce
  const updateSnippet = async (newTitle, newContent) => {
    setSaveStatus("saving");
    try {
      const res = await fetch(`http://localhost:8080/update/snippet/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: newTitle, content: newContent }),
      });
      if (!res.ok) throw new Error();
      setSaveStatus("saved");
    } catch {
      setSaveStatus("error");
      toast.error("Failed to save changes");
    }
  };

  const debouncedUpdate = useCallback((newTitle, newContent) => {
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    typingTimeoutRef.current = setTimeout(() => {
      updateSnippet(newTitle, newContent);
    }, 600);
  }, []);

  // Title editing
  const handleTitleChange = (e) => {
    const val = e.target.value;
    setTitle(val);
    debouncedUpdate(val, content);
  };

  const handleTitleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setIsEditingTitle(false);
      updateSnippet(title, content);
    }
    if (e.key === "Escape") {
      e.preventDefault();
      setIsEditingTitle(false);
      setTitle(snippet.title);
    }
  };

  // Content editing
  const handleContentChange = (value) => {
    setContent(value);
    debouncedUpdate(title, value);
  };

  const handleCopy = () => {
    if (!content) return;
    navigator.clipboard.writeText(content);
    toast.success("Copied to clipboard!", { autoClose: 1500 });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title,
          text: "Check out this code snippet!",
          url: `${window.location.origin}/snippet/${id}`,
        })
        .catch(() => toast.error("Error sharing"));
    } else {
      toast.info("Sharing not supported!");
    }
  };

  const deleteSnippet = async () => {
    if (!window.confirm("Are you sure you want to delete this snippet?"))
      return;
    try {
      const resp = await fetch(`http://localhost:8080/snippet/${id}`, {
        method: "DELETE",
      });
      if (!resp.ok) throw new Error();
      toast.success("Snippet deleted");
      navigate("/snippets");
    } catch {
      toast.error("Failed to delete snippet");
    }
  };

  // Loading and Not Found pages
  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white">
        <FontAwesomeIcon icon={faSpinner} spin size="3x" className="mr-4" />
        <span className="text-xl">Loading Snippet...</span>
      </div>
    );

  if (!snippet)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black p-6 text-white gap-4">
        <p className="text-2xl font-semibold">Snippet not found</p>
        <button
          onClick={() => navigate("/snippets")}
          className="px-6 py-3 bg-gradient-to-r from-teal-500 via-purple-500 to-pink-500 rounded-lg text-white font-semibold shadow-lg hover:scale-105 transition"
        >
          Back to Snippets
        </button>
      </div>
    );

  // Main UI
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black px-10  flex flex-col gap-8">
      <ToastContainer />

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6  backdrop-blur-md p-5 rounded-xl ">
        {isEditingTitle ? (
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            onBlur={() => setIsEditingTitle(false)}
            onKeyDown={handleTitleKeyDown}
            autoFocus
            className="max-w-full text-2xl font-bold bg-gray-800/60 backdrop-blur-xl px-4 py-2 rounded-xl border-0 border-teal-400 shadow text-white focus:outline-none focus:ring-4 focus:ring-teal-300"
          />
        ) : (
          <h1
            onClick={() => setIsEditingTitle(true)}
            title="Click to edit title"
            className="text-3xl font-extrabold text-purple-400 cursor-pointer flex items-center gap-2 transition"
          >
            {title}
            <FontAwesomeIcon
              icon={faPen}
              className="text-teal-300 text-2xl hover:text-pink-400 transition"
            />
          </h1>
        )}

        {/* Actions */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleCopy}
            className="px-4 py-2 rounded-lg  text-teal-400 font-semibold shadow hover:scale-105 hover:shadow-cyan-400/40 transition flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faCopy} /> Copy
          </button>
          <button
            onClick={handleShare}
            className="px-4 py-2 rounded-lg  text-purple-400 font-semibold shadow hover:scale-105 hover:shadow-purple-400/40 transition flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faShareNodes} /> Share
          </button>
          <button
            onClick={deleteSnippet}
            className="px-4 py-2 rounded-lg text-red-500 font-semibold shadow hover:scale-105 hover:shadow-red-500/50 transition flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faTrash} /> Delete
          </button>
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="px-4 py-2 rounded-lg bg-gray-800/70 backdrop-blur-md text-white border border-gray-600 hover:bg-gray-700 transition flex items-center gap-2"
          >
            <FontAwesomeIcon icon={showPreview ? faEyeSlash : faEye} />{" "}
            {showPreview ? "Hide" : "Show"} Preview
          </button>
        </div>
      </div>

      {/* Code Editor + Preview */}
      <div className="flex flex-col md:flex-row">
        <div
          className={`flex-grow rounded-xl shadow-lg  overflow-hidden  transition ${
            showPreview ? "md:w-1/2" : "w-full"
          }`}
        >
          <CodeMirror
            ref={editorRef}
            value={content}
            extensions={[javascript()]}
            theme={okaidia}
            onChange={handleContentChange}
            className="min-h-max"
          />
          {/* Save status */}
          <div className="text-right pr-4 py-2 ">
            {saveStatus === "saving" && (
              <span className="flex items-center gap-2 text-teal-400 justify-end">
                <FontAwesomeIcon icon={faSpinner} spin /> Saving...
              </span>
            )}
            {saveStatus === "saved" && (
              <span className="flex items-center gap-2 text-green-400 justify-end">
                <FontAwesomeIcon icon={faCheckCircle} /> All changes saved
              </span>
            )}
            {saveStatus === "error" && (
              <span className="flex items-center gap-2 text-red-500 justify-end">
                Failed to save changes
              </span>
            )}
          </div>
        </div>

        {showPreview && (
          <div className="w-full md:w-1/2 rounded-xl p-4 bg-gray-900/70 backdrop-blur-xl border border-gray-800 text-white overflow-auto max-h-[400px] shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Preview</h2>
            <div className="prose prose-invert max-w-full">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Snippet;
