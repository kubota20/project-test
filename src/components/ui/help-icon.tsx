"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { CircleHelp } from "lucide-react";

type HelpIconProps = {
  title: string;
  packages: string[];
  description: string;
};

export const HelpIcon = ({ title, packages, description }: HelpIconProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <CircleHelp />
      </HoverCardTrigger>
      <HoverCardContent>
        <p className="text-lg font-extrabold">{title}</p>
        <p className="border-b border-gray-500 my-2" />
        <p className="mb-2">パッケージ一覧</p>
        <ul>
          {Array.isArray(packages) && packages.length > 0 ? (
            packages.map((pkg, index) => <li key={index}>{pkg}</li>)
          ) : (
            <li>特になし</li>
          )}
        </ul>
        <p className="border-b border-gray-500 my-2" />
        <p className="mb-2">使用方法</p>
        <p className="text-wrap text-start">{description}</p>
      </HoverCardContent>
    </HoverCard>
  );
};
