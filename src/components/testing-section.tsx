import { PathButton } from "./ui/path-button";

const txetAction = [
  {
    text: "ダッシュボード",
    path: "/dashboard",
  },
];

const TestingSection = () => {
  return (
    <section className="border border-black shadow p-4 col-span-full">
      <div className="text-center">
        <h2 className="font-bold text-2xl my-2">機能テスト</h2>
        <div className="space-x-4">
          {txetAction.map((item) => (
            <div key={item.text}>
              <PathButton text={item.text} path={item.path} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestingSection;
