import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
};

export default NextAuth(authOptions);
