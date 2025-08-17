import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cloud, Server, Palette, Database, Wrench, Building, Star, TrendingUp } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: <Cloud className="h-6 w-6" />,
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        { name: "AWS", level: 95, color: "bg-orange-500" },
        { name: "GCP", level: 90, color: "bg-blue-500" },
        { name: "Azure", level: 85, color: "bg-cyan-500" },
        { name: "Serverless", level: 92, color: "bg-purple-500" },
      ],
      technologies: ["S3, Lambda, CloudWatch", "Cloud Run, Pub/Sub", "Functions App", "Step Functions"],
    },
    {
      title: "Backend Technologies",
      icon: <Server className="h-6 w-6" />,
      gradient: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 95, color: "bg-green-500" },
        { name: "Python", level: 88, color: "bg-yellow-500" },
        { name: "TypeScript", level: 92, color: "bg-blue-600" },
        { name: "GraphQL", level: 85, color: "bg-pink-500" },
      ],
      technologies: ["Express.js, Fastify.js", "FastAPI, Django", "NestJS, REST API", "Microservices"],
    },
    {
      title: "Frontend Technologies",
      icon: <Palette className="h-6 w-6" />,
      gradient: "from-purple-500 to-pink-500",
      skills: [
        { name: "React.js", level: 95, color: "bg-blue-400" },
        { name: "Next.js", level: 92, color: "bg-gray-800" },
        { name: "TypeScript", level: 90, color: "bg-blue-600" },
        { name: "TailwindCSS", level: 88, color: "bg-teal-500" },
      ],
      technologies: ["Redux, Tanstack Query", "SSR, SSG, ISR", "Material UI, Ant Design", "SCSS, CSS3"],
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      gradient: "from-orange-500 to-red-500",
      skills: [
        { name: "MongoDB", level: 92, color: "bg-green-600" },
        { name: "PostgreSQL", level: 88, color: "bg-blue-700" },
        { name: "Redis", level: 85, color: "bg-red-500" },
        { name: "DynamoDB", level: 82, color: "bg-orange-600" },
      ],
      technologies: ["Mongoose ODM", "TypeORM, Prisma", "Caching, Sessions", "NoSQL, Serverless"],
    },
    {
      title: "Development Tools",
      icon: <Wrench className="h-6 w-6" />,
      gradient: "from-indigo-500 to-purple-500",
      skills: [
        { name: "Docker", level: 88, color: "bg-blue-500" },
        { name: "Kubernetes", level: 82, color: "bg-blue-600" },
        { name: "CI/CD", level: 90, color: "bg-green-500" },
        { name: "Git", level: 95, color: "bg-orange-500" },
      ],
      technologies: ["VS Code, Cursor AI", "Container Orchestration", "GitHub Actions, Jenkins", "Version Control"],
    },
    {
      title: "Architecture & Leadership",
      icon: <Building className="h-6 w-6" />,
      gradient: "from-yellow-500 to-orange-500",
      skills: [
        { name: "System Design", level: 92, color: "bg-purple-600" },
        { name: "Microservices", level: 88, color: "bg-blue-500" },
        { name: "Team Leadership", level: 90, color: "bg-green-600" },
        { name: "Performance", level: 85, color: "bg-red-500" },
      ],
      technologies: ["Scalable Architecture", "Event-Driven Design", "Agile/Scrum", "Optimization"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across the full technology stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-0 bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              <CardHeader className="relative z-10 pb-4">
                <CardTitle className="flex items-center gap-3 text-card-foreground">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} text-primary-foreground shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {category.icon}
                  </div>
                  <span className="font-serif text-lg">{category.title}</span>
                </CardTitle>
              </CardHeader>

              <CardContent className="relative z-10 space-y-6">
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-card-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm font-medium text-muted-foreground">Technologies</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs bg-muted/50 hover:bg-muted transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-xs text-muted-foreground">
                    {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}%
                    Average Proficiency
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
