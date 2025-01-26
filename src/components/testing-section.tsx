import { PathButton } from "@/components/ui/path-button";

const txetAction = [
  {
    text: "ダッシュボード",
    path: "/dashboard",
    packages: ["recharts: ^2.15.0"],
    description: "rechartsを使った管理用ダッシュボード",
  },
];

const TestingSection = () => {
  return (
    <section className="border border-black shadow p-4 col-span-full">
      <div className="text-center">
        <h2 className="font-bold text-2xl my-2">機能テスト</h2>
        <div className="space-x-4">
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
      </div>
    </section>
  );
};

export default TestingSection;
