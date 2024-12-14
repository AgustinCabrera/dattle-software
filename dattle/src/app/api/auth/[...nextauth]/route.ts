import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { 
          label: "Email", 
          type: "email", 
          placeholder: "user@email.com" },
          
        password: { 
          label: "Password", 
          type: "password" },
        },
          
      async authorize(credentials, req) {
        const user = { id: "1", name: "Admin" };
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
})
export {handler as GET, handler as POST}