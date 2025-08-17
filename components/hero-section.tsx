"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Award, Users, Code, Zap } from "lucide-react"
import { useEffect, useRef } from "react"

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)
  const accomplishmentsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
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

    const accomplishmentCards = accomplishmentsRef.current?.querySelectorAll(".accomplishment-card")
    accomplishmentCards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToBlog = () => {
    const element = document.getElementById("blog")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const downloadCV = () => {
    const link = document.createElement("a")
    link.href = "/umair-malik-cv.pdf"
    link.download = "Umair_Malik_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const accomplishments = [
    {
      icon: <Award className="h-6 w-6" />,
      number: "7+",
      label: "Years Experience",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: <Code className="h-6 w-6" />,
      number: "20+",
      label: "Projects Delivered",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Users className="h-6 w-6" />,
      number: "15+",
      label: "Teams Led",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      number: "40%",
      label: "Performance Boost",
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section
      ref={heroRef}
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <img
            src="/profile.jpg"
            alt="Umair Malik"
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto mb-6 border-4 border-primary/20 shadow-2xl"
          />
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          Hi, I'm <span className="text-primary">Umair Malik</span>
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Senior Software Engineer with 7+ years of experience in full-stack development, cloud architecture, and
          technical leadership
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="px-8 py-3 text-lg">
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-3 text-lg bg-transparent" onClick={downloadCV}>
            Download CV
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-3 text-lg bg-transparent border-primary/50 text-primary hover:bg-primary/10" 
            onClick={scrollToBlog}
          >
            Read My Blog
          </Button>
        </div>

        <div ref={accomplishmentsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          {accomplishments.map((item, index) => (
            <div
              key={index}
              className="accomplishment-card group relative overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 p-6 shadow-lg hover:scale-105 transition-all duration-500 hover:shadow-2xl opacity-0 translate-y-8 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
              style={{
                transitionDelay: `${index * 150}ms`,
                animation: "float 6s ease-in-out infinite",
                animationDelay: `${index * 0.5}s`,
              }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />
              <div className="relative z-10">
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} text-primary-foreground mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {item.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1 group-hover:scale-110 transition-transform duration-300 animate-pulse-slow">
                  {item.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">
                  {item.label}
                </div>
              </div>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-out" />
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/i-umairmalik"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/malikumair96/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:umairmalikavan@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown className="h-6 w-6 mx-auto" />
        </button>
      </div>
    </section>
  )
}
