import {
  SearchIcon,
  EditIcon,
  CallSmallIcon,
  DeleteIcon,
  LTDIcon,
  VersionIcon,
} from "../icons";
import userPhoto from "../../assets/userphoto_1.png";
import React from "react";
import EditContactModal from "./EditContactModal";
import AddContactModal from "./AddContactModal";
import DeleteContactModal from "./DeleteContactModal";
import StartCallModal from "../modals/StartCallModal";

export default function Contacts() {
  const [editModalOpen, setEditModalOpen] = React.useState(false);
  const [selectedContact, setSelectedContact] = React.useState<any>(null);
  const [addModalOpen, setAddModalOpen] = React.useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = React.useState(false);
  const [contactToDelete, setContactToDelete] = React.useState<any>(null);
  const [startCallModalOpen, setStartCallModalOpen] = React.useState(false);

  const handleEdit = (contact: any) => {
    setSelectedContact(contact);
    setEditModalOpen(true);
  };

  const handleSave = (nickname: string, deviceId: string) => {
    // Save logic here
    // You can update your contacts list accordingly
  };

  const handleAddContact = (nickname: string, deviceId: string) => {
    // Add logic here to add the contact to your list
  };

  const handleDelete = (contact: any) => {
    setContactToDelete(contact);
    setDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    // Delete logic here (remove contact from your list)
    setContactToDelete(null);
  };

  // Replace your contacts array with IDs for modal compatibility
  const contacts = [
    {
      id: "1",
      name: "Taras Popovchuk",
      photo: userPhoto,
      online: true,
    },
    {
      id: "2",
      name: "Shnezzy Williams",
      photo: userPhoto,
      online: true,
    },
    {
      id: "3",
      name: "Fredrick Hamzah",
      photo: userPhoto,
      online: false,
    },
    {
      id: "4",
      name: "Maria Ivanova",
      photo: userPhoto,
      online: true,
    },
    {
      id: "5",
      name: "John Doe",
      photo: userPhoto,
      online: false,
    },
  ];

  return (
    <div className="flex flex-1 flex-col w-full overflow-hidden">
      <div className="w-full flex items-center justify-between">
        <div className="font-normal text-xl leading-6 text-white">Contacts</div>
        <div className="flex items-center justify-between gap-2 bg-[#00CF1F]/20 rounded-2xl p-[6px]">
          <div className="w-2 h-2 rounded-full bg-[#00CF1F]" />
          <div className="font-sans texxt-sm font-normal leading-4 text-[#00CF1F]">
            Connected
          </div>
        </div>
      </div>
      <div className="mt-2 w-full h-[2px] bg-white/20" />

      <div className="w-full flex mt-4 items-center justify-center rounded-[6px] shadow-sm border border-white/30">
        <div className="flex items-center w-full bg-[#5B6D78]/40 rounded-lg p-3">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search Contact"
            className="w-full h-full bg-transparent text-lg text-white font-sans px-4 py-3 outline-none placeholder:text-white/20"
          />
          <div
            className="w-[165px] h-[46px] bg-[#849199] items-center flex justify-center rounded-[4px] font-sans font-semibold text-white text-sm cursor-pointer"
            onClick={() => setAddModalOpen(true)}
          >
            Add Contact
          </div>
        </div>
      </div>

      <div className="flex-1 flex-col mt-4 gap-1 w-full items-center overflow-hidden">
        <div className="w-full h-full overflow-auto space-y-2 hide-scrollbar">
          {contacts.map((contact, id) => (
            <div
              key={contact.name}
              className="flex w-full justify-between items-center h-[88px] p-3 rounded-sm bg-[#2D3F4E]/60"
            >
              <div className="flex w-fit items-center gap-2">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img
                    src={contact.photo}
                    alt={contact.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-normal font-sans text-[16px] text-white">
                    {contact.name}
                  </div>
                  <div className="flex gap-1 items-center">
                    <div
                      className="w-[6px] h-[6px] rounded-full"
                      style={{
                        background: contact.online ? "#00CF1F" : "#B0B0B0",
                      }}
                    />
                    <div
                      className="font-normal font-sans text-sm"
                      style={{ color: contact.online ? "#00CF1F" : "#B0B0B0" }}
                    >
                      {contact.online ? "Online" : "Offline"}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex h-full gap-3">
                <div
                  className="flex w-[116px] h-full justify-center items-center bg-[#0C8DE5] gap-2 rounded-xl cursor-pointer"
                  onClick={() => setStartCallModalOpen(true)}
                >
                  <CallSmallIcon />
                  <div className="font-sans font-normal text-sm text-white">
                    Start Call
                  </div>
                </div>
                <div
                  className="w-[59px] h-[59px] border border-white/40 rounded-full flex items-center justify-center cursor-pointer"
                  onClick={() => handleEdit(contact)}
                >
                  <EditIcon />
                </div>
                <div
                  className="w-[59px] h-[59px] border border-[#F25022]/40 bg-[#F25022]/20 rounded-full flex items-center justify-center cursor-pointer"
                  onClick={() => handleDelete(contact)}
                >
                  <DeleteIcon />
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
      <EditContactModal
        open={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        contact={selectedContact}
        onSave={handleSave}
      />
      <AddContactModal
        open={addModalOpen}
        onClose={() => setAddModalOpen(false)}
        onAdd={handleAddContact}
      />
      <DeleteContactModal
        open={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onDelete={handleConfirmDelete}
      />
      <StartCallModal
        open={startCallModalOpen}
        onClose={() => setStartCallModalOpen(false)}
        contacts={contacts}
      />
    </div>
  );
}
