import { Link } from "react-router-dom"
import { ArrowUpRight } from "@phosphor-icons/react"
import type { Area } from "@/content/areas"
import { getProjectsByArea } from "@/content/projects"
import { cn } from "@/lib/utils"

type AreaCardProps = {
  area: Area
  index?: number
  className?: string
}

export default function AreaCard({ area, index, className }: AreaCardProps) {
  const list = getProjectsByArea(area.id)
  const number =
    typeof index === "number" ? String(index + 1).padStart(2, "0") : null

  return (
    <Link
      to={`/projects/${area.id}`}
      className={cn(
        "group flex flex-col rounded-xl border border-border/60 bg-card p-6 transition-colors hover:border-primary/40",
        className,
      )}
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <p className="text-xs tracking-widest text-muted-foreground uppercase">
          {number ? `${number} · ` : ""}
          {list.length} {list.length === 1 ? "project" : "projects"}
        </p>
        <ArrowUpRight
          size={18}
          className="text-muted-foreground transition-colors group-hover:text-primary"
        />
      </div>

      <h3 className="text-xl font-bold tracking-tight">{area.label}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {area.short}
      </p>

      <ul className="mt-6 flex flex-wrap items-center gap-2">
        {list.map((project) => (
          <li
            key={project.slug}
            className="rounded-full bg-background px-2.5 py-1 text-xs text-muted-foreground"
          >
            {project.title}
          </li>
        ))}
      </ul>
    </Link>
  )
}
