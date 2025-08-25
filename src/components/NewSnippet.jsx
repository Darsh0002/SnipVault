import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewSnippet = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    language: "",
    content: "",
    visibility: "public",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClear = () => {
    setFormData({
      title: "",
      language: "",
      content: "",
      visibility: "public",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.content) {
      alert("Please fill in all required fields");
      return;
    }

    try {
      const res = await fetch("http://localhost:8080/snippet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to create snippet");

      alert("Snippet created successfully!");
      navigate("/snippets");
    } catch (err) {
      console.error(err);
      alert("Error creating snippet!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-gray-900/60 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-xl p-8">
        {/* Heading */}
        <h1 className="text-3xl font-extrabold text-center mb-6 bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Create New Snippet
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-gray-300 font-medium mb-2">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Enter snippet title"
              required
            />
          </div>

          

          {/* Content */}
          <div>
            <label className="block text-gray-300 font-medium mb-2">
              Content <span className="text-red-500">*</span>
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows="8"
              placeholder="Paste your code here..."
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white font-mono focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="px-4 py-2 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-800 transition-all"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="px-4 py-2 rounded-lg border border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 transition-all"
            >
              Clear
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-teal-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition-all"
            >
              Save Snippet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewSnippet;
