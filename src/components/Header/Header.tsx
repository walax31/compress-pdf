"use client";
import MergeIcon from "@/assets/merge.svg";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse items-center justify-between w-full px-4 md:px-0 text-center md:text-left">
      <div className="w-full md:w-1/2 flex justify-center md:justify-start mt-4 md:mt-0">
        <Image
          src={MergeIcon}
          alt="Merge Icon"
          width={80}
          height={80}
          className="max-w-[80px] md:max-w-[120px]"
        />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-bold">Compress PDF</h2>
        <p className="text-neutral-600">
          PDF compressor to reduce the size of PDF files quickly and easily
        </p>
      </div>
    </div>
  );
};

export default Header;
