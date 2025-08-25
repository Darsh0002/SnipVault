import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { CircleChevronRight } from "./CircleChevronRight";

const Home = () => {
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-gray-900/70 backdrop-blur-md border-b border-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-2xl font-extrabold bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 hover:cursor-pointer bg-clip-text text-transparent"
            >
              SnipVault
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            <ScrollLink
              to="Features"
              smooth={true}
              duration={500}
              offset={-70}
              className="text-gray-300 hover:text-teal-400 transition cursor-pointer px-3 py-2 rounded-md hover:bg-gray-800/60"
            >
              Features
            </ScrollLink>

            <ScrollLink
              to="Pricing"
              smooth={true}
              duration={500}
              offset={-70}
              className="text-gray-300 hover:text-purple-400 transition cursor-pointer px-3 py-2 rounded-md hover:bg-gray-800/60"
            >
              Pricing
            </ScrollLink>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <NavLink
              to="/signup"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-teal-500 via-purple-500 to-pink-500 text-white font-medium shadow-md hover:opacity-90 transition-all"
            >
              Register
            </NavLink>
            <NavLink
              to="/login"
              className="px-4 py-2 rounded-lg border border-gray-600 text-gray-300 font-medium hover:bg-gray-800 transition-all"
            >
              Login
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-300 hover:text-white transition">
              {/* Add your hamburger icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative flex items-center justify-center  min-h-screen">
        {/* Background Gradient / Visual Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-transparent" />

        {/* Decorative Code Pattern */}
        <div className="absolute -top-16 pt-10 left-0 text-gray-700/20 text-[10rem] font-bold select-none pointer-events-none">
          {"</>"}
        </div>

        <div className="relative text-center flex flex-col items-center p-10 rounded-2xl shadow-xl bg-gray-800/70 backdrop-blur-lg border border-gray-700 max-w-4xl animate-fadeIn">
          {/* Main Heading */}
          <h1 className="text-6xl font-extrabold mb-4 bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
            SnipVault
          </h1>

          {/* Tagline */}
          <p className="text-lg text-gray-300 mb-6 max-w-2xl leading-relaxed">
            Store, manage, and share your code snippets effortlessly — all in
            one beautifully organized place. Perfect for developers, teams, and
            creators.
          </p>

          {/* Highlighted Feature Badges */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <span className="bg-teal-500/20 text-teal-400 px-4 py-1 rounded-full text-sm border border-teal-500/30">
              Fast & Secure
            </span>
            <span className="bg-purple-500/20 text-purple-400 px-4 py-1 rounded-full text-sm border border-purple-500/30">
              Organize Snippets
            </span>
            <span className="bg-pink-500/20 text-pink-400 px-4 py-1 rounded-full text-sm border border-pink-500/30">
              Share Globally
            </span>
            <span className="bg-indigo-500/20 text-indigo-400 px-4 py-1 rounded-full text-sm border border-indigo-500/30">
              Cloud Synced
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <Link
              to="/signup"
              className="px-4 py-2 flex items-center justify-center rounded-lg bg-gradient-to-r from-teal-500 via-purple-500 to-pink-500 text-white font-medium shadow-lg hover:scale-105 transition-all duration-200"
            >
              Get Started
              <CircleChevronRight />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section
        id="Features"
        className="relative py-12 px-6 bg-gradient-to-b from-gray-900 via-gray-950 to-black"
      >
        {/* Decorative background element */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          {/* You may replace with a branded SVG pattern or blob */}
          <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-800/40 via-transparent to-transparent blur-2xl" />
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Powerful Features to Supercharge Productivity
          </h2>
          <p className="text-lg text-gray-400 mb-14">
            Everything you need to store, organize, and share your code snippets
            — made for developers, teams, and creators.
          </p>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature Card 1 */}
            <div className="p-7 bg-gray-800/70 rounded-2xl border border-gray-700 shadow-md hover:scale-101 transition-all group">
              <div className="flex justify-center items-center mb-4">
                <span className="p-3 bg-teal-500/30 rounded-xl text-2xl text-teal-400 group-hover:bg-teal-600/40 transition-all">
                  <svg /* code icon */ width="28" height="28" fill="none">
                    <path
                      d="M9 18l-6-6 6-6M19 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-100 mb-2">
                Organized Repositories
              </h3>
              <p className="text-gray-400">
                Sort snippets into folders, add tags, and retrieve anything in
                seconds with robust search and filter tools.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="p-7 bg-gray-800/70 rounded-2xl border border-gray-700 shadow-md hover:scale-101 transition-all group">
              <div className="flex justify-center items-center mb-4">
                <span className="p-3 bg-purple-500/30 rounded-xl text-2xl text-purple-400 group-hover:bg-purple-600/40 transition-all">
                  <svg
                    /* shield/privacy icon */ width="28"
                    height="28"
                    fill="none"
                  >
                    <circle
                      cx="14"
                      cy="14"
                      r="12"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M9 14l2 2 4-4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-100 mb-2">
                Privacy Control
              </h3>
              <p className="text-gray-400">
                Keep snippets Public, Private, or Unlisted and control who sees
                your code with a single click.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="p-7 bg-gray-800/70 rounded-2xl border border-gray-700 shadow-md hover:scale-101 transition-all group">
              <div className="flex justify-center items-center mb-4">
                <span className="p-3 bg-pink-500/30 rounded-xl text-2xl text-pink-400 group-hover:bg-pink-600/40 transition-all">
                  <svg /* share icon */ width="28" height="28" fill="none">
                    <path
                      d="M18 8a3 3 0 1 0-6 0v10a3 3 0 1 0 6 0V8z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 16V8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-100 mb-2">
                Effortless Sharing
              </h3>
              <p className="text-gray-400">
                Share any snippet with a unique URL. Collaboration is instant
                and frictionless, perfect for teams and open-source.
              </p>
            </div>

            {/* Feature Card 4 */}
            <div className="p-7 bg-gray-800/70 rounded-2xl border border-gray-700 shadow-md hover:scale-101 transition-all group">
              <div className="flex justify-center items-center mb-4">
                <span className="p-3 bg-indigo-500/30 rounded-xl text-2xl text-indigo-400 group-hover:bg-indigo-600/40 transition-all">
                  <svg /* cloud icon */ width="28" height="28" fill="none">
                    <path
                      d="M7 16a4 4 0 0 1 4-4h1v-3a5 5 0 1 1 10 0v2a3 3 0 0 1 0 6H7z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-100 mb-2">
                Cloud Synced
              </h3>
              <p className="text-gray-400">
                Access your snippets from any device, stay in sync, and never
                lose track of your best solutions.
              </p>
            </div>

            {/* Feature Card 5 */}
            <div className="p-7 bg-gray-800/70 rounded-2xl border border-gray-700 shadow-md hover:scale-101 transition-all group">
              <div className="flex justify-center items-center mb-4">
                <span className="p-3 bg-green-500/30 rounded-xl text-2xl text-green-400 group-hover:bg-green-600/40 transition-all">
                  <svg
                    /* lightning bolt/fast icon */ width="28"
                    height="28"
                    fill="none"
                  >
                    <path
                      d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-100 mb-2">
                Blazing Fast Search
              </h3>
              <p className="text-gray-400">
                Find anything instantly with smart, fuzzy search and advanced
                filters for titles, language, or tags.
              </p>
            </div>

            {/* Feature Card 6 */}
            <div className="p-7 bg-gray-800/70 rounded-2xl border border-gray-700 shadow-md hover:scale-101 transition-all group">
              <div className="flex justify-center items-center mb-4">
                <span className="p-3 bg-yellow-500/30 rounded-xl text-2xl text-yellow-400 group-hover:bg-yellow-600/40 transition-all">
                  <svg
                    /* plug/integrations icon */ width="28"
                    height="28"
                    fill="none"
                  >
                    <path
                      d="M9 17v1a3 3 0 0 0 6 0v-1M12 3v13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-100 mb-2">
                Seamless Integrations
              </h3>
              <p className="text-gray-400">
                Connect with VS Code, GitHub, Slack, and more. Your snippets
                work where you do.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section
        id="Pricing"
        className="relative py-12 px-6 bg-gradient-to-b from-black via-gray-950 to-gray-900"
      >
        {/* Decorative BG */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-500/20 via-transparent to-transparent blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Pricing plans for Everyone
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Free for everyone, with Pro features available.
          </p>

          {/* Plans */}
          <div className="flex flex-col md:flex-row justify-center gap-10">
            {/* Free/Hobby Plan */}
            <div className="flex-1 bg-gray-900/80 border border-gray-700 rounded-2xl p-10 shadow-xl">
              <h3 className="text-2xl font-bold mb-2 text-teal-400">Free</h3>
              <p className="text-sm text-gray-400 mb-6">
                The essentials to store your quality snippets
              </p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-white">$0</span>
                <span className="text-lg text-gray-300 ml-1">/month</span>
              </div>
              <button onClick={() => navigate("/signup")} className="w-full py-3 bg-gray-800 font-semibold rounded-lg text-white border border-gray-700 hover:bg-gray-700 transition mb-7">
                Buy plan
              </button>
              <ul className="text-gray-200 text-left space-y-4 text-base">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Up to 1,000 snippets
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Share code with a
                  unique link
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Support for over 130
                  programming languages
                </li>
              </ul>
            </div>
            {/* Pro Plan Card */}
            <div className="relative flex-1 bg-gray-800/80 backdrop-blur-xl border-2 border-purple-500/40 rounded-2xl p-10 shadow-xl">
              <div className="absolute -top-6 right-6 bg-purple-600/90 text-white text-xs uppercase px-3 py-1 rounded-full font-semibold shadow-md">
                Most popular
              </div>
              <h3 className="text-2xl font-bold mb-2 text-purple-400">Pro</h3>
              <p className="text-sm text-gray-400 mb-6">
                A plan with enhanced SnipVault features
              </p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-white">$5</span>
                <span className="text-lg text-gray-300 ml-1">/month</span>
              </div>

              {/* Buy Plan Button */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-3 bg-gradient-to-r from-teal-500 via-purple-500 to-pink-500 font-bold rounded-lg text-white shadow-lg hover:scale-105 transition mb-7"
              >
                Buy plan
              </button>

              <ul className="text-gray-200 text-left space-y-4 text-base">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> All the features of
                  SnipSave Free Tier
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Unlimited Snippets
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Ability to make
                  snippets private
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Share Snippet With
                  Your Team
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Export all your data
                </li>
              </ul>
            </div>

            {/* Modal Overlay */}
            {isModalOpen && (
              <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
                {/* Modal Card */}
                <div className="bg-gray-900/70 backdrop-blur-lg border border-gray-700 p-8 rounded-2xl shadow-xl max-w-sm w-full text-center animate-fadeIn">
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    Coming Soon..
                  </h3>
                  <p className="text-gray-300 mb-6">
                    We're working hard to bring you this feature soon. Stay
                    tuned!
                  </p>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="px-6 py-2 bg-gradient-to-r from-teal-500 via-purple-500 to-pink-500 rounded-lg text-white font-semibold hover:scale-105 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Glassmorphism Footer at Page End */}
      <footer className="mt-20 w-full bg-gray-900/40 backdrop-blur-xl border-t border-gray-800 rounded-t-3xl shadow-lg px-8 py-8">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          {/* Top part */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 pb-8 border-b border-gray-700/50">
            {/* Logo + Tagline */}
            <div>
              <h3 className="text-2xl font-extrabold bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                SnipVault
              </h3>
              <p className="text-gray-400 mt-2 max-w-xs">
                Store, manage, and share your code snippets effortlessly — all
                in one place.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">
                Quick Links
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <ScrollLink
                    to="Features"
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="hover:text-teal-400 cursor-pointer transition"
                  >
                    Features
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="Pricing"
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="hover:text-purple-400 cursor-pointer transition"
                  >
                    Pricing
                  </ScrollLink>
                </li>
                <li>
                  <a href="/signup" className="hover:text-pink-400 transition">
                    Get Started
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-white transition"
              >
                <FontAwesomeIcon icon={faGithub} className="w-10 h-10" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-gray-400 hover:text-teal-400 transition"
              >
                <FontAwesomeIcon icon={faTwitter} className="w-10 h-10" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-purple-400 transition"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-10 h-10" />
              </a>
            </div>
          </div>

          {/* Bottom part */}
          <div className="pt-6 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} SnipVault. Built by{" "}
            <a
              href="https://www.linkedin.com/in/darsh-balar-802981279/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold hover:text-teal-400 transition"
            >
              Darsh Balar
            </a>
            .
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
