import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type PathButtonProps = {
  text: string;
  path: string;
};

export const PathButton = ({ text, path }: PathButtonProps) => {
  const router = useRouter();
  return (
    <Button
      className="mt-8 text-xs font-bold p-2"
      onClick={() => router.push(path)}
    >
      {text}
    </Button>
  );
};
