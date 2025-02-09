"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FAQItemProps } from "./types";

const FAQItem = (props: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-primary-600 rounded-md flex flex-row justify-between mx-[16px] mt-10 md:mb-[116px] md:mx-[166px]">
      <div className="flex items-center gap-2 text-primary-600">
        <div className="w-4 h-full bg-primary-600"></div>
        <span>FAQ</span>
      </div>
      <button
        className=" flex justify-between items-center p-3 text-blue-600 font-semibold"
        onClick={() => setIsOpen(!isOpen)}
      >
        {props.question}
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
    </div>
  );
};

export default FAQItem;
