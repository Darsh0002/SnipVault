import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // here you would handle login logic
    console.log("Login data:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-950 to-black px-6">
      {/* Glass Card */}
      <div className="bg-gray-900/50 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-gray-700 w-full max-w-md">
        
        {/* Heading */}
        <h2 className="text-3xl font-extrabold text-center mb-6 bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Welcome Back
        </h2>
        <p className="text-center text-gray-400 mb-8">
          Log in to continue to SnipVault
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={handleChange}
              value={formData.email}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-gray-300 mb-2 font-medium">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={handleChange}
              value={formData.password}
              placeholder="••••••••"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-400">
              <input type="checkbox" className="accent-teal-500" />
              Remember me
            </label>
            <Link to="/forgot-password" className="text-teal-400 hover:text-teal-300">
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-gradient-to-r from-teal-500 via-purple-500 to-pink-500 text-white font-semibold hover:scale-[1.02] transition"
          >
            Log In
          </button>
        </form>

        {/* Sign up link */}
        <p className="text-center text-gray-400 mt-6 text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-teal-400 hover:text-teal-300">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
