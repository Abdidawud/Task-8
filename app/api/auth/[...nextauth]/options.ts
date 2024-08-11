import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { NextAuthOptions } from 'next-auth';

export const options: NextAuthOptions  = {

  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },  
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch("https://akil-backend.onrender.com/login", {
          method: "POST",
          body: JSON.stringify({
            redirect: false,
            email: credentials?.email,
            password: credentials?.password,
          }),
          headers: { "Content-Type": "application/json" },
        });

        const info = await res.json();
        const user = info.data;

        if (res.ok && user) {
          return {
            id: user._id,
            accessToken: user.token,
            refreshToken: user.refreshToken,
            name: user.name,
            email: user.email,
            role: user.role,
            profileComplete: user.profileComplete,
            message: user.message,
            success: user.success,
          };
        }

        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: { 
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    }
  }
};
const handler= NextAuth(options);

export default NextAuth(options);