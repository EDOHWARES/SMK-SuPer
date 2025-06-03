import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import clientPromise from "@/lib/mongodb"
import { ObjectId } from "mongodb"

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const client = await clientPromise
    const pages = client.db("school_cms").collection("pages")

    const newSection = {
      _id: new ObjectId().toString(),
      ...body,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    const result = await pages.updateOne(
      { _id: new ObjectId(params.id) },
      {
        $push: { sections: newSection },
        $set: { updatedAt: new Date() },
      },
    )

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "Page not found" }, { status: 404 })
    }

    return NextResponse.json(newSection)
  } catch (error) {
    return NextResponse.json({ error: "Failed to create section" }, { status: 500 })
  }
}
