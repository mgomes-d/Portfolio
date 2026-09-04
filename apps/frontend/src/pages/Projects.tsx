import { useMemo, useState } from "react"
import ProjectCard from "@/components/projects/ProjectCard"
import {
  projectCategories,
  getProjectsByCategory,
  type ProjectCategory,
} from "@/content/projects"
import { cn } from "@/lib/utils"

export default function Projects() {
  const [category, setCategory] = useState<"all" | ProjectCategory>("all")
  const visible = useMemo(
    () => getProjectsByCategory(category),
    [category],
  )

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-16">
      <p className="mb-3 text-sm font-medium text-primary">Work</p>
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Projects</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Curriculum work from 42 and backend systems. Filter the list, open a
        project, or skip a demo — a failing program cannot take down this page.
      </p>

      <div className="mt-10 flex flex-wrap gap-2">
        {projectCategories.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setCategory(item.id)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm transition-colors",
              category === item.id
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:text-foreground",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {visible.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </main>
  )
}
