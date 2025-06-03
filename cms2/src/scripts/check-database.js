import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  console.error("❌ MONGODB_URI environment variable is not set")
  process.exit(1)
}

async function checkDatabase() {
  console.log("🔍 Checking database contents...")

  const client = new MongoClient(MONGODB_URI)

  try {
    await client.connect()
    console.log("✅ Connected to MongoDB Atlas")

    const db = client.db("school_cms")

    // List all collections
    const collections = await db.listCollections().toArray()
    console.log("📁 Collections in school_cms database:")
    collections.forEach((col) => {
      console.log(`  - ${col.name}`)
    })

    // Check users collection specifically
    const users = db.collection("users")
    const userCount = await users.countDocuments()
    console.log(`\n👥 Total users: ${userCount}`)

    if (userCount > 0) {
      const allUsers = await users.find({}).toArray()
      console.log("📋 All users in database:")
      allUsers.forEach((user) => {
        console.log(`  - Email: ${user.email}`)
        console.log(`    Name: ${user.name}`)
        console.log(`    Role: ${user.role}`)
        console.log(`    ID: ${user._id}`)
        console.log(`    Created: ${user.createdAt}`)
        console.log(`    Has Password: ${user.password ? "Yes" : "No"}`)
        console.log("    ---")
      })

      // Specifically check for admin user
      const adminUser = await users.findOne({ email: "admin@school.com" })
      if (adminUser) {
        console.log("✅ Admin user found!")
        console.log("🔍 Admin user details:")
        console.log("  - ID:", adminUser._id)
        console.log("  - Email:", adminUser.email)
        console.log("  - Name:", adminUser.name)
        console.log("  - Role:", adminUser.role)
        console.log("  - Password Hash Length:", adminUser.password?.length || 0)
        console.log("  - Created:", adminUser.createdAt)
      } else {
        console.log("❌ Admin user NOT found!")
        console.log("💡 Run the setup-admin-v2.js script to create it")
      }
    } else {
      console.log("📭 No users found in database")
      console.log("💡 Run the setup-admin-v2.js script to create the admin user")
    }

    // Check pages collection
    const pages = db.collection("pages")
    const pageCount = await pages.countDocuments()
    console.log(`\n📄 Total pages: ${pageCount}`)
  } catch (error) {
    console.error("❌ Error checking database:", error)
  } finally {
    await client.close()
    console.log("\n🔌 Database connection closed")
  }
}

checkDatabase()
