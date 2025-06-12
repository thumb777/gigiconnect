import React from "react";
import userPhoto from "../../assets/userphoto_1.png";
import {
  SearchIcon,
  AddContactsIcon,
  EditIcon,
  DetailsIcon,
  RemoteSmallIcon,
  LTDIcon,
  VersionIcon,
  FavoriteIcon,
  AllowRightIcon,
  CallIcon,
  CallSmallIcon,
} from "../icons";
import StartCallModal from "../modals/StartCallModal";

const previousSessions = [
  {
    id: 1,
    name: "Shnezzy Williams",
    photo: userPhoto,
    type: "Remote Access",
    date: "2024-03-19",
    duration: "45 min",
    isFavorite: true,
  },
  {
    id: 2,
    name: "Maria Ivanova",
    photo: userPhoto,
    type: "Video Call",
    date: "2024-03-18",
    duration: "30 min",
    isFavorite: false,
  },
  {
    id: 3,
    name: "John Doe",
    photo: userPhoto,
    type: "Remote Access",
    date: "2024-03-17",
    duration: "60 min",
    isFavorite: true,
  },
];

export default function Home({
  onSeeAllContacts,
  onSeeMoreSessions,
  onEditProfile,
}: {
  onSeeAllContacts: () => void;
  onSeeMoreSessions: () => void;
  onEditProfile: () => void;
}) {
  const [startCallModalOpen, setStartCallModalOpen] = React.useState(false);

  return (
    <div className="flex flex-1 w-full flex-row gap-4 rounded-xl overflow-hidden">
      <div className="flex flex-col w-[440px] h-full rounded-xl border border-black/6 bg-[#2D3F4E]/30 overflow-hidden">
        <div className="flex w-full justify-between items-end h-[158px] bg-[#5B6D78]/30 p-4">
          <div className="h-full flex items-center gap-4">
            <div className="w-24 h-24 rounded-full">
              <img src={userPhoto} alt="avatar" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-semibold font-sans text-2xl text-white">
                Taras Popovchuk
              </div>
              <div className="flex gap-1 items-center">
                <div className="w-[6px] h-[6px] bg-[#00CF1F] rounded-full" />
                <div className="font-normal font-sans text-sm text-[#00CF1F]">
                  Online
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-[59px] h-[59px] border border-white/40 rounded-full flex items-center justify-center cursor-pointer"
            onClick={onEditProfile}
          >
            <EditIcon />
          </div>
        </div>

        <div className="w-full flex justify-between items-center px-4 py-5 bg-gradient-to-b from-[rgba(45,63,78,0.70)] to-[rgba(91,109,120,0.70)] shadow-md">
          <div className="font-sans font-semibold text-lg text-white">
            Cotancts
          </div>
          <div
            className="font-sans font-normal text-[16px] cursor-pointer text-white/80"
            onClick={onSeeAllContacts}
          >
            See all
          </div>
        </div>

        <div className="w-full flex items-center justify-center px-4 py-[14px] shadow-sm">
          <div className="flex items-center w-full bg-[#5B6D78]/40 rounded-lg px-3">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search Contact"
              className="w-full h-full bg-transparent text-lg text-white font-sans px-4 py-3 outline-none placeholder:text-white/20"
            />
          </div>
        </div>

        <div className="flex-1 relative flex-col gap-1 w-full items-center overflow-hidden">
          <div className="w-full h-full overflow-auto pb-20 space-y-2 hide-scrollbar">
            {[
              {
                name: "Taras Popovchuk",
                photo: userPhoto,
                status: "Online",
                statusColor: "#00CF1F",
                online: true,
              },
              {
                name: "Shnezzy Williams",
                photo: userPhoto,
                status: "Online",
                statusColor: "#00CF1F",
                online: true,
              },
              {
                name: "Fredrick Hamzah",
                photo: userPhoto,
                status: "Offline",
                statusColor: "#B0B0B0",
                online: false,
              },
              {
                name: "Maria Ivanova",
                photo: userPhoto,
                status: "Online",
                statusColor: "#00CF1F",
                online: true,
              },
              {
                name: "John Doe",
                photo: userPhoto,
                status: "Offline",
                statusColor: "#B0B0B0",
                online: false,
              },
            ].map((contact, id) => (
              <div
                key={contact.name}
                className="flex w-full justify-between items-center h-[88px] p-3 rounded-sm bg-[#2D3F4E]/50"
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
                        style={{ background: contact.statusColor }}
                      />
                      <div
                        className="font-normal font-sans text-sm"
                        style={{ color: contact.statusColor }}
                      >
                        {contact.status}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-[116px] h-full justify-center items-center bg-[#0C8DE5] gap-2 rounded-xl cursor-pointer">
                  <CallSmallIcon />
                  <div className="font-sans font-normal text-sm text-white">
                    Start Call
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-2 h-[59px] flex z-10 w-full px-4">
            <div className="flex w-full h-full justify-center items-center bg-[#5B6D78] rounded-xl border border-white/30">
              <div className="flex gap-2 items-center cursor-pointer">
                <AddContactsIcon />
                <div className="font-sans text-sm text-white font-semibold leading-4">
                  Add Contact
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 gap-3 h-full">
        <div className="flex justify-between items-center w-full border-b-[2px] border-white/10 pb-4">
          <div className="font-sans text-3xl text-white font-semibold leading-10">
            Welcome to Gigi Connect!
          </div>
          <div className="flex items-center w-fit h-fit justify-between gap-2 bg-[#00CF1F]/20 rounded-2xl p-[6px]">
            <div className="w-2 h-2 rounded-full bg-[#00CF1F]" />
            <div className="font-sans texxt-sm font-normal leading-4 text-[#00CF1F]">
              Connected
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div className="font-sans text-xl text-white font-normal leading-6">
            Features
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="w-full flex h-[210px] bg-[#0C8DE5] rounded-[8px] justify-center shadow-md relative overflow-hidden">
              <div className="w-[370px] h-[370px] bg-[rgba(255,255,255,0.12)] rounded-full -top-[10%] -left-[20%] absolute z-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.17)]" />
              <div className="w-[255px] h-[255px] bg-[rgba(255,255,255,0.12)] rounded-full -top-[60%] -left-[0%] absolute z-0 " />
              <div className="flex items-center justify-start gap-32   z-10">
                <CallIcon />
                <div className="flex flex-col max-w-[477px] gap-4">
                  <div className="flex flex-col gap-1">
                    <div className="font-sans text-xl text-white font-normal leading-7">
                      Easily Join Meeting and Get Remote Access
                    </div>
                    <div className="font-sans text-sm text-white/70 font-normal leading-4">
                      Join and Start Meetings via video and audio, while
                      controlling other screens remotely with your loved ones
                      and people you care about
                    </div>
                  </div>
                  <div
                    onClick={() => setStartCallModalOpen(true)}
                    className="flex items-center font-sans font-sm text-white font-normal justify-center cursor-pointer w-36 h-9 border border-white rounded-[6px] hover:bg-white/10"
                  >
                    Get Started
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between h-full">
          <div className="w-full flex flex-col gap-4">
            <div className="flex justify-between items-center border-b-[2px] border-white/10 pb-2">
              <div className="font-sans text-xl text-white font-normal leading-6">
                Previous Session
              </div>
              <div
                className="flex items-center gap-3 cursor-pointer"
                onClick={onSeeMoreSessions}
              >
                <div className="font-sans text-lg text-white/60 font-normal leading-6">
                  See more
                </div>
                <div className="flex w-6 h-6 justify-center items-center">
                  <AllowRightIcon />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {previousSessions.map((session) => (
                <div
                  key={session.id}
                  className="w-full flex flex-col justify-between h-[200px] bg-[#2D3F4E]/55 p-3 rounded-md"
                >
                  <div className="flex items-center justify-between w-full">
                    <RemoteSmallIcon />
                    <FavoriteIcon />
                  </div>
                  <div className="flex items-end justify-between w-full">
                    <div className="flex gap-2">
                      <div className="w-6 h-6 rounded-full overflow-hidden">
                        <img
                          src={session.photo}
                          alt={session.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="font-sans font-normal text-[16px] text-white">
                        {session.name}
                      </div>
                    </div>
                    <DetailsIcon />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex w-full flex-1 items-center justify-end max-h-8 gap-4 bg-[#2D3F4E]/30 rounded-xl px-6 py-1">
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
      </div>
      <StartCallModal
        open={startCallModalOpen}
        onClose={() => setStartCallModalOpen(false)}
        contacts={[
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
        ]}
      />
    </div>
  );
}
