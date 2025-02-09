"use client";

import { infoCards, platforms } from "@/constants/data";
import { CircleCheck } from "lucide-react";

const InformationSection = () => {
  return (
    <div className="bg-primary-200 px-4 w-full md:px-[166px] pt-10 pb-[60px] flex flex-col justify-center items-center">
      <h2 className="text-2xl font-semibold text-center mb-6">Information</h2>
      <div className="flex flex-wrap justify-center items-center bg-white gap-2 mb-8 rounded-full text-sm font-medium text-neutral-500 px-4 py-2">
        {platforms.map((platform) => (
          <div key={platform} className="flex items-center gap-1 px-3 py-1">
            <CircleCheck className="text-primary-600 w-4 h-4" />
            {platform}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {infoCards.map((card, index) => (
          <div
            key={index}
            className="border p-6 rounded-lg border-primary-600 flex flex-col gap-2 w-[315px] h-[175px]"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-neutral-800">{card.title}</h3>
              <div className="text-primary-600">{card.icon}</div>
            </div>
            <p className="text-sm text-primary-700">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InformationSection;
