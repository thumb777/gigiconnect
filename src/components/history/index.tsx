import {
  SearchIcon,
  DeleteIcon,
  LTDIcon,
  VersionIcon,
  DateIcon,
} from "../icons";
import { useState } from "react";

const sessionData = [
  {
    id: "1",
    caller: "GC-2025-0618-1234",
    startTime: "12:30am",
    duration: "1hour 25mins",
    date: "April, 31st 2025",
  },
  {
    id: "2",
    caller: "Fredrick Hamzah",
    startTime: "12:30am",
    duration: "1hour 25mins",
    date: "April, 31st 2025",
  },
  {
    id: "3",
    caller: "Shnezzy Williams",
    startTime: "12:30am",
    duration: "1hour 25mins",
    date: "April, 31st 2025",
  },
];

const favoriteData = [
  {
    id: "4",
    caller: "John Doe",
    startTime: "2:15pm",
    duration: "45mins",
    date: "April, 30th 2025",
  },
  {
    id: "5",
    caller: "Sarah Wilson",
    startTime: "10:00am",
    duration: "2hours 10mins",
    date: "April, 29th 2025",
  },
];

export default function History() {
  const [activeTab, setActiveTab] = useState<"previous" | "favorite">(
    "previous"
  );

  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const currentData = activeTab === "previous" ? sessionData : favoriteData;

  const handleSelectAll = () => {
    setSelectedItems(currentData.map((item) => item.id));
  };

  const handleClearAll = () => {
    setSelectedItems([]);
  };

  const handleItemSelect = (itemId: string) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems((prev) => prev.filter((id) => id !== itemId));
    } else {
      setSelectedItems((prev) => [...prev, itemId]);
    }
  };

  return (
    <div className="flex flex-1 flex-col w-full overflow-hidden">
      <div className="w-full flex items-center justify-between">
        {/* <div className="font-normal text-xl leading-6 text-white">
          Previous Session
        </div>
        <div className="flex items-center justify-between gap-2 bg-[#00CF1F]/20 rounded-2xl p-[6px]">
          <div className="w-2 h-2 rounded-full bg-[#00CF1F]" />
          <div className="font-sans texxt-sm font-normal leading-4 text-[#00CF1F]">
            Connected
          </div>
        </div> */}

        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button
              onClick={() => setActiveTab("previous")}
              className={`font-sans text-xl leading-6 transition-colors ${
                activeTab === "previous"
                  ? "text-white font-bold"
                  : "font-normal text-white/50"
              }`}
            >
              Previous Session
            </button>
            <button
              onClick={() => setActiveTab("favorite")}
              className={`font-sans text-xl leading-6 transition-colors ${
                activeTab === "favorite"
                  ? "text-white font-bold"
                  : "font-normal text-white/50"
              }`}
            >
              Favorite
            </button>
          </div>
          <div className="flex items-center justify-between gap-2 bg-[#00CF1F]/20 rounded-2xl p-[6px]">
            <div className="w-2 h-2 rounded-full bg-[#00CF1F]" />
            <div className="font-sans text-sm font-normal leading-4 text-[#00CF1F]">
              Connected
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 w-full h-[2px] bg-white/20" />

      <div className="w-full flex mt-3 items-center justify-center rounded-[6px] pr-4 gap-4 shadow-sm">
        <div className="flex items-center w-full bg-[#5B6D78]/40 rounded-[6px] border-white/30 border p-3">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search History"
            className="w-full h-full bg-transparent text-lg text-white font-sans px-4 py-3 outline-none placeholder:text-white/20"
          />
          {/* <div className="w-[165px] h-[46px] bg-[#849199] items-center flex justify-center rounded-[4px] font-sans font-semibold text-white text-sm cursor-pointer">
            Add Contact
          </div> */}
        </div>
        <div className="w-[182px] h-[52px] border-white/30 border rounded-[6px] flex items-center p-3 bg-[#5B6D78]/40">
          <DateIcon />
          <select className="bg-transparent h-full text-white text-lg font-sans font-normal  px-4 outline-none cursor-pointer appearance-none">
            <option className="bg-[#5B6D78]/60 cursor-pointer">
              Sort by Date
            </option>
            <option className="bg-[#5B6D78]/60 cursor-pointer">
              Newest First
            </option>
            <option className="bg-[#5B6D78]/60 cursor-pointer">
              Oldest First
            </option>
          </select>
        </div>
      </div>

      <div className="mt-3 w-full h-[2px] bg-white/20" />

      {selectedItems.length > 0 && (
        <div className="flex items-center justify-between mt-4 p-3 bg-[#2D3F4E]/60 rounded-lg">
          <div className="flex items-center gap-4">
            <div className="font-sans text-white text-lg">
              {selectedItems.length} selected
            </div>
            <button
              onClick={handleSelectAll}
              className="font-sans text-lg text-[#0C8DE5] hover:text-[#0C8DE5]/80 cursor-pointer"
            >
              Select All
            </button>
            <button
              onClick={handleClearAll}
              className="font-sans text-lg text-white/60 hover:text-white cursor-pointer"
            >
              Clear All
            </button>
          </div>
          <button className="flex items-center gap-2 bg-[#F25022]/20 border border-[#F25022]/40 rounded-xl px-4 py-2 cursor-pointer">
            <div className="w-6 h-6 border p-1 border-[#F25022]/40 bg-[#F25022]/20 rounded-full flex items-center justify-center cursor-pointer">
              <DeleteIcon />
            </div>
            <div className="font-sans font-normal text-sm text-[#F25022]">
              Delete Selected
            </div>
          </button>
        </div>
      )}

      <div className="hidden md:grid md:grid-cols-5 gap-4 mt-4 px-[22px] py-3 bg-[#2D3F4E]/60 rounded-t-[4px]">
        <div className="font-sans font-normal text-lg text-white">Caller</div>
        <div className="font-sans font-normal text-lg text-white">
          Start Time
        </div>
        <div className="font-sans font-normal text-lg text-white">Duration</div>
        <div className="font-sans font-normal text-lg text-white">Date</div>
        <div className="font-sans font-normal text-lg text-white"></div>
      </div>

      {/* Session List */}
      <div className="flex-1 flex-col mt-2 gap-1 w-full items-center overflow-hidden">
        <div className="w-full h-full overflow-auto space-y-2 hide-scrollbar">
          {currentData.map((session) => (
            <div
              key={session.id}
              className="flex w-full justify-between items-center h-[88px] px-[22px] py-3 rounded-sm bg-[#2D3F4E]/60"
            >
              {/* Mobile Layout */}
              <div className="md:hidden flex w-full justify-between items-center">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(session.id)}
                    onChange={() => handleItemSelect(session.id)}
                    className="w-4 h-4 rounded border border-white/30 bg-transparent checked:bg-[#0C8DE5]"
                  />
                  <div className="flex flex-col gap-1">
                    <div className="font-sans font-normal text-lg text-white">
                      {session.caller}
                    </div>
                    <div className="font-normal font-sans text-[16px] text-white">
                      {session.startTime} • {session.duration}
                    </div>
                    <div className="font-normal font-sans text-[16px] text-white">
                      {session.date}
                    </div>
                  </div>
                </div>
                <div className="w-[59px] h-[59px] border border-[#F25022]/40 bg-[#F25022]/20 rounded-full flex items-center justify-center cursor-pointer">
                  <DeleteIcon />
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:grid md:grid-cols-5 gap-4 items-center w-full">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(session.id)}
                    onChange={() => handleItemSelect(session.id)}
                    className="w-7 h-7 rounded border border-white/30 checked:bg-[#F25022]"
                  />
                  <div className="font-sans font-normal text-lg text-white">
                    {session.caller}
                  </div>
                </div>
                <div className="font-normal font-sans text-[16px] text-white">
                  {session.startTime}
                </div>
                <div className="font-normal font-sans text-[16px] text-white">
                  {session.duration}
                </div>
                <div className="font-normal font-sans text-[16px] text-white">
                  {session.date}
                </div>
                <div className="flex gap-3 justify-end">
                  <div className="w-[59px] h-[59px] border border-[#F25022]/40 bg-[#F25022]/20 rounded-full flex items-center justify-center cursor-pointer">
                    <DeleteIcon />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full flex-1 mt-6 items-center justify-end max-h-8 gap-4 bg-[#2D3F4E]/30 rounded-xl px-6 py-1">
        <LTDIcon />
        <div className="font-sans font-normal font-sm text-white/60">
          All right reserved by gigiconneect ltd
        </div>
        <div className="w-[1px] h-full bg-white/30" />
        <VersionIcon />
        <div className="font-sans font-normal font-sm text-white/60">
          Version 1.0
        </div>
      </div>
    </div>
  );
}
