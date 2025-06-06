"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface ProjectFilterProps {
  projectTypes: string[]
  activeFilter: string
  onFilterChange: (filter: string) => void
}

export function ProjectFilter({ projectTypes, activeFilter, onFilterChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      <Button
        variant={activeFilter === "Barchasi" ? "default" : "outline"}
        size="sm"
        onClick={() => onFilterChange("Barchasi")}
        className={cn("rounded-full", activeFilter === "Barchasi" ? "gradient-bg" : "")}
      >
        Barchasi
      </Button>

      {projectTypes.map((type) => (
        <Button
          key={type}
          variant={activeFilter === type ? "default" : "outline"}
          size="sm"
          onClick={() => onFilterChange(type)}
          className={cn("rounded-full", activeFilter === type ? "gradient-bg" : "")}
        >
          {type}
        </Button>
      ))}
    </div>
  )
}
