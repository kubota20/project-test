import { Button } from "@/components/ui/button";

interface NextButtonProps {
  nextClick: () => void;
}

const NextButton = ({ nextClick }: NextButtonProps) => {
  return (
    <div className="mt-4 text-center">
      <Button className="py-2 font-semibold" onClick={() => nextClick()}>
        次
      </Button>
    </div>
  );
};

export default NextButton;
