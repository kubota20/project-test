import NextAuth, { NextAuthOptions } from "next-auth";

// GitHub認証
import GitHub from "next-auth/providers/github";

// prisma
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET, // セッション暗号化用の秘密キー
  session: {
    strategy: "jwt", // セッション管理方式 (JWTベース)
  },

  callbacks: {
    async signIn({ user }) {
      const allowedEmails = [process.env.GitHub_EMAIL as string]; // 特定のメールアドレスを許可
      if (user.email && allowedEmails.includes(user.email)) {
        return true; // サインイン許可
      } else {
        return false; // サインイン拒否
      }
    },
    async session({ session, token }) {
      session.user.id = token.id;

      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // トークンにユーザーIDを追加
      }
      return token;
    },
    async redirect({ url, baseUrl }) {
      // デフォルトで /admin にリダイレクト
      if (url === "/" || url === `${baseUrl}/`) {
        return `${baseUrl}/admin`;
      }
      // 他のケースでは、指定されたURLにリダイレクト
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },

  pages: {
    signIn: "/sign-in",
    error: "/error",
  },
};

export default NextAuth(authOptions);
