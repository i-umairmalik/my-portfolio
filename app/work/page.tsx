"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GalaxyBackground } from "@/components/galaxy-background"
import { ArrowLeft, ExternalLink, Github, Globe, Palette, Server, Code, Calendar, Users, Star } from "lucide-react"
import Link from "next/link"

export default function WorkPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [techFilter, setTechFilter] = useState("all")

  const allWork = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React frontend, Node.js backend, and MongoDB database. Features include user authentication, payment processing, admin dashboard, and real-time inventory management.",
      image: "/placeholder.jpg",
      category: "Full-Stack",
      frontend: ["React", "TypeScript", "Tailwind CSS", "Redux"],
      backend: ["Node.js", "Express", "MongoDB", "JWT"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      year: "2024",
      teamSize: "Solo",
      status: "Completed",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Real-time collaborative task management application built with Next.js, Socket.io, and PostgreSQL. Includes drag-and-drop functionality, team collaboration features, and progress tracking.",
      image: "/placeholder.jpg",
      category: "Full-Stack",
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      backend: ["Node.js", "Socket.io", "PostgreSQL", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      year: "2024",
      teamSize: "3 Developers",
      status: "Completed",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Modern portfolio website built with Next.js 14, featuring dark mode, responsive design, smooth animations, and blog functionality. Showcases my work and skills effectively.",
      image: "/placeholder.jpg",
      category: "Frontend",
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      backend: [],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      year: "2024",
      teamSize: "Solo",
      status: "Completed",
    },
    {
      id: 4,
      title: "REST API Service",
      description: "High-performance REST API service built with Node.js, Express, and PostgreSQL. Features include authentication, rate limiting, caching, and comprehensive documentation.",
      image: "/placeholder.jpg",
      category: "Backend",
      frontend: [],
      backend: ["Node.js", "Express", "PostgreSQL", "Redis", "Swagger"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      year: "2023",
      teamSize: "Solo",
      status: "Completed",
    },
    {
      id: 5,
      title: "Dashboard Analytics",
      description: "Interactive dashboard for data analytics built with React and D3.js. Features include real-time charts, data filtering, and export functionality.",
      image: "/placeholder.jpg",
      category: "Frontend",
      frontend: ["React", "TypeScript", "D3.js", "Tailwind CSS", "Chart.js"],
      backend: [],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      year: "2023",
      teamSize: "2 Developers",
      status: "Completed",
    },
    {
      id: 6,
      title: "Microservices Architecture",
      description: "Scalable microservices architecture built with Docker, Kubernetes, and various backend technologies. Includes service discovery, load balancing, and monitoring.",
      image: "/placeholder.jpg",
      category: "Backend",
      frontend: [],
      backend: ["Docker", "Kubernetes", "Node.js", "Python", "MongoDB", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      year: "2023",
      teamSize: "5 Developers",
      status: "In Progress",
    },
    {
      id: 7,
      title: "Mobile-First Web App",
      description: "Progressive web application built with React and PWA features. Includes offline functionality, push notifications, and mobile-optimized UI.",
      image: "/placeholder.jpg",
      category: "Frontend",
      frontend: ["React", "PWA", "TypeScript", "Tailwind CSS", "Workbox"],
      backend: [],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      year: "2023",
      teamSize: "Solo",
      status: "Completed",
    },
    {
      id: 8,
      title: "Real-time Chat Application",
      description: "Real-time chat application with WebSocket support, built with Next.js and Socket.io. Features include private messaging, group chats, and file sharing.",
      image: "/placeholder.jpg",
      category: "Full-Stack",
      frontend: ["Next.js", "TypeScript", "Socket.io", "Tailwind CSS"],
      backend: ["Node.js", "Socket.io", "MongoDB", "AWS S3"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      year: "2023",
      teamSize: "2 Developers",
      status: "Completed",
    },
  ]

  const categories = ["all", "Frontend", "Backend", "Full-Stack"]
  const allTechnologies = Array.from(
    new Set(
      allWork.flatMap(project => [...project.frontend, ...project.backend])
    )
  ).sort()

  const filteredWork = allWork.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || project.category === categoryFilter
    const matchesTech = techFilter === "all" || 
                       project.frontend.includes(techFilter) || 
                       project.backend.includes(techFilter)
    
    return matchesSearch && matchesCategory && matchesTech
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/20 text-green-600 border-green-500/30"
      case "In Progress":
        return "bg-yellow-500/20 text-yellow-600 border-yellow-500/30"
      case "Planning":
        return "bg-blue-500/20 text-blue-600 border-blue-500/30"
      default:
        return "bg-gray-500/20 text-gray-600 border-gray-500/30"
    }
  }

  return (
    <main className="min-h-screen relative">
      <div className="fixed inset-0 galaxy-gradient" />
      <GalaxyBackground />

      <div className="relative z-10">
        <Navigation />
        
        {/* Header */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Link href="/">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
            
            <div className="text-center">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                My <span className="text-primary">Work</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A comprehensive collection of my projects showcasing frontend, backend, and full-stack development skills.
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-background/50 backdrop-blur-sm border border-border rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Search Projects</label>
                  <Input
                    placeholder="Search by title or description..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-background/50"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Category</label>
                  <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger className="bg-background/50">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category === "all" ? "All Categories" : category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Technology</label>
                  <Select value={techFilter} onValueChange={setTechFilter}>
                    <SelectTrigger className="bg-background/50">
                      <SelectValue placeholder="Select technology" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Technologies</SelectItem>
                      {allTechnologies.map((tech) => (
                        <SelectItem key={tech} value={tech}>
                          {tech}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="mt-4 text-sm text-muted-foreground">
                Showing {filteredWork.length} of {allWork.length} projects
              </div>
            </div>
          </div>
        </section>

        {/* Work Grid */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {filteredWork.length === 0 ? (
              <div className="text-center py-16">
                <h3 className="text-xl font-semibold text-foreground mb-2">No projects found</h3>
                <p className="text-muted-foreground">Try adjusting your search criteria or filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredWork.map((project) => (
                  <Card key={project.id} className="group border-0 bg-gradient-to-br from-background to-muted/50 hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 right-4 flex gap-2">
                        <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                          {project.category}
                        </Badge>
                        <Badge variant="secondary" className={getStatusColor(project.status)}>
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      {/* Project Meta */}
                      <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {project.year}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {project.teamSize}
                        </div>
                        {project.featured && (
                          <div className="flex items-center gap-1 text-yellow-600">
                            <Star className="h-4 w-4" />
                            Featured
                          </div>
                        )}
                      </div>

                      {/* Frontend Technologies */}
                      {project.frontend.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                            <Palette className="h-4 w-4" />
                            Frontend
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.frontend.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Backend Technologies */}
                      {project.backend.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                            <Server className="h-4 w-4" />
                            Backend
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.backend.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex gap-2 mt-4">
                        {project.liveUrl && (
                          <Button size="sm" variant="outline" className="flex-1 group-hover:border-primary group-hover:text-primary transition-colors">
                            <Globe className="h-4 w-4 mr-2" />
                            Live Demo
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button size="sm" variant="outline" className="flex-1 group-hover:border-primary group-hover:text-primary transition-colors">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}
