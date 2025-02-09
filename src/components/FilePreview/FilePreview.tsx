"use client";

import { Search, Trash2 } from "lucide-react";
import { FilePreviewProps } from "./types";

const FilePreview = (props: FilePreviewProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="w-full h-full flex flex-col md:flex-row">
        {props.uploadedFile.map((file, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 w-[177px] h-[295px]"
          >
            <div className="flex justify-between w-full mb-1">
              <button>
                <Search
                  size={16}
                  className="text-neutral-800 hover:text-black"
                />
              </button>
              <button onClick={() => props.handleRemoveFile(index)}>
                <Trash2 size={16} className="text-error-600" />
              </button>
            </div>
            <div className="h-full flex items-center justify-center relative">
              <img
                src={props.previews[index]}
                alt="PDF Preview"
                className="object-cover p-2"
              />
            </div>
            <p className="text-sm text-gray-700 truncate my-1">
              {file.name.length > 10
                ? file.name.substring(0, 7) + ".....pdf"
                : file.name}
            </p>
            <p className="text-xs text-gray-500">
              {(file.size / 1024).toFixed(2)} KB
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilePreview;
