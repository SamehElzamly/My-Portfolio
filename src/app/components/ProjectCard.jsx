import React from "react";
import { CodeBracketIcon, EyeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, isPrivate }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#0a1128] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          {isPrivate ? (
            <div className="flex flex-col items-center gap-2 text-white">
              <LockClosedIcon className="h-10 w-10" />
              <span className="text-sm font-medium">Private / Confidential</span>
            </div>
          ) : (
            <>
              {gitUrl && (
                <Link
                  href={gitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-14 w-14 mr-2 border-2 relative rounded-full border-white/60 hover:border-[#1282a2] group/link"
                >
                  <CodeBracketIcon className="h-10 w-10 text-white/80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-[#1282a2]" />
                </Link>
              )}
              {previewUrl && (
                <Link
                  href={previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-14 w-14 border-2 relative rounded-full border-white/60 hover:border-[#1282a2] group/link"
                >
                  <EyeIcon className="h-10 w-10 text-white/80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-[#1282a2]" />
                </Link>
              )}
            </>
          )}
        </div>
      </div>
      <div className="text-[#0a1128] rounded-b-xl mt-3 bg-white border border-[#0a1128]/10 shadow-sm py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#0a1128]/70">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;