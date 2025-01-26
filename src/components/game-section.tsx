import { PathButton } from "@/components/ui/path-button";

const txetAction = [
  {
    text: "三目並べ",
    path: "/tic-tac-toe",
    packages: [],
    description:
      "「 ⭕️ 」と「 ❌ 」を3×3マスの格子に交互に書いていき、先に1列揃えたら勝ち",
  },
];

const GameSection = () => {
  return (
    <section className="border border-black shadow p-4">
      <div className="text-center">
        <h2 className="font-bold text-2xl my-2">ゲーム</h2>
        {txetAction.map((item) => (
          <PathButton
            key={item.text}
            text={item.text}
            path={item.path}
            title={item.text}
            packages={item.packages}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default GameSection;
