"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, Search, Plus, Eye, Edit, Trash2 } from "lucide-react"
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

export default function BlogsPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTag, setSelectedTag] = useState("")

  useEffect(() => {
    const savedPosts = localStorage.getItem("blog-posts")
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts))
    } else {
      // Initialize with sample posts
      const samplePosts: BlogPost[] = [
        {
          id: "1",
          title: "Building Scalable Microservices with Node.js and AWS",
          excerpt:
            "Learn how to architect and deploy microservices that can handle millions of requests using modern cloud technologies.",
          content: "Full content here...",
          author: "Umair Malik",
          publishedAt: "2024-01-15",
          readTime: 8,
          tags: ["Node.js", "AWS", "Microservices", "Architecture"],
          featured: true,
        },
        {
          id: "2",
          title: "React Performance Optimization: Advanced Techniques",
          excerpt:
            "Discover advanced strategies to optimize React applications and improve user experience with better performance.",
          content: "Full content here...",
          author: "Umair Malik",
          publishedAt: "2024-01-10",
          readTime: 6,
          tags: ["React", "Performance", "JavaScript", "Frontend"],
          featured: false,
        },
        {
          id: "3",
          title: "Cloud Security Best Practices for Modern Applications",
          excerpt:
            "Essential security practices every developer should implement when building cloud-native applications.",
          content: "Full content here...",
          author: "Umair Malik",
          publishedAt: "2024-01-05",
          readTime: 10,
          tags: ["Security", "Cloud", "DevOps", "Best Practices"],
          featured: true,
        },
      ]
      setPosts(samplePosts)
      localStorage.setItem("blog-posts", JSON.stringify(samplePosts))
    }
  }, [])

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTag = selectedTag === "" || post.tags.includes(selectedTag)
    return matchesSearch && matchesTag
  })

  const allTags = Array.from(new Set(posts.flatMap((post) => post.tags)))

  const deleteBlog = (id: string) => {
    const updatedPosts = posts.filter((post) => post.id !== id)
    setPosts(updatedPosts)
    localStorage.setItem("blog-posts", JSON.stringify(updatedPosts))
  }

  return (
    <div className="min-h-screen relative">
      <Navigation />
      
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">Technical Blog</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights, tutorials, and thoughts on software engineering, cloud architecture, and technology leadership
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Link href="/blogs/create">
              <Button className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                New Article
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            <Button 
              variant={selectedTag === "" ? "default" : "outline"} 
              size="sm" 
              onClick={() => setSelectedTag("")}
              className={selectedTag === "" ? "" : "hover:scale-105 hover:-translate-y-0.5"}
            >
              All
            </Button>
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag(tag)}
                className={selectedTag === tag ? "" : "hover:scale-105 hover:-translate-y-0.5"}
              >
                {tag}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
                          <Card
              key={post.id}
              className="group overflow-hidden border border-border/50 bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] dark:border-border/70 dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
            >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-serif text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    {post.featured && (
                      <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">Featured</Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {post.tags.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{post.tags.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime} min
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Link href={`/blogs/${post.id}`} className="flex-1">
                      <Button size="sm" className="w-full flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        Read
                      </Button>
                    </Link>
                    <Link href={`/blogs/edit/${post.id}`}>
                      <Button size="sm" variant="outline" className="flex items-center gap-1 bg-transparent">
                        <Edit className="h-3 w-3" />
                      </Button>
                    </Link>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => deleteBlog(post.id)}
                      className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Add spacing between content and footer */}
      <div className="pb-16 md:pb-20 lg:pb-24"></div>
      
      <Footer />
    </div>
  )
}
