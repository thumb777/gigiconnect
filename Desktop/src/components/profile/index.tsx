import userPhoto from "../../assets/userphoto_1.png";
import { UserIcon, FaceIcon } from "../icons";
export default function Profile() {
  return (
    <div className="flex flex-1 flex-col items-center  w-full overflow-hidden">
      <div className="w-full flex items-end justify-end">
        <div className="flex items-center justify-between gap-2 bg-[#00CF1F]/20 rounded-2xl p-[6px]">
          <div className="w-2 h-2 rounded-full bg-[#00CF1F]" />
          <div className="font-sans text-sm font-normal leading-4 text-[#00CF1F]">
            Connected
          </div>
        </div>
      </div>
      <div className="w-[50%] h-full  bg-[#2D3F4E]/70 flex flex-col rounded-xl border border-white/15 px-5">
        <div className="flex w-full h-[72px] items-center justify-center border-white/20 border-b">
          <div className="font-normal font-sans text-lg text-white leading-4">
            Uswer Profile
          </div>
        </div>
        <div className="flex flex-col w-full items-center space-y-6 py-8">
          <img
            src={userPhoto}
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
                className="w-full h-full bg-transparent text-lg text-white font-sans outline-none placeholder:text-white/20"
              />
            </div>
          </div>

          <div className="w-[80%] h-14 bg-[#0C8DE5] flex items-center justify-center rounded-xl text-sm text-white font-sans font-semibold leading-4 text-center">
            Save
          </div>
        </div>
      </div>
    </div>
  );
}
