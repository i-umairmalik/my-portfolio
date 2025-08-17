import { Github, Linkedin, Mail, Phone, MapPin, Heart, ExternalLink } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/i-umairmalik",
      icon: <Github className="h-5 w-5" />,
      color: "hover:text-gray-900 dark:hover:text-gray-100",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/malikumair96",
      icon: <Linkedin className="h-5 w-5" />,
      color: "hover:text-blue-600",
    },
    {
      name: "Email",
      href: "mailto:umairmalikavan@gmail.com",
      icon: <Mail className="h-5 w-5" />,
      color: "hover:text-red-500",
    },
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
    { name: "Blog", href: "/blogs" },
  ]

  const services = [
    "Full-Stack Development",
    "Cloud Architecture",
    "Technical Leadership",
    "System Design",
    "Performance Optimization",
    "Team Mentoring",
  ]

  return (
    <footer className="relative bg-gradient-to-br from-muted/50 to-muted/30 border-t border-border/50">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/software-engineer-headshot.png"
                alt="Umair Malik"
                className="w-12 h-12 rounded-full border-2 border-primary/20"
              />
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground">Umair Malik</h3>
                <p className="text-sm text-muted-foreground">Senior Software Engineer</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Passionate about building scalable solutions and leading high-performing teams. 7+ years of experience in
              full-stack development, cloud architecture, and technical leadership.
            </p>

            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                Karachi, Pakistan
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                +92 305 304 2326
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                umairmalikavan@gmail.com
              </div>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-card/50 text-muted-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg ${link.color}`}
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    {link.name}
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-muted-foreground text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} Umair Malik. Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>using Next.js & TailwindCSS</span>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="/blogs" className="hover:text-primary transition-colors">
                Blog
              </Link>
              <Link href="#contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
              <a
                href="/umair-malik-cv.pdf"
                download="Umair_Malik_CV.pdf"
                className="hover:text-primary transition-colors"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
