"use client";

import { Kalam } from "next/font/google";
import { useState } from "react";

const kalam = Kalam({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

interface ResumeListItemProps {
  title: string;
  subTitle: string;
  startDate: number | string;
  endDate: number | string;
  description: string[];
  firstItem: boolean;
}

export default function ResumeListItem({
  title,
  subTitle,
  startDate,
  endDate,
  description,
  firstItem,
}: ResumeListItemProps) {
  const [isExpanded, setIsExpanded] = useState(firstItem ? true : false);

  const renderedDescription = description.map((ele, idx) => {
    return (
      <li key={idx} className="mb-2">
        {ele}
      </li>
    );
  });

  return (
    <div className="">
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="relative cursor-pointer"
      >
        <div className="flex flex-col gap-2 border-r border-t border-rose-500 py-4 pr-4">
          <div className="font-bold text-white">{title}</div>
          {isExpanded && (
            <>
              <div
                className={`flex flex-row justify-between ${kalam.className}`}
              >
                <span>{subTitle}</span>
                <div>
                  <span>{startDate} - </span>
                  <span className={`${firstItem ? "text-rose-500" : ""}`}>
                    {endDate}
                  </span>
                </div>
              </div>
              <div className="text-gray-300">
                {description.length === 1 ? (
                  <span>{description[0]}</span>
                ) : (
                  <ul className="list-inside list-disc">
                    {renderedDescription}
                  </ul>
                )}
              </div>
            </>
          )}
        </div>
        <button
          className={`absolute -right-4 flex h-8 w-8 items-center justify-center rounded-full border border-rose-500 bg-black text-center text-xl text-rose-500 transition-all duration-300 ease-in ${
            isExpanded ? "-top-3 rotate-180" : "-top-4 rotate-0"
          }`}
        >
          {isExpanded ? "-" : "+"}
        </button>
      </div>
    </div>
  );
}
