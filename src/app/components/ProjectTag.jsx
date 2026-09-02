import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-[#1282a2] border-[#1282a2]"
    : "text-[#0a1128]/60 border-[#0a1128]/20 hover:border-[#1282a2] hover:text-[#1282a2]";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;