"use client"

import { useState } from "react"
import { PROJECTS, type Project } from "@/lib/projects"
import { ProjectCard } from "./ProjectCard"
import { ProjectModal } from "./ProjectModal"
import { cn } from "@/lib/utils"

const DELAY_CLASSES = [
  "animate-delay-1",
  "animate-delay-2",
  "animate-delay-3",
  "animate-delay-4",
]

export function ProjectsGrid() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <>
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
            <ProjectCard project={project} onClick={() => setSelected(project)} />
          </div>
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  )
}
