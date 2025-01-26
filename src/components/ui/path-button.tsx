"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { HelpIcon } from "./help-icon";

type PathButtonProps = {
  text: string;
  path: string;
  title: string;
  packages: string[];
  description: string;
};

export const PathButton = ({
  text,
  path,
  title,
  packages,
  description,
}: PathButtonProps) => {
  const router = useRouter();
  return (
    <>
      <Button
        className="mt-8 text-xs font-bold p-2"
        onClick={() => router.push(path)}
      >
        {text}
        <HelpIcon title={title} packages={packages} description={description} />
      </Button>
    </>
  );
};
