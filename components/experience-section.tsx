import { ExperienceItem } from "@/components/experience-item"
import { workExperience } from "@/lib/data"

export function ExperienceSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-10">
          <h2 className="text-3xl font-bold tracking-tighter">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-[700px]">
            My professional journey and the companies I've had the pleasure to work with.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {workExperience.map((experience, index) => (
              <ExperienceItem
                key={index}
                title={experience.title}
                company={experience.company}
                location={experience.location}
                startDate={experience.startDate}
                endDate={experience.endDate}
                description={experience.description}
                technologies={experience.technologies}
                isLast={index === workExperience.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
