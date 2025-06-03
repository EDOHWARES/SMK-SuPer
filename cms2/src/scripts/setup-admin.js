import { MongoClient } from "mongodb"
import bcrypt from "bcryptjs";
import dotenv from "dotenv"
dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  console.error("❌ MONGODB_URI environment variable is not set")
  process.exit(1)
}

async function setupAdmin() {
  console.log("🔄 Setting up admin user...")

  const client = new MongoClient(MONGODB_URI)

  try {
    await client.connect()
    console.log("✅ Connected to MongoDB Atlas")

    const db = client.db("school_cms")
    const users = db.collection("users")

    // Check if admin user already exists
    const existingAdmin = await users.findOne({ email: "admin@school.com" })

    if (existingAdmin) {
      console.log("ℹ️  Admin user already exists")
      console.log("📧 Email: admin@school.com")
      console.log("🔑 Use your existing password")
      return
    }

    // Create admin user
    console.log("🔐 Hashing password...")
    const hashedPassword = await bcrypt.hash("admin123", 12)

    const adminUser = {
      email: "admin@school.com",
      name: "Admin User",
      password: hashedPassword,
      role: "admin",
      createdAt: new Date(),
    }

    const result = await users.insertOne(adminUser)
    console.log("✅ Admin user created successfully!")
    console.log("📧 Email: admin@school.com")
    console.log("🔑 Password: admin123")
    console.log("⚠️  Please change the password after first login!")
    console.log("🆔 User ID:", result.insertedId)

    // Create indexes for better performance
    await users.createIndex({ email: 1 }, { unique: true })
    console.log("✅ Database indexes created")
  } catch (error) {
    console.error("❌ Error setting up admin:", error.message)

    if (error.code === 11000) {
      console.log("ℹ️  Admin user already exists (duplicate key)")
    }
  } finally {
    await client.close()
    console.log("🔌 Database connection closed")
  }
}

setupAdmin()
