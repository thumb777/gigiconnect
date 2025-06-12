import React, { useState } from "react";
import Header from "../header";
import { UserIcon } from "../icons";

const { ipcRenderer } = window.require
  ? window.require("electron")
  : { ipcRenderer: null };

export default function SplashScreen({
  onComplete,
}: {
  onComplete: (deviceId: string, nickname: string, autoStart: boolean) => void;
}) {
  const [nickname, setNickname] = useState("");
  const [autoStart, setAutoStart] = useState(false);

  // Generate or fetch device ID (for demo, hardcoded)
  const deviceId = "GC-2025-0519-1239";

  const handleContinue = () => {
    if (ipcRenderer) {
      ipcRenderer.send("splash-complete");
    }
    onComplete(deviceId, nickname, autoStart);
  };

  return (
    <div className="w-[574px] h-[564px] flex flex-col rounded-xl overflow-hidden items-center bg-gradient-to-b from-[#2D3F4E]/70 to-[#5B6D78]/70">
      <Header />
      <div className="h-[1px] w-[95%] bg-white" />
      <div className="flex flex-col py-9 justify-center items-center w-full">
        <div className="text-[28px] font-sans font-semibold text-white leading-9">
          Device Set Up
        </div>
        <div className="w-[434px] flex flex-col items-center py-4 space-y-6 justify-center">
          <div className="w-full flex flex-col space-y-3">
            <label className="text-white text-lg font-sans font-normal">
              Device ID
            </label>
            <div className="flex items-center  justify-center w-full bg-gradient-to-r from-white/49 to-slate-500/21 backdrop-blur-sm border border-white/25 rounded-[6px] p-3 space-x-2">
              <input
                value={deviceId}
                readOnly
                className="w-full h-full bg-transparent text-center text-xl font-semibold text-white font-sans outline-none placeholder:text-white/20"
              />
            </div>
          </div>

          <div className="w-full flex flex-col space-y-3">
            ` ` ``
            <div className="text-white text-lg font-sans font-normal">
              Nickname <span className="text-white/50 text-lg">(optional)</span>
            </div>
            <div className="flex items-center w-full bg-gradient-to-r from-white/49 to-slate-500/21 backdrop-blur-sm border border-white/25 rounded-[6px] p-3 space-x-2">
              <UserIcon />
              <div className="w-[1px] h-full bg-white/50" />
              <input
                type="text"
                placeholder="Enter Nickname"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                className="w-full h-full bg-transparent text-lg text-white font-sans outline-none placeholder:text-white/20"
              />
            </div>
          </div>

          <div className="w-full flex items-center">
            <input
              type="checkbox"
              checked={autoStart}
              onChange={(e) => setAutoStart(e.target.checked)}
              id="autoStart"
              className="mr-2"
            />
            <label htmlFor="autoStart" className="text-white/70 text-sm">
              Auto-start app on system boot
            </label>
          </div>

          <button
            onClick={handleContinue}
            className="w-full py-3 rounded-[6px] bg-[#1890FF] hover:bg-[#1677cc] text-white text-[16px] font-semibold transition"
          >
            Continue to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
