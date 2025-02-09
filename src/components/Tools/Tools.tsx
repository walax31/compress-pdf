"use client";

import { tools } from "@/constants/data";
import clsx from "clsx";

const Tools = () => {
  return (
    <div className="mt-10  pt-4 px-4 md:px-[166px]">
      <div className="border-t mb-6 border-primary-600" />
      <h2 className="text-lg font-semibold text-gray-900 mb-4 text-center md:text-left">
        All tools
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-4 text-sm text-gray-600">
        {tools.map((col, colIndex) => (
          <ul
            key={colIndex}
            className={clsx(
              colIndex !== 0 && "md:border-l md:pl-4 border-neutral-600",
              "space-y-2"
            )}
          >
            {col.map((tool, toolIndex) => (
              <li
                key={toolIndex}
                className="hover:underline hover:text-blue-600 cursor-pointer"
              >
                {tool}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Tools;
