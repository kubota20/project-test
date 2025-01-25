import { PathButton } from "@/components/ui/path-button";

const txetAction = [
  {
    text: "三目並べ",
    path: "/tic-tac-toe",
  },
];

const GameSection = () => {
  return (
    <section className="border border-black shadow p-4">
      <div className="text-center">
        <h2 className="font-bold text-2xl my-2">ゲーム</h2>
        {txetAction.map((item) => (
          <PathButton key={item.text} text={item.text} path={item.path} />
        ))}
      </div>
    </section>
  );
};

export default GameSection;
