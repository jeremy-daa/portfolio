import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "your username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "your password",
        },
      },
      async authorize(
        credentials: Record<"username" | "password", string> | undefined
      ) {
        const user = {
          id: "1",
          name: process.env.USERNAME,
          password: process.env.PASSWORD,
        };
        if (
          credentials?.username === "admin" &&
          credentials?.password === "admin"
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};

export default options;
