import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useNavigate } from "react-router-dom";
import {
  faCopy,
  faShareNodes,
  faTrash,
  faThumbtack, // ✅ Pin icon
} from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";

const AllSnippets = () => {
  const navigate = useNavigate();
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
    getAllSnippets();
  }, []);

  async function getAllSnippets() {
    try {
      const response = await fetch(`http://localhost:8080/snippets`);
      if (!response.ok) throw new Error("Failed to fetch Snippets");

      const data = await response.json();
      setSnippets(data);
    } catch (error) {
      console.error("Some issue occurred");
    }
  }

  async function deleteSnippet(id) {
    try {
      const response = await fetch(`http://localhost:8080/snippet/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete snippet");

      toast.success("Snippet deleted successfully");
      setSnippets((prev) => prev.filter((p) => p.id !== id));
    } catch (error) {
      console.error(error);
    }
  }

  function openSnippet(id) {
    navigate(`/snippet/${id}`);
  }

  function handleCopy(text) {
    if (!text) return;
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!", {
      position: "bottom-right",
      autoClose: 1500,
      pauseOnHover: false,
    });
  }

  function handleShare(snippet) {
    if (navigator.share) {
      navigator
        .share({
          title: snippet.title,
          text: "Check out this code snippet!",
          url: `${window.location.origin}/snippet/${snippet.id}`,
        })
        .catch((error) => console.error("Error sharing:", error));
    } else {
      toast.info("Sharing not supported on this browser!", {
        position: "bottom-right",
        autoClose: 1500,
      });
    }
  }

  async function togglePin(snippet) {
    try {
      // If you have an API for pin/unpin, call it here:
      await fetch(`http://localhost:8080/snippet/${snippet.id}/pin`, {
        method: "PATCH", // or POST depending on your backend
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pinned: !snippet.pinned }),
      });

      // Update state
      setSnippets((prev) =>
        prev.map((s) =>
          s.id === snippet.id ? { ...s, pinned: !s.pinned } : s
        )
      );

      toast.success(snippet.pinned ? "Snippet unpinned" : "Snippet pinned", {
        position: "bottom-right",
        autoClose: 1500,
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-950 to-black min-h-screen px-4 py-10">
      <ToastContainer position="bottom-right" autoClose={2000} />

      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-8 text-center bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          My Snippets
        </h1>

        {snippets.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {snippets.map((snippet) => (
              <div
                key={snippet.id}
                className="relative bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-xl shadow-lg p-5 flex flex-col justify-between hover:shadow-teal-500/20 hover:border-teal-400 transition transform hover:-translate-y-1 cursor-pointer group"
                onClick={() => openSnippet(snippet.id)}
              >
                {/* Snippet Title */}
                <h2 className="text-lg font-semibold text-teal-400 truncate group-hover:text-teal-300">
                  {snippet.title}
                </h2>

                {/* Snippet Preview */}
                <p className="text-gray-400 text-sm mt-2 line-clamp-3">
                  {snippet.content}
                </p>

                {/* Action Buttons */}
                <div className="flex justify-end gap-4 mt-4 pt-3 border-t border-gray-700">
                  {/* Pin button */}
                  <button
                    className={`${
                      snippet.pinned
                        ? "text-yellow-400 hover:text-yellow-300"
                        : "text-gray-400 hover:text-yellow-300"
                    } transition`}
                    title={snippet.pinned ? "Unpin snippet" : "Pin snippet"}
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePin(snippet);
                    }}
                  >
                    <FontAwesomeIcon icon={faThumbtack} size="lg" />
                  </button>

                  {/* Copy */}
                  <button
                    className="text-cyan-300 hover:text-cyan-400 transition"
                    title="Copy snippet"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopy(snippet.content);
                    }}
                  >
                    <FontAwesomeIcon icon={faCopy} size="lg" />
                  </button>

                  {/* Share */}
                  <button
                    className="text-green-400 hover:text-green-500 transition"
                    title="Share snippet"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleShare(snippet);
                    }}
                  >
                    <FontAwesomeIcon icon={faShareNodes} size="lg" />
                  </button>

                  {/* Delete */}
                  <button
                    className="text-red-400 hover:text-red-500 transition"
                    title="Delete snippet"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteSnippet(snippet.id);
                    }}
                  >
                    <FontAwesomeIcon icon={faTrash} size="lg" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-lg text-center">
            No snippets yet.{" "}
            <NavLink
              to="/snippet/new"
              className="text-yellow-400 hover:underline"
            >
              Create one now
            </NavLink>
          </p>
        )}
      </div>
    </div>
  );
};

export default AllSnippets;
