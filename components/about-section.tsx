import { Card, CardContent } from "@/components/ui/card"
import { Cloud, Code, Users, Settings, MapPin, Mail, Phone, Award, Zap, Database } from "lucide-react"

export function AboutSection() {
  const expertiseAreas = [
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud-Native & Serverless",
      description: "AWS, Azure, GCP with microservices architecture",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Frontend Engineering",
      description: "React, Next.js, TypeScript with modern UI/UX",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Full-Stack Development",
      description: "Node.js, Python with scalable backend systems",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "System Design & CI/CD",
      description: "Microservices, automated testing, performance monitoring",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Technical Leadership",
      description: "Team mentoring, cross-functional collaboration",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Performance Optimization",
      description: "40% improvement in load times and user engagement",
      gradient: "from-yellow-500 to-orange-500",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about building scalable solutions and leading high-performing teams
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              Performance-driven professional with over seven years of experience in full-stack development, solution
              architecture, and team leadership across startups, services and enterprise-level organizations.
            </p>
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              Proven success in architecting and delivering high-performance full-stack applications across cloud
              technologies, security best practices, and agile methodologies. Skilled in designing and implementing
              scalable solutions for cloud security, user collaboration, payment systems, and enterprise dashboards.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Strong command on full-stack development with exposure to programming, debugging, design-thinking, and
              enterprise architecture.
            </p>

            <Card className="mt-8 overflow-hidden border-0 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 text-primary-foreground">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-card-foreground">Location & Contact</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-card/50 hover:bg-card/70 transition-colors">
                    <Mail className="h-4 w-4 text-blue-500" />
                    <span className="text-card-foreground">umairmalikavan@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-card/50 hover:bg-card/70 transition-colors">
                    <Phone className="h-4 w-4 text-green-500" />
                    <span className="text-card-foreground">+92 305 304 2326</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-card/50 hover:bg-card/70 transition-colors">
                    <MapPin className="h-4 w-4 text-purple-500" />
                    <span className="text-card-foreground">Karachi, Pakistan</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 text-primary-foreground">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground">Areas of Expertise</h3>
            </div>

            <div className="grid gap-4">
              {expertiseAreas.map((area, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden border-0 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br ${area.gradient} text-primary-foreground shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        {area.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-card-foreground mb-1 group-hover:text-primary transition-colors">
                          {area.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
