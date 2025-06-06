"use client";

import { SessionProvider } from "next-auth/react";
import PWAInstaller from "./components/PWAInstaller";

export default function RootLayoutClient({ children }) {
  return (
    <SessionProvider>
      <PWAInstaller />
      {children}
    </SessionProvider>
  );
}