import nextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const NextAuth = () => {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ];
};

export default NextAuth;
