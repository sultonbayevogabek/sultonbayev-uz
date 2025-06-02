import { Briefcase, Building, Calendar } from 'lucide-react';
import { SkillBadge } from "@/components/skill-badge"
import { formatDate } from "@/lib/utils"
import { Code2, FileJson, Palette, Layers, Cpu, LayoutGrid, Boxes } from "lucide-react"

interface ExperienceItemProps {
  title: string
  company: string
  location: string
  startDate: string
  endDate?: string
  description: string[]
  technologies?: string[]
  isLast?: boolean
}

export function ExperienceItem({
  title,
  company,
  location,
  startDate,
  endDate,
  description,
  technologies,
  isLast = false,
}: ExperienceItemProps) {
  // Map technology names to icons
  const getIconForTech = (tech: string) => {
    const techLower = tech.toLowerCase()
    if (techLower.includes("html")) return Code2
    if (techLower.includes("css") || techLower.includes("scss")) return Palette
    if (techLower.includes("javascript")) return FileJson
    if (techLower.includes("typescript")) return Cpu
    if (techLower.includes("tailwind")) return LayoutGrid
    if (techLower.includes("angular")) return Boxes
    if (techLower.includes("material")) return Layers
    return undefined
  }

  return (
    <div className="relative pl-8 md:pl-0">
      {/* Timeline connector */}
      <div className="absolute left-4 top-6 bottom-0 w-px bg-border md:left-1/2 md:-ml-0.5"></div>

      <div className="md:grid md:grid-cols-2 md:gap-8 items-start">
        {/* Left side - Company and date */}
        <div className="mb-4 md:mb-0 md:text-right">
          <div className="flex items-center md:justify-end">
            <div className="absolute left-0 mt-1.5 h-8 w-8 rounded-full border bg-background flex items-center justify-center md:relative md:left-auto md:mt-0 md:ml-4">
              <Building className="h-4 w-4 text-primary" />
            </div>
            <h3 className="text-lg font-semibold pl-1.5">{company}</h3>
          </div>
          <p className="text-muted-foreground">{location}</p>
          <p className="text-sm text-muted-foreground">
            {startDate} - {endDate ? endDate : "hozirgacha"}
          </p>
        </div>

        {/* Right side - Role and description */}
        <div>
          <h4 className="text-base font-medium">{title}</h4>
          <ul className="mt-2 space-y-2 text-sm text-muted-foreground list-disc pl-4">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          {technologies && technologies.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <SkillBadge
                  key={tech}
                  name={tech}
                  icon={getIconForTech(tech)}
                  color={
                    tech.toLowerCase().includes("html")
                      ? "html"
                      : tech.toLowerCase().includes("css") || tech.toLowerCase().includes("scss")
                        ? "css"
                        : tech.toLowerCase().includes("javascript")
                          ? "js"
                          : tech.toLowerCase().includes("tailwind")
                            ? "tailwind"
                            : tech.toLowerCase().includes("angular")
                              ? "angular"
                              : "default"
                  }
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
