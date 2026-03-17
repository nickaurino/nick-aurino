import { PROJECTS } from "@/lib/projects"
import { ProjectCard } from "./ProjectCard"
import { cn } from "@/lib/utils"

const DELAY_CLASSES = [
  "animate-delay-1",
  "animate-delay-2",
  "animate-delay-3",
  "animate-delay-4",
]

export function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {PROJECTS.map((project, i) => (
        <div
          key={project.title}
          className={cn(
            "animate-fade-in-up",
            DELAY_CLASSES[i % DELAY_CLASSES.length],
            project.featured && "md:col-span-2"
          )}
        >
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  )
}
