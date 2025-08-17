import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { WorkSection } from "@/components/work-section"
import { BlogSection } from "@/components/blog-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { GalaxyBackground } from "@/components/galaxy-background"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <div className="fixed inset-0 galaxy-gradient" />
      <GalaxyBackground />

      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <WorkSection />
        <BlogSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
