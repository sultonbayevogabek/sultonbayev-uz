"use client"

import { useState, useEffect } from "react"
import { projects } from "@/lib/data"
import { ProjectCard } from "@/components/project-card"
import { ProjectFilter } from "@/components/project-filter"

export default function PortfolioPage() {
  // Get unique project types
  const allProjectTypes = [...new Set(projects.map((project) => project.type))]

  const [activeFilter, setActiveFilter] = useState("All")
  const [filteredProjects, setFilteredProjects] = useState(projects)

  // Filter projects when activeFilter changes
  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter((project) => project.type === activeFilter))
    }
  }, [activeFilter])

  return (
    <div className="py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-muted-foreground max-w-[700px] md:text-lg">
            Explore my projects showcasing frontend development skills, responsive design, and modern web technologies.
          </p>
        </div>

        <ProjectFilter projectTypes={allProjectTypes} activeFilter={activeFilter} onFilterChange={setActiveFilter} />

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found for this filter.</p>
          </div>
        )}
      </div>
    </div>
  )
}
