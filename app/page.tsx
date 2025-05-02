import { HeroSection } from "@/components/hero-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"
import { ProjectCard } from "@/components/project-card"
import { BlogCard } from "@/components/blog-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { projects, blogPosts } from "@/lib/data"

export default function Home() {
  // Get the latest 3 projects
  const featuredProjects = projects.slice(0, 3)
  // Get the latest 2 blog posts
  const latestPosts = blogPosts.slice(0, 2)

  return (
    <div>
      <HeroSection />

      <SkillsSection />

      <ExperienceSection />

      <EducationSection />

      {/* Featured Projects Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-8">
            <h2 className="text-3xl font-bold tracking-tighter">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-[700px]">
              Check out some of my recent work. These projects showcase my skills and expertise in frontend development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button asChild variant="outline">
              <Link href="/portfolio">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-8">
            <h2 className="text-3xl font-bold tracking-tighter">
              Latest <span className="gradient-text">Blog Posts</span>
            </h2>
            <p className="text-muted-foreground max-w-[700px]">
              I write about frontend development, design trends, and my experiences in the tech industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {latestPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button asChild variant="outline">
              <Link href="/blog">
                Read All Posts <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="rounded-lg p-8 md:p-12 gradient-bg text-white">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">Let's Work Together</h2>
              <p className="max-w-[700px] text-white/90">
                I'm currently available for freelance projects and full-time positions. If you're interested in working
                together, get in touch!
              </p>
              <Button asChild variant="secondary" size="lg">
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
