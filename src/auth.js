import NextAuth from "next-auth";
import { authConfig } from "./auth.config.js";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import dbConnect from "./app/lib/dbConnect.js";
import { User } from "./app/lib/user.model.js";

const login = async (credentials) => {
  try {
    dbConnect();
    const user = await User.findOne({ username: credentials.username });

    if (!user) {
      console.log("Utilsateur non trouvé");
      throw new Error("Wrong credentials!");
    }

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) {
      console.log("Mot de passe incorrecte");
      throw new Error("Wrong credentials!");
    }

    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to login!");
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  // ADD ADDITIONAL INFORMATION TO SESSION
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.isAdmin = user.isAdmin;
        // token.img = user.img;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username;
        session.user.isAdmin = token.isAdmin;
        // session.user.img = token.img;
      }
      return session;
    },
  },
});
