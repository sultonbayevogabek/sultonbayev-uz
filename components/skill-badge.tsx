import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface SkillBadgeProps extends HTMLAttributes<HTMLDivElement> {
  name: string
  color?: "default" | "html" | "css" | "js" | "tailwind" | "angular"
  icon?: LucideIcon
}

export function SkillBadge({ name, color = "default", icon: Icon, className, ...props }: SkillBadgeProps) {
  const colorClasses = {
    default: "bg-primary/10 text-primary dark:bg-primary/20",
    html: "bg-orange-500/10 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400",
    css: "bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400",
    js: "bg-yellow-500/10 text-yellow-600 dark:bg-yellow-500/20 dark:text-yellow-400",
    tailwind: "bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400",
    angular: "bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-400",
  }

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium gap-1.5",
        colorClasses[color],
        className,
      )}
      {...props}
    >
      {Icon && <Icon className="h-3.5 w-3.5" />}
      {name}
    </div>
  )
}
