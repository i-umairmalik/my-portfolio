"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, Github, Globe, Database, Code, Palette, Server } from "lucide-react"
import { useEffect, useRef } from "react"
import Link from "next/link"

export function WorkSection() {
  const workRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Ensure the component is mounted
    if (!workRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    const workCards = workRef.current.querySelectorAll(".work-card")
    
    if (workCards.length > 0) {
      workCards.forEach((card) => {
        observer.observe(card)
      })
    }

    // Fallback: ensure all cards are visible after 1.5 seconds
    const fallbackTimer = setTimeout(() => {
      if (workRef.current) {
        const workCards = workRef.current.querySelectorAll(".work-card")
        workCards?.forEach((card) => {
          if (!card.classList.contains("animate-in")) {
            card.classList.add("animate-in")
          }
        })
      }
    }, 1500)

    return () => {
      observer.disconnect()
      clearTimeout(fallbackTimer)
    }
  }, [])

  const featuredWork = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React frontend, Node.js backend, and MongoDB database. Features include user authentication, payment processing, and admin dashboard.",
      image: "/placeholder.jpg",
      category: "Full-Stack",
      frontend: ["React", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "Express", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Task Management App",
      description: "Real-time collaborative task management application built with Next.js, Socket.io, and PostgreSQL. Includes drag-and-drop functionality and team collaboration features.",
      image: "/placeholder.jpg",
      category: "Full-Stack",
      frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "Socket.io", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio website built with Next.js 14, featuring dark mode, responsive design, and smooth animations. Showcases my work and skills effectively.",
      image: "/placeholder.jpg",
      category: "Frontend",
      frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
      backend: [],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
  ]

  const workCategories = [
    {
      title: "Frontend Development",
      icon: <Palette className="h-8 w-8" />,
      description: "Modern, responsive web applications with React, Next.js, and TypeScript",
      count: "15+ Projects",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Backend Development",
      icon: <Server className="h-8 w-8" />,
      description: "Scalable APIs and server-side applications with Node.js and Python",
      count: "12+ Projects",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Full-Stack Solutions",
      icon: <Code className="h-8 w-8" />,
      description: "End-to-end applications from database design to user interface",
      count: "8+ Projects",
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section
      ref={workRef}
      id="work"
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
    >

      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            My <span className="text-primary">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore my portfolio of frontend, backend, and full-stack projects. Each project demonstrates my expertise in modern web technologies and problem-solving skills.
          </p>
        </div>

        {/* Work Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {workCategories.map((category, index) => (
            <Card key={index} className="work-card border-0 bg-gradient-to-br from-background to-muted/50 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 group cursor-pointer">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4 group-hover:text-foreground transition-colors duration-300">{category.description}</p>
                <Badge variant="secondary" className="text-sm font-medium group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {category.count}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Work */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredWork.map((project, index) => (
              <Card key={index} className="work-card group border-0 bg-gradient-to-br from-background to-muted/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 overflow-hidden cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      {project.category}
                    </Badge>
                  </div>
                  {/* Hover overlay with quick actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <Button size="sm" className="bg-primary/90 hover:bg-primary text-white backdrop-blur-sm">
                          <Globe className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button size="sm" variant="outline" className="bg-white/90 hover:bg-white text-black backdrop-blur-sm border-white">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Frontend Technologies */}
                  {project.frontend.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                        <Palette className="h-4 w-4 group-hover:text-primary transition-colors duration-300" />
                        Frontend
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.frontend.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs group-hover:border-primary group-hover:text-primary transition-all duration-300">
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
                        <Server className="h-4 w-4 group-hover:text-primary transition-colors duration-300" />
                        Backend
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.backend.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs group-hover:border-primary group-hover:text-primary transition-all duration-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-4">
                    {project.liveUrl && (
                      <Button size="sm" variant="outline" className="flex-1 group-hover:border-primary group-hover:text-primary group-hover:bg-primary/5 transition-all duration-300 hover:scale-105">
                        <Globe className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button size="sm" variant="outline" className="flex-1 group-hover:border-primary group-hover:text-primary group-hover:bg-primary/5 transition-all duration-300 hover:scale-105">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* View All Work Button */}
        <div className="text-center">
          <Link href="/work">
            <Button size="lg" className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              View All My Work
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
