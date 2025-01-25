import { PathButton } from "@/components/ui/path-button";

const txetAction = [
  {
    text: "JavaScript",
    path: "/quiz/javascript",
  },
  {
    text: "React.js",
    path: "/quiz/react.js",
  },
  {
    text: "Next.js 13",
    path: "/quiz/next13.js",
  },
  {
    text: "Next.js 14",
    path: "/quiz/next14.js",
  },
];

const QuizSection = () => {
  return (
    <section className="border border-black shadow p-4">
      <div className="text-center">
        <h2 className="font-bold text-2xl my-2">クイズ</h2>
        <div className="space-x-4">
          {txetAction.map((item) => (
            <PathButton key={item.text} text={item.text} path={item.path} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
