import React, { useState, useRef, useEffect } from "react";
import { User, Heart, LogOut } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { data: session, status } = useSession();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>Please log in to view your profile</div>;
  }

  const initials = getInitials(session.user.name);
  const backgroundColor = getBackgroundColor(session.user.name);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{ backgroundColor }}
        className="flex items-center justify-center w-10 h-10 rounded-full text-white font-semibold text-lg"
      >
        {initials}
      </button>

      {isOpen && (
        <div className="absolute lg:right-0 top-full mt-2 w-56 bg-[#1c2831] rounded-lg shadow-lg py-2 border border-[#FFF] z-50">
          <div className="px-4 py-2">
            <p className="font-medium text-[#DCBB87]">{session.user.name}</p>
            <p className="text-sm text-[#FFF]">{session.user.email}</p>
          </div>

          {/* <Link href="/pages/Profile">
            <button className="w-full px-4 py-2 text-left text-[#FFF] flex items-center gap-2">
              <User className="w-4 h-4" />
              Account
            </button>
          </Link> */}

          <Link href="/pages/Favorites">
            <button className="w-full px-4 py-2 text-left text-[#FFF] flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Favorites
            </button>
          </Link>

          <div className="mt-2">
            <button
              className="w-full px-4 py-2 text-left text-red-500 flex items-center gap-2"
              onClick={() => signOut()}
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;