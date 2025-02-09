"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import PageIcon from "@/assets/page.svg";
import GoogleIcon from "@/assets/google-drive.svg";
import Dropbox from "@/assets/dropbox.svg";
import { FileUploaderProps } from "./types";

const FileUploader = (props: FileUploaderProps) => {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <Image src={PageIcon} alt="PageIcon" width={47} height={32} />
      <label
        htmlFor="file-upload"
        className="bg-orange-400 text-neutral-800 p-4 gap-2 mt-4 rounded-lg flex items-center cursor-pointer hover:bg-orange-500 transition"
      >
        <span className="text-neutral-800">Select files |</span>
        <ChevronDown size={20} />
      </label>
      <input
        type="file"
        id="file-upload"
        accept=".pdf"
        multiple
        className="hidden"
        onChange={(e) => {
          props.handleUpload(e);
        }}
      />
      <p className="text-gray-500 text-sm mt-2">
        or drag and drop file into this area
      </p>
      <div className="flex flex-row gap-2">
        <Image src={Dropbox} alt="PageIcon" width={50} height={10} />
        <Image src={GoogleIcon} alt="GoogleIcon" width={50} height={10} />
      </div>
    </div>
  );
};

export default FileUploader;
