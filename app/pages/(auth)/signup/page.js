"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { LogIn, Home } from "lucide-react";
import { useRouter } from "next/navigation";
import { getSession } from "next-auth/react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const session = await getSession();
      if (session) {
        router.push("/");
      } else {
        setIsLoading(false);
      }
    };
    checkSession();
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("../api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/pages/login");
      } else {
        const errorMessage = await res.json();
        setError(errorMessage.message);
      }
    } catch (error) {
      setError("Error during registration: " + error.message);
    }
  };

  if (isLoading) {
    return (
      <div className="w-full h-screen bg-[#19232D] text-[#DCBB87] text-lg font-semibold flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="h-screen bg-[#19232d] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#19232d]/50 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-[#dcbb87]/20">
        <div className="flex items-center justify-center mb-8">
          <LogIn className="w-10 h-10 text-[#dcbb87]" />
          <Link href="/">
            <button
              className="absolute top-4 right-4 p-2 text-[#dcbb87] hover:bg-[#2a3441] rounded-lg transition-colors"
              aria-label="Return to home"
            >
              <Home size={24} />
            </button>
          </Link>
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
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            required
            className="w-full bg-[#19232d] border border-[#dcbb87]/20 text-white rounded-md px-4 py-3 focus:outline-none focus:border-[#dcbb87] transition-colors mb-4"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full bg-[#19232d] border border-[#dcbb87]/20 text-white rounded-md px-4 py-3 focus:outline-none focus:border-[#dcbb87] transition-colors mb-4"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-[#dcbb87] hover:bg-[#dcbb87]/90 text-[#19232d] font-semibold py-3 px-4 rounded-md transition-colors"
          >
            Sign Up
          </button>
        </form>
        {error && (
          <div className="bg-red-500 text-[#FFF] w-fit text-sm py-1 px-3 rounded-md mt-2">
            {error}
          </div>
        )}

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
        </div>
      </div>
    </div>
  );
};

export default Signup;