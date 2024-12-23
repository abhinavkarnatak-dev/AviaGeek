"use client";

import React from "react";
import Link from "next/link";
import { LogIn } from "lucide-react";

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <div className="h-screen bg-[#19232d] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#19232d]/50 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-[#dcbb87]/20">
        <div className="flex items-center justify-center mb-8">
          <LogIn className="w-10 h-10 text-[#dcbb87]" />
        </div>
        <h1 className="text-2xl font-bold text-[#dcbb87] text-center mb-8">
          Create Account
        </h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full name"
            required
            className="w-full bg-[#19232d] border border-[#dcbb87]/20 text-white rounded-md px-4 py-3 focus:outline-none focus:border-[#dcbb87] transition-colors mb-4"
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            required
            className="w-full bg-[#19232d] border border-[#dcbb87]/20 text-white rounded-md px-4 py-3 focus:outline-none focus:border-[#dcbb87] transition-colors mb-4"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full bg-[#19232d] border border-[#dcbb87]/20 text-white rounded-md px-4 py-3 focus:outline-none focus:border-[#dcbb87] transition-colors mb-4"
          />
          <button
            type="submit"
            className="w-full bg-[#dcbb87] hover:bg-[#dcbb87]/90 text-[#19232d] font-semibold py-3 px-4 rounded-md transition-colors"
          >
            Sign Up
          </button>
        </form>
        <div className="bg-red-500 text-[#FFF] w-fit text-sm py-1 px-3 rounded-md mt-2">
          Error Message
        </div>

        <div className="flex flex-col items-center gap-4 mt-6">
          <p className="text-white text-center">
            Already have an account?{" "}
            <Link
              href="/pages/login"
              className="text-[#dcbb87] hover:underline"
            >
              Log in
            </Link>
          </p>
          <Link href="/" className="text-[#dcbb87] hover:underline text-sm">
            Skip to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;