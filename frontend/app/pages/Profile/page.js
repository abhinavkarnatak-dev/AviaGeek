"use client";
import React, { useState, useEffect } from "react";
import { Pencil, Check, X, Home } from "lucide-react";
import { useSession } from "next-auth/react";

function ProfilePage() {
  const [isLoading, setIsLoading] = useState(true);
  const { data: session, status } = useSession();

  const getInitials = (fullName) => {
    const nameParts = fullName.split(" ");
    const initials = nameParts
      .map((part) => part[0].toUpperCase())
      .slice(0, 2)
      .join("");
    return initials;
  };

  const getBackgroundColor = (fullName) => {
    const colors = [
      "#F87171",
      "#FBBF24",
      "#34D399",
      "#60A5FA",
      "#A78BFA",
      "#F472B6",
    ];
    const charSum = fullName
      .split("")
      .reduce((sum, char) => sum + char.charCodeAt(0), 0);
    return colors[charSum % colors.length];
  };

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };
    const timeout = setTimeout(handleLoad, 300);
    return () => clearTimeout(timeout);
  }, [session]);

  if (isLoading || status === "loading") {
    return (
      <div className="h-screen w-full flex justify-center items-center bg-[#19232D]">
        <h1 className="text-[#DCBB87] text-lg font-semibold">Loading...</h1>
      </div>
    );
  }

  const initials = getInitials(session.user.name);
  const backgroundColor = getBackgroundColor(session.user.name);

  return (
    <div className="h-screen bg-[#19232D] flex items-center justify-center p-4">
      <div className="bg-[#19232d] p-8 rounded-xl shadow-2xl w-full max-w-md relative">
        <button
          onClick={() => (window.location.href = "/")}
          className="absolute top-4 right-4 p-2 text-[#dcbb87] hover:bg-[#2a3441] rounded-lg transition-colors"
          aria-label="Return to home"
        >
          <Home size={24} />
        </button>

        <div className="flex flex-col items-center">
          <div
            className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-[#dcbb87] flex items-center justify-center text-white font-semibold text-6xl"
            style={{ backgroundColor }}
          >
            {initials}
          </div>

          <div className="w-full space-y-6">
            <div className="space-y-2">
              <h3 className="text-[#dcbb87] text-sm font-semibold">Name</h3>
              <span className="text-white text-lg">{session.user.name}</span>
            </div>
            <div>
              <h3 className="text-[#dcbb87] text-sm font-semibold">Email</h3>
              <span className="text-white text-lg">{session.user.email}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;