// next-auth.d.ts
import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession`, and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: string;
      name: string;
      phoneNumber: string;
      roleId: number;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    name: string;
    phoneNumber: string;
    roleId: number;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    name: string;
    phoneNumber: string;
    roleId: number;
  }
}
