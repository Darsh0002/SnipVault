import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faFileCode,
  faChartBar,
  faArrowUpRightFromSquare,
  faUpload,
  faDownload,
  faCode
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const navigate = useNavigate();
  const [recent, setRecent] = useState([]);
  const [pinned, setPinned] = useState([]);
  const [edited, setEdited] = useState([]);
  const [stats, setStats] = useState({ total: 0, pinned: 0 });
  const [topLanguages, setTopLanguages] = useState([]);

  useEffect(() => {
    getRecentSnippets();
    getPinnedSnippets();
    getRecentlyEdited();
    getTopLanguages();
  }, []);

  async function getRecentSnippets() {
    try {
      const res = await fetch("http://localhost:8080/snippets");
      const data = await res.json();
      setRecent(data.slice(0, 5));
      setStats((prev) => ({ ...prev, total: data.length }));
    } catch (err) {
      console.error(err);
    }
  }

  async function getPinnedSnippets() {
    try {
      const res = await fetch("http://localhost:8080/snippets/pinned");
      const data = await res.json();
      setPinned(data);
      setStats((prev) => ({ ...prev, pinned: data.length }));
    } catch (err) {
      console.error(err);
    }
  }

  async function getRecentlyEdited() {
    try {
      const res = await fetch("http://localhost:8080/snippets");
      const data = await res.json();
      const sorted = data.sort(
        (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
      );
      setEdited(sorted.slice(0, 5));
    } catch (err) {
      console.error(err);
    }
  }

  async function getTopLanguages() {
    try {
      const res = await fetch("http://localhost:8080/snippets");
      const data = await res.json();
      const counts = {};
      data.forEach((s) => {
        const lang = s.language || "Unknown";
        counts[lang] = (counts[lang] || 0) + 1;
      });
      const top = Object.entries(counts).sort((a, b) => b[1] - a[1]);
      setTopLanguages(top.slice(0, 5));
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black px-6 py-10">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-3xl font-extrabold bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="text-gray-400 mt-1">
              Welcome back! Here’s an overview of your SnipVault.
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <button
            onClick={() => navigate("/snippet/new")}
            className="p-4 bg-gray-800/60 border border-gray-700 rounded-lg text-white hover:scale-105 hover:border-teal-400 transition shadow"
          >
            <FontAwesomeIcon icon={faPlus} className="mb-2 text-teal-400" size="lg" />
            <p className="text-sm">New Snippet</p>
          </button>
          <Link
            to="/snippets"
            className="p-4 bg-gray-800/60 border border-gray-700 rounded-lg text-white hover:scale-105 hover:border-purple-400 transition shadow text-center"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="mb-2 text-purple-400" size="lg" />
            <p className="text-sm">View All</p>
          </Link>
          <button className="p-4 bg-gray-800/60 border border-gray-700 rounded-lg text-white hover:scale-105 hover:border-yellow-400 transition shadow text-center">
            <FontAwesomeIcon icon={faUpload} className="mb-2 text-yellow-400" size="lg" />
            <p className="text-sm">Import</p>
          </button>
          <button className="p-4 bg-gray-800/60 border border-gray-700 rounded-lg text-white hover:scale-105 hover:border-green-400 transition shadow text-center">
            <FontAwesomeIcon icon={faDownload} className="mb-2 text-green-400" size="lg" />
            <p className="text-sm">Export</p>
          </button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-gray-800/60 backdrop-blur-lg border border-gray-700 shadow-md flex items-center gap-4">
            <FontAwesomeIcon icon={faFileCode} className="text-3xl text-teal-400" />
            <div>
              <p className="text-gray-400">Total Snippets</p>
              <h3 className="text-2xl font-bold">{stats.total}</h3>
            </div>
          </div>
          <div className="p-6 rounded-xl bg-gray-800/60 backdrop-blur-lg border border-gray-700 shadow-md flex items-center gap-4">
            <FontAwesomeIcon icon={faChartBar} className="text-3xl text-yellow-400" />
            <div>
              <p className="text-gray-400">Pinned Snippets</p>
              <h3 className="text-2xl font-bold">{stats.pinned}</h3>
            </div>
          </div>
        </div>

        {/* Pinned Snippets */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-white">Pinned Snippets</h2>
            <Link to="/snippets" className="text-yellow-400 hover:underline text-sm">Manage Pins</Link>
          </div>
          {pinned.length > 0 ? (
            <ul className="grid sm:grid-cols-2 gap-4">
              {pinned.map((snippet) => (
                <li key={snippet.id} className="p-4 rounded-lg bg-yellow-500/10 backdrop-blur-lg border border-yellow-500/30 shadow hover:border-yellow-400 transition">
                  <Link to={`/snippet/${snippet.id}`}>
                    <h3 className="text-lg font-bold text-yellow-400 truncate">{snippet.title}</h3>
                    <p className="text-gray-300 text-sm mt-1 line-clamp-2">{snippet.content}</p>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No pinned snippets.</p>
          )}
        </div>

        {/* Recent Snippets */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-white">Recent Snippets</h2>
            <Link to="/snippets" className="text-purple-400 hover:underline text-sm">View All</Link>
          </div>
          {recent.length > 0 ? (
            <ul className="grid sm:grid-cols-2 gap-4">
              {recent.map((snippet) => (
                <li key={snippet.id} className="p-4 rounded-lg bg-gray-800/50 backdrop-blur-lg border border-gray-700 shadow hover:border-purple-400 transition">
                  <Link to={`/snippet/${snippet.id}`}>
                    <h3 className="text-lg font-bold text-purple-400 truncate">{snippet.title}</h3>
                    <p className="text-gray-400 text-sm mt-1 line-clamp-2">{snippet.content}</p>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No snippets yet.</p>
          )}
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
