import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import clientPromise from "@/lib/mongodb"

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const client = await clientPromise
    const pages = client.db("school_cms").collection("pages")

    const result = await pages.find({}).sort({ createdAt: -1 }).toArray()

    return NextResponse.json(result)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch pages" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const client = await clientPromise
    const pages = client.db("school_cms").collection("pages")

    const newPage = {
      ...body,
      sections: [],
      isPublished: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    const result = await pages.insertOne(newPage)

    return NextResponse.json({ _id: result.insertedId, ...newPage })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create page" }, { status: 500 })
  }
}
