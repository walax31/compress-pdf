"use client";

import { Star, ChevronRight } from "lucide-react";
import Link from "next/link";
import MergeIcon from "@/assets/merge.svg";
import Image from "next/image";

const tools = [
  "Merge PDF",
  "Extract PDF images",
  "Add page numbers",
  "Add page numbers",
  "Add watermark",
];

const PDFToolsPanel = () => {
  return (
    <div className="bg-primary-600 text-white p-4 gap-4 rounded-lg flex flex-col items-center">
      <div className="grid grid-cols-2 md:flex md:flex-row gap-3 w-full">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="bg-primary-600 p-3 rounded-lg flex items-center space-x-2 relative border w-full text-center flex-col sm:flex-row sm:text-left"
          >
            <Image src={MergeIcon} alt="Merge Icon" width={50} height={50} />
            <span className="text-sm sm:text-base">{tool}</span>
            <button className="absolute top-2 right-2">
              <Star className="w-4 h-4 text-white" />
            </button>
          </div>
        ))}
      </div>

      <Link
        href={"https://tools.pdf24.org/en/all-tools"}
        className="flex flex-row items-center gap-1 text-sm sm:text-base"
      >
        <p>See all tools</p>
        <ChevronRight />
      </Link>
    </div>
  );
};
export default PDFToolsPanel;
