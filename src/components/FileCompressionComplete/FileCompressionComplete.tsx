"use client";
import Image from "next/image";
import { Download, Eye, RefreshCw, Trash } from "lucide-react";
import { FileCompressionCompleteProps } from "./types";
import FileIcon from "@/assets/file.svg";

const FileCompressionComplete = (props: FileCompressionCompleteProps) => {
  return (
    <div className="flex items-center flex-col justify-center">
      <div className=" flex items-center flex-col gap-1">
        <div className="text-lg font-semibold">Your files are ready</div>
        <Image src={FileIcon} alt="PageIcon" width={47} height={32} />
        {props.files?.map((file, index) => (
          <ul key={index} className="text-gray-700 text-sm list-disc">
            <li>{file}</li>
          </ul>
        ))}
      </div>
      <div className="flex justify-center gap-3 mt-4">
        <button
          className="bg-secondary-500 text-white flex items-center p-2 rounded-md"
          onClick={props.onDownload}
        >
          <Download className="w-4 h-4 mr-2" /> Download
        </button>
        <button
          className="bg-gray-200 text-gray-600 flex items-center p-2 rounded-md"
          onClick={props.onPreview}
        >
          <Eye className="w-4 h-4 mr-2" /> Preview
        </button>
      </div>
      <div className="flex justify-center gap-4 mt-4 text-gray-600 text-sm">
        <button
          className="flex items-center text-error-600"
          onClick={props.onDelete}
        >
          <Trash className="w-4 h-4 mr-1" /> Delete
        </button>
        <button className="flex items-center" onClick={props.onRestart}>
          <RefreshCw className="w-4 h-4 mr-1" /> Restart
        </button>
      </div>
    </div>
  );
};

export default FileCompressionComplete;
