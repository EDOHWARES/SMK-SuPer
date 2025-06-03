"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Plus, Edit, Trash2, GripVertical } from "lucide-react"
import Link from "next/link"
import type { Page, Section } from "@/types/cms"

export default function PageEditor() {
  const params = useParams()
  const router = useRouter()
  const [page, setPage] = useState<Page | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [showSectionForm, setShowSectionForm] = useState(false)
  const [editingSection, setEditingSection] = useState<Section | null>(null)

  useEffect(() => {
    fetchPage()
  }, [params.id])

  const fetchPage = async () => {
    try {
      const response = await fetch(`/api/pages/${params.id}`)
      if (response.ok) {
        const data = await response.json()
        setPage(data)
      }
    } catch (error) {
      console.error("Failed to fetch page:", error)
    } finally {
      setLoading(false)
    }
  }

  const savePage = async () => {
    if (!page) return
    setSaving(true)

    try {
      const response = await fetch(`/api/pages/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(page),
      })

      if (response.ok) {
        // Show success message
      }
    } catch (error) {
      console.error("Failed to save page:", error)
    } finally {
      setSaving(false)
    }
  }

  const addSection = async (sectionData: Partial<Section>) => {
    if (!page) return

    try {
      const response = await fetch(`/api/pages/${params.id}/sections`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...sectionData,
          order: page.sections.length,
          isActive: true,
        }),
      })

      if (response.ok) {
        const newSection = await response.json()
        setPage({
          ...page,
          sections: [...page.sections, newSection],
        })
        setShowSectionForm(false)
      }
    } catch (error) {
      console.error("Failed to add section:", error)
    }
  }

  const deleteSection = (sectionId: string) => {
    if (!page) return
    if (!confirm("Are you sure you want to delete this section?")) return

    setPage({
      ...page,
      sections: page.sections.filter((section) => section._id !== sectionId),
    })
  }

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  if (!page) {
    return <div>Page not found</div>
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link href="/admin">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold">{page.title}</h1>
            <p className="text-muted-foreground">Edit page content and sections</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center space-x-2">
            <Switch
              id="published"
              checked={page.isPublished}
              onCheckedChange={(checked) => setPage({ ...page, isPublished: checked })}
            />
            <Label htmlFor="published">Published</Label>
          </div>
          <Button onClick={savePage} disabled={saving}>
            {saving ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Page Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="page-title">Page Title</Label>
                <Input
                  id="page-title"
                  value={page.title}
                  onChange={(e) => setPage({ ...page, title: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="page-slug">URL Slug</Label>
                <Input id="page-slug" value={page.slug} onChange={(e) => setPage({ ...page, slug: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="page-description">Description</Label>
                <Textarea
                  id="page-description"
                  value={page.description || ""}
                  onChange={(e) => setPage({ ...page, description: e.target.value })}
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Sections</h2>
            <Button onClick={() => setShowSectionForm(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Add Section
            </Button>
          </div>

          <div className="space-y-4">
            {page.sections.map((section, index) => (
              <Card key={section._id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <GripVertical className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          {section.title || `${section.type} Section`}
                          <Badge variant="outline">{section.type}</Badge>
                          {!section.isActive && <Badge variant="secondary">Inactive</Badge>}
                        </CardTitle>
                        {section.subtext && (
                          <p className="text-sm text-muted-foreground mt-1">{section.subtext.substring(0, 100)}...</p>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={() => setEditingSection(section)}>
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => deleteSection(section._id!)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}

            {page.sections.length === 0 && (
              <Card>
                <CardContent className="text-center py-12">
                  <p className="text-muted-foreground mb-4">No sections added yet</p>
                  <Button onClick={() => setShowSectionForm(true)}>
                    <Plus className="w-4 h-4 mr-2" />
                    Add your first section
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* Section Form Modal */}
      {showSectionForm && <SectionForm onSave={addSection} onCancel={() => setShowSectionForm(false)} />}

      {/* Edit Section Modal */}
      {editingSection && (
        <SectionForm
          section={editingSection}
          onSave={(data) => {
            // Update section logic here
            setEditingSection(null)
          }}
          onCancel={() => setEditingSection(null)}
        />
      )}
    </div>
  )
}

// Section Form Component
function SectionForm({
  section,
  onSave,
  onCancel,
}: {
  section?: Section
  onSave: (data: Partial<Section>) => void
  onCancel: () => void
}) {
  const [formData, setFormData] = useState({
    type: section?.type || "custom",
    title: section?.title || "",
    subtext: section?.subtext || "",
    content: section?.content || {},
    buttons: section?.buttons || [],
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <CardTitle>{section ? "Edit Section" : "Add New Section"}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="section-type">Section Type</Label>
              <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value as any })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hero">Hero Section</SelectItem>
                  <SelectItem value="announcements">Announcements</SelectItem>
                  <SelectItem value="chart">Chart/Performance</SelectItem>
                  <SelectItem value="highlights">Highlights</SelectItem>
                  <SelectItem value="statistics">Statistics</SelectItem>
                  <SelectItem value="updates">Latest Updates</SelectItem>
                  <SelectItem value="academic">Academic Excellence</SelectItem>
                  <SelectItem value="testimonials">Testimonials</SelectItem>
                  <SelectItem value="footer">Footer</SelectItem>
                  <SelectItem value="custom">Custom</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="section-title">Title</Label>
              <Input
                id="section-title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Section title"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="section-subtext">Subtext</Label>
              <Textarea
                id="section-subtext"
                value={formData.subtext}
                onChange={(e) => setFormData({ ...formData, subtext: e.target.value })}
                placeholder="Section description or content"
                rows={4}
              />
            </div>

            <div className="flex gap-4">
              <Button type="submit">{section ? "Update Section" : "Add Section"}</Button>
              <Button type="button" variant="outline" onClick={onCancel}>
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
