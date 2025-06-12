import React from "react";

interface DeleteContactModalProps {
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
}

export default function DeleteContactModal({
  open,
  onClose,
  onDelete,
}: DeleteContactModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-[##2D3F4E]/70 border border-white/15 rounded-2xl p-8 w-[480px] relative flex flex-col items-center">
        <button
          className="absolute top-4 right-4 text-white text-xl"
          onClick={onClose}
        >
          ×
        </button>
        <div className="text-white text-lg font-semibold mb-4 w-full text-center">
          Delete Contact
        </div>
        <div className="w-full h-[2px] bg-white/20 mb-6" />
        <div className="text-center text-white text-base mb-8">
          Are you sure you want to{" "}
          <span className="text-[#F25022]">delete</span> this contact?
          <br />
          Deleting it means you would not be able to access it
          <br />
          for calls, meetings and remote access
        </div>
        <div className="flex w-full justify-center gap-4">
          <button
            className="w-[180px] py-3 rounded-xl bg-[#F25022] text-white font-semibold"
            onClick={() => {
              onDelete();
              onClose();
            }}
          >
            Delete Contact
          </button>
          <button
            className="w-[180px] py-3 rounded-xl bg-[#B0B0B0] text-white font-semibold"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
