// pages/api/auth/[...nextauth].js
import { authConfig } from "../../../../auth.config.js/index.js";
import NextAuth from "next-auth";

export default NextAuth(authConfig);
