import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import type { JwtPayload } from "jsonwebtoken"
import clientPromise from "./mongodb"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.log("❌ Missing credentials")
          return null
        }

        try {
          console.log("🔄 Attempting to authenticate:", credentials.email)

          const client = await clientPromise
          console.log("✅ MongoDB client connected")

          const db = client.db("school_cms")
          console.log("✅ Using database: school_cms")

          const users = db.collection("users")
          console.log("✅ Using collection: users")

          // First, let's check if any users exist
          const totalUsers = await users.countDocuments()
          console.log("👥 Total users in database:", totalUsers)

          const user = await users.findOne({ email: credentials.email })

          if (!user) {
            console.log("❌ User not found:", credentials.email)

            // Let's see what users DO exist
            const allUsers = await users.find({}, { projection: { email: 1, name: 1 } }).toArray()
            console.log(
              "📋 Available users:",
              allUsers.map((u) => u.email),
            )

            return null
          }

          console.log("✅ User found:", user.email)
          console.log("🔍 User details:", {
            id: user._id,
            email: user.email,
            name: user.name,
            role: user.role,
            hasPassword: !!user.password,
          })

          if (!user.password) {
            console.log("❌ User has no password hash!")
            return null
          }

          console.log("🔒 Comparing passwords...")
          const isPasswordValid = await bcrypt.compare(credentials.password, user.password)

          if (!isPasswordValid) {
            console.log("❌ Invalid password for:", credentials.email)
            return null
          }

          console.log("✅ Authentication successful for:", credentials.email)
          return {
            id: user._id.toString(),
            email: user.email,
            name: user.name,
            role: user.role,
          }
        } catch (error) {
          console.error("❌ Auth error:", error)
          return null
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }: { token: JwtPayload; user?: any }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    async session({ session, token }: { session: any; token: JwtPayload }) {
      if (token) {
        session.user.id = token.sub!
        session.user.role = token.role as string
      }
      return session
    },
  },
  pages: {
    signIn: "/admin/login",
  },
  debug: process.env.NODE_ENV === "development",
}


