"use client";

interface CustomToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  id?: string;
}

export function CustomToggle({ checked, onChange, id }: CustomToggleProps) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        id={id}
        className="sr-only peer"
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <div className="peer relative w-[38px] h-[30px]">
        <div
          className={`absolute left-[7px] top-[7px] w-[31px] h-[16px] rounded-[8px] transition-all duration-300 ${
            checked ? "bg-[#0768BA]" : "bg-[#D9D9D9]/50"
          }`}
        ></div>
        <div
          className={`absolute left-[4px] top-[4px] w-[22px] h-[22px] rounded-[11px] border border-white shadow-[0_0_4px_rgba(255,255,255,0.25)] transition-transform duration-300 ${
            checked ? "translate-x-[14px] bg-[#0768BA]" : "bg-[#D9D9D9]"
          }`}
        ></div>
      </div>
    </label>
  );
}
