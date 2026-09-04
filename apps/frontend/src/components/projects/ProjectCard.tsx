import { Link } from "react-router-dom"
import { ArrowUpRight } from "@phosphor-icons/react"
import type { Project } from "@/content/projects"
import { cn } from "@/lib/utils"

type ProjectCardProps = {
  project: Project
  index?: number
  className?: string
}

export default function ProjectCard({
  project,
  index,
  className,
}: ProjectCardProps) {
  const number =
    typeof index === "number" ? String(index + 1).padStart(2, "0") : null

  return (
    <Link
      to={`/projects/${project.slug}`}
      className={cn(
        "group flex flex-col rounded-xl border border-border/60 bg-card p-6 transition-colors hover:border-primary/40",
        className,
      )}
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <p className="text-xs tracking-widest text-muted-foreground uppercase">
          {number ?? project.category}
        </p>
        <ArrowUpRight
          size={18}
          className="text-muted-foreground transition-colors group-hover:text-primary"
        />
      </div>

      <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.summary}
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-background px-2.5 py-1 text-xs text-muted-foreground"
          >
            {tag}
          </span>
        ))}
        {project.runnable ? (
          <span className="rounded-full bg-primary/15 px-2.5 py-1 text-xs text-primary">
            Runnable
          </span>
        ) : null}
      </div>
    </Link>
  )
}
