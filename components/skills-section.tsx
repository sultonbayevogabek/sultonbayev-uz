import { SkillBadge } from "@/components/skill-badge"
import { Code2, FileJson, Palette, Layers, Cpu, LayoutGrid, Boxes, Smartphone, PenTool } from "lucide-react"

export function SkillsSection() {
  const skills = [
    { name: "HTML", color: "html" as const, icon: Code2 },
    { name: "CSS", color: "css" as const, icon: Palette },
    { name: "SCSS", color: "css" as const, icon: Palette },
    { name: "JavaScript", color: "js" as const, icon: FileJson },
    { name: "Tailwind CSS", color: "tailwind" as const, icon: LayoutGrid },
    { name: "Angular", color: "angular" as const, icon: Boxes },
    { name: "Angular Material", color: "angular" as const, icon: Layers },
    { name: "TypeScript", color: "default" as const, icon: Cpu },
    { name: "Responsive Design", color: "default" as const, icon: Smartphone },
    { name: "UI/UX", color: "default" as const, icon: PenTool },
  ]

  return (
    <section className="py-12 md:py-16 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-8">
          <h2 className="text-3xl font-bold tracking-tighter">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-[700px]">
            I specialize in these technologies to create modern, responsive and user-friendly web applications.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <SkillBadge
              key={skill.name}
              name={skill.name}
              color={skill.color}
              icon={skill.icon}
              className="text-sm py-1.5 px-3"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
