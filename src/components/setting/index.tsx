import { useState } from "react";
import { CustomToggle } from "../customToggle";
export default function Setting() {
  const [darkMode, setDarkMode] = useState(true);
  const [availability, setAvailability] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [autoStart, setAutoStart] = useState(true);
  const [autoUpdate, setAutoUpdate] = useState(true);

  return (
    <div className="flex flex-1 flex-col items-center w-full overflow-hidden">
      <div className="w-[50%] h-full bg-[#2D3F4E]/70 flex flex-col items-center rounded-xl border border-white/15 px-5 py-8">
        <div className="font-sans font-semibold text-lg text-white leading-4">
          Settings
        </div>
        <div className="w-full h-[1px] bg-white/20 mt-6" />
        <div className="w-full flex flex-col items-center gap-3 pt-7">
          <div className="px-5 py-[14px] flex w-full items-center justify-between bg-white/5 border border-white/15 rounded-[6px]">
            <div className="font-sans font-normal leading-4 text-white text-sm">
              Dark Mode
            </div>
            <CustomToggle
              id="dark-mode"
              checked={darkMode}
              onChange={setDarkMode}
            />
          </div>

          <div className="px-5 py-[14px] flex w-full items-center justify-between bg-white/5 border border-white/15 rounded-[6px]">
            <div className="flex flex-col gap-1">
              <div className="font-sans font-normal leading-4 text-white text-sm">
                Availability
              </div>
              <div className="font-sans font-normal text-[12px] text-white/65">
                Show when you are online or offline
              </div>
            </div>
            <CustomToggle
              id="availability"
              checked={availability}
              onChange={setAvailability}
            />
          </div>

          <div className="px-5 py-[14px] flex w-full items-center justify-between bg-white/5 border border-white/15 rounded-[6px]">
            <div className="flex flex-col gap-1">
              <div className="font-sans font-normal leading-4 text-white text-sm">
                Notification
              </div>
              <div className="font-sans font-normal text-[12px] text-white/65">
                Allow Notification over other applications
              </div>
            </div>
            <CustomToggle
              id="notifications"
              checked={notifications}
              onChange={setNotifications}
            />
          </div>

          <div className="px-5 py-[14px] flex w-full items-center justify-between bg-white/5 border border-white/15 rounded-[6px]">
            <div className="flex flex-col gap-1">
              <div className="font-sans font-normal leading-4 text-white text-sm">
                Application Settings
              </div>
              <div className="font-sans font-normal text-[12px] text-white/65">
                Auto Start GigConnection
              </div>
            </div>
            <CustomToggle
              id="autoStart"
              checked={autoStart}
              onChange={setAutoStart}
            />
          </div>

          <div className="px-5 py-[14px] flex w-full items-center justify-between bg-white/5 border border-white/15 rounded-[6px]">
            <div className="flex flex-col gap-1">
              <div className="font-sans font-normal leading-4 text-white text-sm">
                Application Update
              </div>
              <div className="font-sans font-normal text-[12px] text-white/65">
                Update application automatically
              </div>
            </div>
            <CustomToggle
              id="autoUpdate"
              checked={autoUpdate}
              onChange={setAutoUpdate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
