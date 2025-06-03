import { MongoClient } from "mongodb"
import bcrypt from "bcryptjs"
import dotenv from "dotenv"
dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  console.error("❌ MONGODB_URI environment variable is not set")
  process.exit(1)
}

async function setupAdmin() {
  console.log("🔄 Setting up admin user...")
  console.log("📍 Connecting to:", MONGODB_URI.replace(/\/\/.*@/, "//***:***@"))

  const client = new MongoClient(MONGODB_URI)

  try {
    // Connect to MongoDB
    await client.connect()
    console.log("✅ Connected to MongoDB Atlas")

    // Get database and collection
    const db = client.db("school_cms")
    console.log("📁 Using database: school_cms")

    const users = db.collection("users")
    console.log("📄 Using collection: users")

    // Check existing users
    const allUsers = await users.find({}).toArray()
    console.log("👥 Current users in database:", allUsers.length)

    if (allUsers.length > 0) {
      console.log("📋 Existing users:")
      allUsers.forEach((user) => {
        console.log(`  - ${user.email} (${user.role}) - ID: ${user._id}`)
      })
    }

    // Check if admin user already exists
    const existingAdmin = await users.findOne({ email: "admin@school.com" })

    if (existingAdmin) {
      console.log("ℹ️  Admin user already exists!")
      console.log("📧 Email: admin@school.com")
      console.log("🆔 ID:", existingAdmin._id)
      console.log("👤 Name:", existingAdmin.name)
      console.log("🔑 Use password: admin123")
      return
    }

    console.log("🔐 Creating new admin user...")

    // Hash password
    console.log("🔒 Hashing password...")
    const hashedPassword = await bcrypt.hash("admin123", 12)
    console.log("✅ Password hashed successfully")

    // Create admin user object
    const adminUser = {
      email: "admin@school.com",
      name: "Admin User",
      password: hashedPassword,
      role: "admin",
      createdAt: new Date(),
    }

    console.log("💾 Inserting user into database...")
    const result = await users.insertOne(adminUser)

    console.log("✅ Admin user created successfully!")
    console.log("🆔 Inserted ID:", result.insertedId)
    console.log("📧 Email: admin@school.com")
    console.log("🔑 Password: admin123")
    console.log("⚠️  Please change the password after first login!")

    // Verify the user was created
    const verifyUser = await users.findOne({ _id: result.insertedId })
    if (verifyUser) {
      console.log("✅ User verification successful")
      console.log("👤 Created user:", {
        id: verifyUser._id,
        email: verifyUser.email,
        name: verifyUser.name,
        role: verifyUser.role,
      })
    } else {
      console.log("❌ User verification failed")
    }

    // Create indexes for better performance
    try {
      await users.createIndex({ email: 1 }, { unique: true })
      console.log("✅ Database indexes created")
    } catch (indexError) {
      console.log("ℹ️  Index already exists or couldn't be created:", indexError.message)
    }
  } catch (error) {
    console.error("❌ Error setting up admin:", error)

    if (error.code === 11000) {
      console.log("ℹ️  Admin user already exists (duplicate key error)")
    } else if (error.name === "MongoServerError") {
      console.log("🔍 MongoDB Server Error Details:")
      console.log("  - Code:", error.code)
      console.log("  - Message:", error.message)
    } else {
      console.log("🔍 Full error details:", error)
    }
  } finally {
    await client.close()
    console.log("🔌 Database connection closed")
  }
}

setupAdmin()
