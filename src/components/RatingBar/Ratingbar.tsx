"use client";

import CheckIcon from "@/assets/check.svg";
import StartIcon from "@/assets/stars.svg";
import { reviewItems } from "@/constants/data";
import Image from "next/image";

const RatingBar = () => {
  return (
    <div className="bg-primary-600 text-white py-3 px-4 md:px-[166px] flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
      <div className="flex items-center space-x-2">
        <Image src={StartIcon} alt="Star Rating" width={90} height={13} />
        <span className="text-lg font-semibold">4.9</span>
        <span className="text-sm opacity-80">(8,381 votes)</span>
      </div>
      <div className="flex flex-wrap justify-center md:justify-start items-center space-x-3 md:space-x-4">
        {reviewItems.map((items, index) => (
          <div key={index} className="flex items-center space-x-1">
            <Image src={CheckIcon} alt="Check Icon" width={17} height={17} />
            <span className="text-sm">{items}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingBar;
