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
        "group flex flex-col border-t border-border py-6 transition-colors hover:border-primary",
        className,
      )}
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          {number ? `${number} · ` : ""}
          {list.length} {list.length === 1 ? "project" : "projects"}
        </p>
        <ArrowUpRight
          size={18}
          className="text-muted-foreground transition-colors group-hover:text-primary"
        />
      </div>

      <h3 className="text-2xl">{area.label}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {area.short}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
        {list.map((project) => project.title).join(" · ")}
      </p>
    </Link>
  )
}
