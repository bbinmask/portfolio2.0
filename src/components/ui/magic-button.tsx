import React from "react";

const MagicButton = ({
  title,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className="relative w-full min-w-52 inline-flex justify-center items-center h-12 overflow-hidden rounded-lg p-[2px] focus:outline-none md:w-56 md:mt-10"
      onClick={handleClick}
    >
      <span className="absolute overflow-hidden inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex font-light  h-full w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-slate-950 px-7 text-sm font-[cal_sans] text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left"}
        {title}
        {position === "right"}
      </span>
    </button>
  );
};

export default MagicButton;
