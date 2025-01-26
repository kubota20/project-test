import { PathButton } from "@/components/ui/path-button";

const txetAction = [
  {
    text: "JavaScript",
    path: "/quiz/javascript",
    packages: [],
    description:
      "クイズは４択式で問題は３０問でます。問題文はランダムで出題され全て解き終わるとスコア結果が出されます。",
  },
  {
    text: "React.js",
    path: "/quiz/react.js",
    packages: [],
    description:
      "クイズは４択式で問題は３０問でます。問題文はランダムで出題され全て解き終わるとスコア結果が出されます。",
  },
  {
    text: "Next.js 13",
    path: "/quiz/next13.js",
    packages: [],
    description:
      "クイズは４択式で問題は３０問でます。問題文はランダムで出題され全て解き終わるとスコア結果が出されます。",
  },
  {
    text: "Next.js 14",
    path: "/quiz/next14.js",
    packages: [],
    description:
      "クイズは４択式で問題は３０問でます。問題文はランダムで出題され全て解き終わるとスコア結果が出されます。",
  },
];

const QuizSection = () => {
  return (
    <section className="border border-black shadow p-4">
      <div className="text-center">
        <h2 className="font-bold text-2xl my-2">クイズ</h2>
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

export default QuizSection;
