"use client"

import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2 } from "lucide-react"
import Link from "next/link"
import type { Page } from "@/types/cms"

export default function AdminDashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [pages, setPages] = useState<Page[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login")
    }
  }, [status, router])

  useEffect(() => {
    fetchPages()
  }, [])

  const fetchPages = async () => {
    try {
      const response = await fetch("/api/pages")
      if (response.ok) {
        const data = await response.json()
        setPages(data)
      }
    } catch (error) {
      console.error("Failed to fetch pages:", error)
    } finally {
      setLoading(false)
    }
  }

  const deletePage = async (id: string) => {
    if (!confirm("Are you sure you want to delete this page?")) return

    try {
      const response = await fetch(`/api/pages/${id}`, {
        method: "DELETE",
      })
      if (response.ok) {
        setPages(pages.filter((page) => page._id !== id))
      }
    } catch (error) {
      console.error("Failed to delete page:", error)
    }
  }

  if (status === "loading" || loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  if (!session) {
    return null
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">CMS Dashboard</h1>
          <p className="text-muted-foreground">Manage your school website content</p>
        </div>
        <Link href="/admin/pages/new">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            New Page
          </Button>
        </Link>
      </div>

      <div className="grid gap-6">
        {pages.map((page) => (
          <Card key={page._id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    {page.title}
                    <Badge variant={page.isPublished ? "default" : "secondary"}>
                      {page.isPublished ? "Published" : "Draft"}
                    </Badge>
                  </CardTitle>
                  <CardDescription>{page.description || "No description"}</CardDescription>
                  <p className="text-sm text-muted-foreground mt-2">
                    {page.sections?.length || 0} sections • Last updated:{" "}
                    {new Date(page.updatedAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Link href={`/admin/pages/${page._id}`}>
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Button variant="outline" size="sm" onClick={() => deletePage(page._id!)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}

        {pages.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <p className="text-muted-foreground mb-4">No pages created yet</p>
              <Link href="/admin/pages/new">
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Create your first page
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
