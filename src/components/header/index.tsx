import { HideIcon, MinimizeIcon, CloseIcon } from "../icons";
export default function Header() {
  return (
    <div className="flex w-full h-14 bg-[#8CA2B1]/30 rounded-xl rounded-b-none shadow-md app-drag items-center justify-between p-4">
      <div className=" font-sans text-xl font-normal text-white">
        Gigi Connect
      </div>
      <div className="flex gap-6 w-fit">
        <div className="flex items-center justify-center w-8 h-8 cursor-pointer transition-colors duration-150 hover:bg-white/20 focus:bg-white/30 rounded app-no-drag">
          <HideIcon />
        </div>
        <div className="flex items-center justify-center w-8 h-8 cursor-pointer transition-colors duration-150 hover:bg-white/20 focus:bg-white/30 rounded app-no-drag">
          <MinimizeIcon />
        </div>
        <div className="flex items-center justify-center w-8 h-8 cursor-pointer transition-colors duration-150 hover:bg-white/20 focus:bg-white/30 rounded app-no-drag">
          <CloseIcon />
        </div>
      </div>
    </div>
  );
}
