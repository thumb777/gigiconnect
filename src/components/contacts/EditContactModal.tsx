import React from "react";
import { UserIcon, FaceIcon } from "../icons";

interface EditContactModalProps {
  open: boolean;
  onClose: () => void;
  contact: {
    name: string;
    photo: string;
    deviceId?: string;
  } | null;
  onSave: (nickname: string, deviceId: string) => void;
}

export default function EditContactModal({
  open,
  onClose,
  contact,
  onSave,
}: EditContactModalProps) {
  const [nickname, setNickname] = React.useState(contact?.name || "");
  const [deviceId, setDeviceId] = React.useState(contact?.deviceId || "");

  React.useEffect(() => {
    setNickname(contact?.name || "");
    setDeviceId(contact?.deviceId || "");
  }, [contact]);

  if (!open || !contact) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#2D3F4E]/60">
      <div className="bg-[#2D3F4E]/70 px-4 w-[50%] border border-white/15 shadow-xl rounded-xl relative flex flex-col items-center">
        <button
          className="absolute top-4 right-4 text-white text-xl"
          onClick={onClose}
        >
          ×
        </button>
        <div className="flex w-full h-[72px] items-center justify-center border-white/20 border-b">
          <div className="font-normal font-sans text-lg text-white leading-4">
            Edit Contact
          </div>
        </div>

        <div className="flex flex-col w-full items-center space-y-6 py-8">
          <img
            src={contact.photo}
            alt="user"
            className="w-[94px] h-[94px] rounded-full"
          />
          <div className="flex flex-col w-[80%] space-y-[10px]">
            <div className="font-normal font-sans texxt-lg text-white">
              Nickname
            </div>
            <div className="flex items-center w-full bg-[#5B6D78]/40 border border-white/25 rounded-lg p-3 space-x-2">
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

          <div className="flex flex-col w-[80%] space-y-[10px]">
            <div className="font-normal font-sans texxt-lg text-white">
              Device ID
            </div>
            <div className="flex items-center w-full bg-[#5B6D78]/40 border border-white/25 rounded-lg p-3 space-x-2">
              <FaceIcon />
              <div className="w-[1px] h-full bg-white/50" />
              <input
                type="text"
                placeholder="Enter ID here"
                value={deviceId}
                onChange={(e) => setDeviceId(e.target.value)}
                className="w-full h-full bg-transparent text-lg text-white font-sans outline-none placeholder:text-white/20"
              />
            </div>
          </div>

          <div
            className="w-[80%] h-14 bg-[#0C8DE5] flex items-center justify-center rounded-xl text-sm text-white font-sans font-semibold leading-4 text-center"
            onClick={() => {
              onSave(nickname, deviceId);
              onClose();
            }}
          >
            Save
          </div>
        </div>
      </div>
    </div>
  );
}
