import { AllData } from "@/data/dashboard/user/data";
import React from "react";
import { TimeframeButton } from "../ui/time-frame-button";

type TimeframeProps = {
  onClick: (value: keyof AllData) => void; // ボタンクリック時の処理
};

const timeFramText = [
  { label: "週", value: "week" },
  { label: "1ヶ月", value: "month" },
  { label: "3ヶ月", value: "threeMonths" },
  { label: "6ヶ月", value: "sixMonths" },
  { label: "1年", value: "year" },
];

export const TimeFrames = ({ onClick }: TimeframeProps) => {
  return (
    <>
      {timeFramText.map((text) => (
        <div key={text.value}>
          <TimeframeButton
            label={text.label}
            value={text.value as keyof AllData}
            onClick={onClick}
          />
        </div>
      ))}
    </>
  );
};
