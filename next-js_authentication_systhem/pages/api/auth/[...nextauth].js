import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { useCallback } from "react/cjs/react.production.min";

const NextAuth = () => {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ]
  // callbacks: {
  //   async jwt({ token, account}){
  //     if(account){
  //       token.accessToken = account.access_token
  //     }
  //     return token
  //   }
  //   async session({session, token, user}){
  //     session.accessToken = token.access_token
  //     return session
  //   }
  // }
};

export default NextAuth;
