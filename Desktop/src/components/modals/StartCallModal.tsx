import React from "react";
import userPhoto from "../../assets/userphoto_1.png";
import { AllowRightIcon, SearchIcon } from "../icons";
interface Contact {
  id: string;
  name: string;
  deviceId?: string;
  photo?: string;
  online: boolean;
}

interface StartCallModalProps {
  open: boolean;
  onClose: () => void;
  contacts: Contact[];
}

export default function StartCallModal({
  open,
  onClose,
  contacts,
}: StartCallModalProps) {
  const [selectedContact, setSelectedContact] = React.useState<string>("");
  const [deviceId, setDeviceId] = React.useState("");
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (contact.deviceId &&
        contact.deviceId.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const canStartCall = selectedContact || deviceId.trim();

  const handleStartCall = () => {
    if (selectedContact) {
      const contact = contacts.find((c) => c.id === selectedContact);
      // Start call with contact
      console.log("Starting call with contact:", contact);
    } else if (deviceId.trim()) {
      // Start call with device ID
      console.log("Starting call with device ID:", deviceId);
    }
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#2D3F4E]/60">
      <div className="bg-[#2D3F4E]/70 px-4 py-4 w-[50%] border border-white/15 shadow-xl rounded-xl relative flex flex-col items-center">
        <button
          className="absolute top-4 right-4 text-white text-xl"
          onClick={onClose}
        >
          ×
        </button>
        <div className="flex w-full h-[72px] items-center justify-center border-white/20 border-b">
          <div className="font-semibold font-sans text-lg text-white leading-4">
            Start Call
          </div>
        </div>
        <div className="text-white font-sans font-normal leading-6 mt-6 text-lg w-[504px] text-center">
          Choose User you want to make call with to get started or click input
          user ID in order to connect with user not on your contact
        </div>
        <div className="w-full flex flex-col gap-3 mt-8">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (deviceId.trim()) handleStartCall();
            }}
            className="flex items-center w-full bg-[#5B6D78]/40 border border-white/25 rounded-[6px] p-3 space-x-2"
          >
            <input
              type="text"
              placeholder="Enter user ID here"
              value={deviceId}
              onChange={(e) => {
                setDeviceId(e.target.value);
                if (e.target.value.trim()) setSelectedContact("");
              }}
              className="w-full h-full bg-transparent text-lg text-white font-sans outline-none placeholder:text-white/20"
            />
            <button
              type="submit"
              disabled={!deviceId.trim()}
              className="p-2 w-fit h-fit rounded-full disabled:bg-transparent bg-[#5B6D78]/60"
            >
              <AllowRightIcon />
            </button>
          </form>

          <div className="flex items-center w-full bg-[#5B6D78]/40 rounded-[6px] border border-white/25 p-3">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search Contact"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-full bg-transparent text-lg text-white font-sans p-2 outline-none placeholder:text-white/20"
            />
          </div>

          <div className="text-[#C4C4C4] text-lg font-sans font-normal w-full text-left">
            ({filteredContacts.length}) Contacts
          </div>
          <div className="max-h-44 w-full overflow-y-auto space-y-2 mb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {filteredContacts.map((contact) => (
              <label
                key={contact.id}
                className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors ${
                  selectedContact === contact.id
                    ? "bg-[#0C8DE5]/20"
                    : "hover:bg-[#5B6D78]/40"
                }`}
              >
                <input
                  type="radio"
                  checked={selectedContact === contact.id}
                  onChange={() => {
                    setSelectedContact(contact.id);
                    setDeviceId("");
                  }}
                  className="accent-[#0C8DE5]"
                />
                <img
                  src={contact.photo || userPhoto}
                  alt={contact.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <div className="text-white font-medium truncate">
                    {contact.name}
                  </div>
                  <div className="flex items-center gap-1">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        contact.online ? "bg-[#00CF1F]" : "bg-[#B0B0B0]"
                      }`}
                    />
                    <span
                      className="text-xs"
                      style={{ color: contact.online ? "#00CF1F" : "#B0B0B0" }}
                    >
                      {contact.online ? "Online" : "Offline"}
                    </span>
                  </div>
                </div>
              </label>
            ))}
          </div>
          <button
            onClick={handleStartCall}
            disabled={!canStartCall}
            className="w-full bg-[#0C8DE5] hover:bg-[#0A6CB5] text-white h-[59px] rounded-xl text-sm font-semibold disabled:bg-[#5B6D78] disabled:text-white/40"
          >
            Start Call
          </button>
        </div>
      </div>
    </div>
  );
}
