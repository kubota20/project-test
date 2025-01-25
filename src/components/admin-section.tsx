import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

const AdminSection = () => {
  return (
    <section className="border border-black shadow p-4 col-span-full">
      <div className="text-center">
        <h2 className="font-bold text-2xl my-2">管理者用</h2>
        <p className="text-sm text-gray-500">管理者しか使用できません</p>
        <div className="space-x-4">
          <Button
            className="mt-8 text-xs font-bold p-2"
            onClick={() => signIn("github")}
          >
            ログイン
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AdminSection;
