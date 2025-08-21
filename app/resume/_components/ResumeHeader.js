"use client";
import { useState } from "react";
import { LuDownload, LuX } from "react-icons/lu";

import info from "../../_data/info.json";

export default function ResumeHeader() {
  const [openCv, setOpenCv] = useState(false);
  const opinning = function () {
    setOpenCv(true);
  };
  const closing = function () {
    setOpenCv(false);
  };
  return (
    <div className="flex justify-start items-start py-20">
      <h2 className="text-5xl md:text-9xl font-subhead">Resume</h2>

      {/* <!-- cvs button --> */}
      <button
        onClick={() => opinning()}
        disabled={false}
        className="hidden md:block mt-4 text-main cursor-pointer"
      >
        [ Download CV <LuDownload className="inline-block" /> ]
      </button>
      <button
        onClick={() => opinning()}
        disabled={false}
        className="text-xs md:hidden mt-4 text-main cursor-pointer"
      >
        [ <LuDownload className="inline-block" /> ]
      </button>

      {/* <!-- overlay --> */}
      {openCv && (
        <div
          id="overlay"
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
        >
          <div className="bg-white w-80 rounded-2xl shadow-2xl m-4 p-4 md:p-6 space-y-4 relative">
            <div className="flex justify-between items-center border-b">
              <h2 className="text-sm md:text-xl font-bold pb-2">Choose a CV</h2>
              <button
                onClick={() => closing()}
                className="text-gray-600 hover:text-red-500"
              >
                <LuX />
              </button>
            </div>

            <ul className="space-y-3">
              {info.CVs.map((file, index) => (
                <li key={index}>
                  <a
                    href={file.filePath}
                    target="_blank"
                    download
                    className="block px-4 py-1 md:py-2 bg-gray-100 hover:bg-blue-100 rounded-lg text-center"
                  >
                    {file.roleTitle}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
