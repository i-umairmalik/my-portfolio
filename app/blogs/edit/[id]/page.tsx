"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Save, Eye, Plus, X } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  readTime: number
  tags: string[]
  featured: boolean
}

export default function EditBlogPage() {
  const params = useParams()
  const router = useRouter()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [content, setContent] = useState("")
  const [tags, setTags] = useState<string[]>([])
  const [newTag, setNewTag] = useState("")
  const [featured, setFeatured] = useState(false)
  const [readTime, setReadTime] = useState(5)

  useEffect(() => {
    const savedPosts = localStorage.getItem("blog-posts")
    if (savedPosts) {
      const posts: BlogPost[] = JSON.parse(savedPosts)
      const foundPost = posts.find((p) => p.id === params.id)
      if (foundPost) {
        setPost(foundPost)
        setTitle(foundPost.title)
        setExcerpt(foundPost.excerpt)
        setContent(foundPost.content)
        setTags(foundPost.tags)
        setFeatured(foundPost.featured)
        setReadTime(foundPost.readTime)
      }
    }
    setLoading(false)
  }, [params.id])

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()])
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const saveBlog = () => {
    if (!title.trim() || !excerpt.trim() || !content.trim()) {
      alert("Please fill in all required fields")
      return
    }

    const updatedPost = {
      ...post!,
      title: title.trim(),
      excerpt: excerpt.trim(),
      content: content.trim(),
      readTime,
      tags,
      featured,
    }

    const existingPosts = JSON.parse(localStorage.getItem("blog-posts") || "[]")
    const updatedPosts = existingPosts.map((p: BlogPost) => 
      p.id === params.id ? updatedPost : p
    )
    localStorage.setItem("blog-posts", JSON.stringify(updatedPosts))

    router.push(`/blogs/${params.id}`)
  }

  if (loading) {
    return (
      <div className="min-h-screen relative">
        <Navigation />
        <div className="pt-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading article...</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen relative">
        <Navigation />
        <div className="pt-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-6">The article you're trying to edit doesn't exist.</p>
            <Link href="/blogs">
              <Button>Back to Blogs</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen relative">
      <Navigation />
      
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Link href={`/blogs/${post.id}`}>
              <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                <ArrowLeft className="h-4 w-4" />
                Back to Article
              </Button>
            </Link>
            <h1 className="font-serif text-3xl font-bold text-foreground">Edit Article</h1>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle>Article Content</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      placeholder="Enter article title..."
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="excerpt">Excerpt *</Label>
                    <Textarea
                      id="excerpt"
                      placeholder="Brief description of the article..."
                      value={excerpt}
                      onChange={(e) => setExcerpt(e.target.value)}
                      rows={3}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="content">Content *</Label>
                    <Textarea
                      id="content"
                      placeholder="Write your article content here..."
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      rows={15}
                      className="mt-1 font-mono text-sm"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle>Article Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="featured">Featured Article</Label>
                    <Switch id="featured" checked={featured} onCheckedChange={setFeatured} />
                  </div>

                  <div>
                    <Label htmlFor="readTime">Read Time (minutes)</Label>
                    <Input
                      id="readTime"
                      type="number"
                      min="1"
                      max="60"
                      value={readTime}
                      onChange={(e) => setReadTime(Number.parseInt(e.target.value) || 5)}
                      className="mt-1"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle>Tags</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Add tag..."
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && addTag()}
                    />
                    <Button size="sm" onClick={addTag}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                        {tag}
                        <button onClick={() => removeTag(tag)}>
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-col gap-2">
                <Button onClick={saveBlog} className="flex items-center gap-2">
                  <Save className="h-4 w-4" />
                  Update Article
                </Button>
                <Link href={`/blogs/${post.id}`}>
                  <Button variant="outline" className="flex items-center gap-2 bg-transparent w-full">
                    <Eye className="h-4 w-4" />
                    View Article
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
