import { projects } from "@/lib/data"
import { ProjectCard } from "@/components/project-card"

export const metadata = {
  title: "Portfolio | Frontend Developer",
  description: "Explore my frontend development projects and case studies",
}

export default function PortfolioPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-muted-foreground max-w-[700px] md:text-lg">
            Explore my projects showcasing frontend development skills, responsive design, and modern web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}
