"use client"

import { Badge } from "@/components/ui/badge"
import { Check, Calendar, Building2, Code2 } from "lucide-react"
import { useState } from "react"

export function ExperienceSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Royal Cyber PVT LTD",
      period: "July 2023 - Present",
      achievements: [
        "Built scalable backend services with subscription billing and RBAC systems",
        "Designed microservices with Pub/Sub for fault-tolerant architectures",
        "Automated cross-border payment remittance using AWS Serverless Framework",
        "Improved React app performance by 30% with optimized integrations",
      ],
      technologies: ["Node.js", "React", "GCP", "AWS"],
      dotColor: "bg-gradient-to-br from-emerald-400 to-emerald-600",
      borderColor: "border-l-emerald-400",
      cardGradient: "from-emerald-50 to-emerald-100 dark:from-emerald-950/30 dark:to-emerald-900/30",
      side: "left",
    },
    {
      title: "Senior Software Engineer",
      company: "Analog Mutation",
      period: "March 2023 - September 2023",
      achievements: [
        "Architected cryptocurrency exchange platform with token swapping and cross-chain bridging",
        "Designed scalable microservices architecture for high availability and performance",
        "Built Web2 infrastructure supporting Web3 operations including cloud-based microservices",
        "Enhanced system performance and team productivity through best practices implementation",
      ],
      technologies: ["Cryptocurrency", "Web3", "MongoDB"],
      dotColor: "bg-gradient-to-br from-blue-400 to-blue-600",
      borderColor: "border-l-blue-400",
      cardGradient: "from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30",
      side: "right",
    },
    {
      title: "Software Engineer",
      company: "Royal Cyber",
      period: "September 2021 - March 2023",
      achievements: [
        "Developed session recording capabilities for business intelligence insights",
        "Engineered multi-tenancy user management system with secure isolated access",
        "Built scalable microservices for reporting and intelligent alerts",
        "Designed real-time audio/video communication and screen sharing features",
      ],
      technologies: ["NodeJS", "React", "Socket.IO", "Firebase"],
      dotColor: "bg-gradient-to-br from-purple-400 to-purple-600",
      borderColor: "border-l-purple-400",
      cardGradient: "from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30",
      side: "left",
    },
    {
      title: "Software Engineer",
      company: "Bykea",
      period: "January 2018 - September 2021",
      achievements: [
        "Architected production-ready applications with RBAC and user management",
        "Developed real-time geolocation tracking and dynamic map interfaces",
        "Designed scalable microservices for ride dispatch and delivery management",
        "Maintained 99%+ uptime through critical production issue resolution",
      ],
      technologies: ["NodeJS", "React", "MongoDB", "PostgreSQL"],
      dotColor: "bg-gradient-to-br from-orange-400 to-orange-600",
      borderColor: "border-l-orange-400",
      cardGradient: "from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/30",
      side: "right",
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Code2 className="w-4 h-4" />
            Professional Journey
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mb-4">
            7+ years of professional development experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/80 to-primary/40 shadow-lg shadow-primary/20"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                  <div
                    className={`w-8 h-8 ${exp.dotColor} rounded-full border-4 border-background shadow-2xl relative`}
                  >
                    <div className={`absolute inset-0 ${exp.dotColor} rounded-full animate-ping opacity-20`}></div>
                    <div className="absolute inset-2 bg-white dark:bg-background rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-current rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className={`flex ${exp.side === "right" ? "justify-end" : "justify-start"}`}>
                  <div className={`w-full max-w-md ${exp.side === "right" ? "ml-12" : "mr-12"}`}>
                    <div
                      className={`
                        relative bg-gradient-to-br ${exp.cardGradient} backdrop-blur-sm
                        rounded-2xl border-l-4 ${exp.borderColor} p-8 
                        shadow-xl hover:shadow-2xl transition-all duration-500 ease-out
                        hover:scale-[1.02] hover:-translate-y-2
                        before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/10 before:to-transparent before:pointer-events-none
                        group cursor-pointer
                        dark:border dark:border-border/20 dark:bg-card/50
                      `}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/20 rounded-full blur-sm group-hover:bg-primary/40 transition-colors duration-300"></div>
                      <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-secondary/30 rounded-full blur-sm group-hover:bg-secondary/50 transition-colors duration-300"></div>

                      {/* Header with enhanced styling */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 text-sm text-primary font-semibold mb-3 bg-primary/10 px-4 py-2 rounded-full inline-flex backdrop-blur-sm">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <h3 className="text-xl font-bold text-card-foreground dark:text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-card-foreground/80 dark:text-card-foreground/80 font-medium">
                          <Building2 className="w-4 h-4" />
                          {exp.company}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="
                              text-xs font-medium px-4 py-2 
                              bg-secondary/80 hover:bg-secondary 
                              border border-secondary/20 hover:border-secondary/40
                              transition-all duration-300 hover:scale-105 hover:shadow-md
                              backdrop-blur-sm
                            "
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="space-y-4">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div
                            key={achIndex}
                            className={`
                              flex items-start gap-4 group/item
                              transition-all duration-300 ease-out
                              ${hoveredCard === index ? "translate-x-1" : ""}
                            `}
                            style={{
                              transitionDelay: hoveredCard === index ? `${achIndex * 100}ms` : "0ms",
                            }}
                          >
                            <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mt-0.5 shadow-lg group-hover/item:shadow-emerald-200 group-hover/item:scale-110 transition-all duration-300">
                              <Check className="w-3.5 h-3.5 text-white" />
                            </div>
                            <span className="text-sm text-card-foreground/90 dark:text-card-foreground/90 leading-relaxed group-hover/item:text-card-foreground dark:group-hover/item:text-card-foreground transition-colors duration-300">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000 ease-out pointer-events-none"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .bg-grid-pattern {
            background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0);
            background-size: 20px 20px;
          }
          
          @media (max-width: 768px) {
            .max-w-6xl .relative .absolute.left-1\\/2 {
              left: 2rem;
              transform: translateX(0);
            }
            .max-w-6xl .flex {
              justify-content: flex-start !important;
            }
            .max-w-6xl .w-full.max-w-md {
              margin-left: 4rem !important;
              margin-right: 0 !important;
              max-width: calc(100% - 5rem) !important;
            }
          }
        `}</style>
      </div>
    </section>
  )
}
