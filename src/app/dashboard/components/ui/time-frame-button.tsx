import { Button } from "@/components/ui/button";
import { AllData } from "@/data/dashboard/user/data";

type TimeframeButtonProps = {
  label: string; // ボタンの表示ラベル (例: "週", "1ヶ月")
  value: keyof AllData; // タイムフレームの値 (例: "week", "month")
  onClick: (value: keyof AllData) => void; // ボタンクリック時の処理
};

export const TimeframeButton = ({
  label,
  value,
  onClick,
}: TimeframeButtonProps) => {
  return (
    <Button onClick={() => onClick(value)} variant="ghost">
      {label}
    </Button>
  );
};
