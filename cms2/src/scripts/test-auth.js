import { MongoClient } from "mongodb"
import bcrypt from "bcryptjs";
import dotenv from "dotenv"
dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI

async function testAuth() {
  console.log("🔐 Testing authentication logic...")

  const client = new MongoClient(MONGODB_URI)

  try {
    await client.connect()
    console.log("✅ Connected to MongoDB")

    const db = client.db("school_cms")
    const users = db.collection("users")

    // Test finding the user
    console.log("🔍 Looking for admin@school.com...")
    const user = await users.findOne({ email: "admin@school.com" })

    if (!user) {
      console.log("❌ User not found in database!")
      console.log("💡 Make sure to run setup-admin-v2.js first")
      return
    }

    console.log("✅ User found!")
    console.log("👤 User details:")
    console.log("  - ID:", user._id)
    console.log("  - Email:", user.email)
    console.log("  - Name:", user.name)
    console.log("  - Role:", user.role)

    // Test password comparison
    console.log("\n🔒 Testing password comparison...")
    const testPassword = "admin123"

    if (!user.password) {
      console.log("❌ No password hash found in user record!")
      return
    }

    console.log("🔍 Password hash exists, length:", user.password.length)

    try {
      const isValid = await bcrypt.compare(testPassword, user.password)
      console.log("🔐 Password comparison result:", isValid ? "✅ VALID" : "❌ INVALID")

      if (isValid) {
        console.log("🎉 Authentication would succeed!")
      } else {
        console.log("💡 Try recreating the user with setup-admin-v2.js")
      }
    } catch (bcryptError) {
      console.log("❌ Error during password comparison:", bcryptError.message)
    }
  } catch (error) {
    console.error("❌ Error during auth test:", error)
  } finally {
    await client.close()
    console.log("\n🔌 Connection closed")
  }
}

testAuth()
