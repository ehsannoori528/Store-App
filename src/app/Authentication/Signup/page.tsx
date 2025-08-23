"use client";

import React from "react";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-fuchsia-800 mb-6">
          Sign Up
        </h1>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-600"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-600"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-600"
          />
          <button
            type="submit"
            className="bg-fuchsia-700 text-white p-3 rounded-lg font-semibold hover:bg-fuchsia-800 transition"
          >
            Create Account
          </button>
        </form>

        <p className="text-sm text-gray-600 text-center mt-4">
          Already have an account?{" "}
          <a href="./Login" className="text-fuchsia-700 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}