"use client";

import { useEffect, useState } from "react";

export default function PWAInstaller() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallButton(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();

    const choiceResult = await deferredPrompt.userChoice;
    if (choiceResult.outcome === "accepted") {
      console.log("PWA setup accepted");
    } else {
      console.log("PWA setup dismissed");
    }

    setDeferredPrompt(null);
    setShowInstallButton(false);
  };

  return showInstallButton ? (
    <div
      className="fixed top-4 right-4 transform -translate-x-1/2 bg-gray-800 text-[#dcbb87] px-4 py-2 rounded-md shadow-md cursor-pointer"
      onClick={handleInstallClick}
    >
      📱 Install AviaGeek
    </div>
  ) : null;
}
