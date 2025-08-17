"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, Clock, User, Share2, Edit } from "lucide-react"
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

export default function BlogPostPage() {
  const params = useParams()
  const router = useRouter()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const savedPosts = localStorage.getItem("blog-posts")
    if (savedPosts) {
      const posts: BlogPost[] = JSON.parse(savedPosts)
      const foundPost = posts.find((p) => p.id === params.id)
      setPost(foundPost || null)
    }
    setLoading(false)
  }, [params.id])

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
            <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist.</p>
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
            <Link href="/blogs">
              <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                <ArrowLeft className="h-4 w-4" />
                Back to Blogs
              </Button>
            </Link>
            <Link href={`/blogs/edit/${post.id}`}>
              <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                <Edit className="h-4 w-4" />
                Edit
              </Button>
            </Link>
          </div>

          <article>
            <header className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.featured && (
                  <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">Featured</Badge>
                )}
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">{post.title}</h1>

              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">{post.excerpt}</p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readTime} min read
                </div>
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </div>
            </header>

            <Card className="mb-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <div className="whitespace-pre-wrap text-foreground leading-relaxed">{post.content}</div>
                </div>
              </CardContent>
            </Card>
          </article>

          <div className="border-t border-border pt-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">About the Author</h3>
                <p className="text-muted-foreground">
                  Senior Software Engineer with 7+ years of experience in full-stack development, cloud architecture, and
                  technical leadership.
                </p>
              </div>
              <div className="hidden sm:block">
                <img
                  src="/software-engineer-headshot.png"
                  alt="Umair Malik"
                  className="w-16 h-16 rounded-full border-2 border-border"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
