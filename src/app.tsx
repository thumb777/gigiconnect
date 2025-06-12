import React, { useState } from "react";
import SplashScreen from "./components/splash";
import Home from "./components/home";
import Header from "./components/header";
import Contacts from "./components/contacts";
import History from "./components/history";
import Profile from "./components/profile";
import Setting from "./components/setting";
import {
  HomeIcon,
  HistoryIcon,
  ProfileIcon,
  SettingsIcon,
  ContactsIcon,
  CopyIcon,
} from "./components/icons";

const menuItems = [
  { key: "home", label: "Home", icon: <HomeIcon /> },
  { key: "history", label: "History", icon: <HistoryIcon /> },
  { key: "profile", label: "Profile", icon: <ProfileIcon /> },
  { key: "settings", label: "Settings", icon: <SettingsIcon /> },
  { key: "contacts", label: "Contacts", icon: <ContactsIcon /> },
];

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [deviceId, setDeviceId] = useState("");
  const [nickname, setNickname] = useState("");
  const [autoStart, setAutoStart] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");

  const handleSplashComplete = (id: string, nick: string, auto: boolean) => {
    setDeviceId(id);
    setNickname(nick);
    setAutoStart(auto);
    setShowSplash(false);
  };

  return showSplash ? (
    <SplashScreen onComplete={handleSplashComplete} />
  ) : (
    <div className="flex flex-col w-screen h-screen overflow-hidden bg-gradient-to-b rounded-xl from-[#2D3F4E]/70 to-[#5B6D78]/70 backdrop-blur-[28.5px]">
      <Header />
      <div className="p-4 w-full flex flex-1 flex-col overflow-hidden space-y-4 items-center justify-start">
        <div className="flex justify-between items-center w-full h-[100px] p-4 rounded-xl border border-black/6 bg-[#2D3F4E]/30">
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-start">
              <div className=" font-sans text-sm font-normal text-white">
                Your Device ID:
              </div>
              <div className="flex flex-row gap-1 cursor-pointer">
                <CopyIcon />
                <div className=" font-sans text-sm font-normal text-white/60">
                  Copy
                </div>
              </div>
            </div>
            <div className=" font-sans fonts-normal text-2xl text-white">
              GC- 2025-0519-1239
            </div>
          </div>
          <div className="flex justify-between w-[60%] item-center pr-12">
            {menuItems.map((item) => (
              <div key={item.key} className="flex flex-col gap-1">
                <button
                  className={`flex w-14 h-14 items-center justify-center rounded-full border transition-colors duration-150
                    ${
                      activeMenu === item.key
                        ? "border-1 border-white shadow-md bg-white/15"
                        : "border-white/30"
                    }
                  `}
                  onClick={() => setActiveMenu(item.key)}
                  tabIndex={0}
                  aria-label={item.label}
                >
                  {item.icon}
                </button>
                <div
                  className={`font-normal font-sans text-center text-white text-[12px] ${
                    activeMenu === item.key ? "text-white" : "text-white/70"
                  }`}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        {activeMenu === "home" && (
          <Home
            deviceId={deviceId}
            nickname={nickname}
            autoStart={autoStart}
            onSeeAllContacts={() => setActiveMenu("contacts")}
            onSeeMoreSessions={() => setActiveMenu("history")}
            onEditProfile={() => setActiveMenu("profile")}
          />
        )}
        {activeMenu === "contacts" && <Contacts />}
        {activeMenu === "history" && <History />}
        {activeMenu === "profile" && <Profile />}
        {activeMenu === "settings" && <Setting />}
      </div>
    </div>
  );
}
