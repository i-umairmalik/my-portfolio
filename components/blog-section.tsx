"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react"
import Link from "next/link"

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

export function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([])

  const scrollToBlog = () => {
    const blogSection = document.getElementById('blog')
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const savedPosts = localStorage.getItem("blog-posts")
    if (savedPosts) {
      const allPosts: BlogPost[] = JSON.parse(savedPosts)
      // Show featured posts first, then latest posts, limit to 3
      const featuredPosts = allPosts.filter((post) => post.featured).slice(0, 2)
      const otherPosts = allPosts.filter((post) => !post.featured).slice(0, 3 - featuredPosts.length)
      setPosts([...featuredPosts, ...otherPosts])
    } else {
      // Initialize with sample posts if none exist
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

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 text-primary-foreground">
              <BookOpen className="h-5 w-5" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">Latest Articles</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights and tutorials on software engineering, cloud architecture, and technology leadership
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="group overflow-hidden border-0 bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-serif text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  {post.featured && (
                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-primary-foreground text-xs">
                      Featured
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-1">
                  {post.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {post.tags.length > 2 && (
                    <Badge variant="secondary" className="text-xs">
                      +{post.tags.length - 2}
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-3">
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

                <Link href={`/blogs/${post.id}`}>
                  <Button size="sm" className="w-full flex items-center gap-2 group-hover:bg-primary/90">
                    Read Article
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-4">
          <Button 
            variant="default" 
            size="lg" 
            className="flex items-center gap-4 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            onClick={scrollToBlog}
          >
            Explore More Blogs
            <ArrowRight className="h-4 w-4" />
          </Button>
          
          <div className="text-sm text-muted-foreground">
            or
          </div>
          
          <Link href="/blogs">
            <Button variant="outline" size="lg" className="flex items-center gap-2 mx-auto bg-transparent">
              View All Articles
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
