"use client";

import clsx from "clsx";
import { ProgressBarProps } from "./types";

const ProgressBar = (props: ProgressBarProps) => {
  return (
    <div className="flex items-center justify-between gap-2 text-neutral-600 w-full text-xs sm:text-sm text-center">
      <div
        className={clsx(
          props.step >= 1
            ? "text-primary-600 border-primary-600"
            : "border-gray-300",
          "px-3 py-2 border rounded-full font-semibold md:w-[20%]"
        )}
      >
        {props.firstLabel}
      </div>
      <div
        className={clsx(
          props.step >= 2
            ? "text-primary-600 border-primary-600"
            : "border-gray-300",
          "px-3 py-2 border rounded-full font-semibold md:w-[20%]"
        )}
      >
        {props.secondaryLabel}
      </div>
      <div
        className={clsx(
          props.step === 3
            ? "text-primary-600 border-primary-600"
            : "border-gray-300",
          "px-3 py-2 border rounded-full font-semibold md:w-[20%]"
        )}
      >
        {props.thirdLabel}
      </div>
    </div>
  );
};

export default ProgressBar;
