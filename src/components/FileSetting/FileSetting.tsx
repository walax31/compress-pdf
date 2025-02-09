"use client";

import clsx from "clsx";
import { FileSettingProps } from "./types";

const FileSetting = (props: FileSettingProps) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="p-4 border-2 border-primary-400 mt-10 rounded-lg bg-primary-200 w-full max-w-[721px] flex flex-col space-y-6">
        <h3 className="text-neutral-800 text-center md:text-left">
          Compression Settings
        </h3>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
          <div className="flex flex-col md:flex-row items-center justify-start gap-2">
            <label className="text-sm font-medium">DPI</label>
            <input
              type="number"
              min="72"
              max="300"
              value={props.dpi}
              onChange={(e) => props.setDpi(Number(e.target.value))}
              className="border rounded px-2 py-1 w-16 text-center"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2">
            <label className="text-sm font-medium">Image Quality</label>
            <input
              type="number"
              min="1"
              max="100"
              value={props.imageQuality}
              onChange={(e) => props.setImageQuality(Number(e.target.value))}
              className="border rounded px-2 py-1 w-16 text-center"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Color</label>
            <button
              onClick={() => props.setIsGray(!props.isGray)}
              aria-label={
                props.isGray ? "Enable Color Mode" : "Enable Grayscale Mode"
              }
              className={clsx(
                props.isGray ? "bg-neutral-400" : "bg-primary-500",
                "relative w-12 h-6 rounded-full transition-all duration-300"
              )}
            >
              <span
                className={clsx(
                  props.isGray && "translate-x-6",
                  "absolute left-1 top-1 w-4 h-4 rounded-full bg-white transition-transform duration-300"
                )}
              />
            </button>
            <span className="text-sm font-medium">Gray</span>
          </div>
        </div>
      </div>
      <button
        className="bg-orange-400 text-white px-6 py-3 mt-4 rounded-lg flex items-center cursor-pointer hover:bg-orange-500 transition"
        onClick={props.handleCompressFiles}
      >
        Compress
      </button>
    </div>
  );
};

export default FileSetting;
