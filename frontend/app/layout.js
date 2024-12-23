"use client"
import { SessionProvider } from "next-auth/react";  // Import SessionProvider
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>{children}</SessionProvider>  {/* Wrap your content with SessionProvider */}
      </body>
    </html>
  );
}
