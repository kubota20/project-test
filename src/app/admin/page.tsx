"use client";
import { signOut } from "next-auth/react";

const AdminPage = () => {
  return (
    <div>
      <button onClick={() => signOut()}>ログアウト</button>
    </div>
  );
};

export default AdminPage;
