import { MongoClient } from "mongodb";
import dotenv from "dotenv"
dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  console.error("❌ MONGODB_URI environment variable is not set")
  process.exit(1)
}

async function testConnection() {
  console.log("🔄 Testing MongoDB connection...")
  console.log("📍 URI:", MONGODB_URI.replace(/\/\/.*@/, "//***:***@"))

  const client = new MongoClient(MONGODB_URI)

  try {
    await client.connect()
    console.log("✅ Successfully connected to MongoDB Atlas")

    // Test database operations
    const db = client.db("school_cms")
    const collections = await db.listCollections().toArray()
    console.log(
      "📁 Available collections:",
      collections.map((c) => c.name),
    )

    // Check if users collection exists and has data
    const users = db.collection("users")
    const userCount = await users.countDocuments()
    console.log("👥 Users in database:", userCount)

    if (userCount > 0) {
      const adminUser = await users.findOne({ email: "admin@school.com" })
      if (adminUser) {
        console.log("✅ Admin user found in database")
      } else {
        console.log("⚠️  Admin user not found, run setup-admin.js")
      }
    } else {
      console.log("⚠️  No users found, run setup-admin.js")
    }
  } catch (error) {
    console.error("❌ Connection failed:", error.message)

    if (error.message.includes("authentication failed")) {
      console.log("💡 Check your MongoDB Atlas credentials")
    } else if (error.message.includes("network")) {
      console.log("💡 Check your internet connection and MongoDB Atlas network access")
    }
  } finally {
    await client.close()
    console.log("🔌 Connection closed")
  }
}

testConnection()
