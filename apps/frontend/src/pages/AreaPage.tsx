import { Link, useParams } from "react-router-dom"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "@phosphor-icons/react"
import { areas, getArea } from "@/content/areas"
import {
  getProjectsByArea,
  hasDetailPage,
  type Project,
} from "@/content/projects"
import NotFound from "@/pages/NotFound"
import ProjectDetail from "@/pages/ProjectDetail"

export default function AreaPage() {
  const { area: areaId } = useParams()
  const area = areaId ? getArea(areaId) : undefined

  // Older links used /projects/:slug for individual projects.
  if (!area) {
    return areaId ? <ProjectDetail slug={areaId} /> : <NotFound />
  }

  const list = getProjectsByArea(area.id)
  const position = areas.findIndex((item) => item.id === area.id)
  const next = areas[(position + 1) % areas.length]

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-16">
      <Link
        to="/projects"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft size={16} />
        All areas
      </Link>

      <p className="mt-10 text-sm text-primary">
        {String(position + 1).padStart(2, "0")} · {list.length}{" "}
        {list.length === 1 ? "project" : "projects"}
      </p>
      <h1 className="mt-3 text-4xl md:text-5xl">
        {area.label}
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
        {area.intro}
      </p>

      <nav
        aria-label="Projects in this area"
        className="mt-8 flex flex-wrap gap-2"
      >
        {list.map((project) => (
          <a
            key={project.slug}
            href={`#${project.slug}`}
            className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            {project.title}
          </a>
        ))}
      </nav>

      <div className="mt-12 space-y-12">
        {list.map((project) => (
          <ProjectEntry
            key={project.slug}
            project={project}
            areaId={area.id}
          />
        ))}
      </div>

      <div className="mt-16 border-t border-border/60 pt-8">
        <p className="text-sm text-primary">
          Next area
        </p>
        <Link
          to={`/projects/${next.id}`}
          className="mt-2 inline-flex items-center gap-2 font-serif text-xl hover:text-primary"
        >
          {next.label}
          <ArrowRight size={18} />
        </Link>
      </div>
    </main>
  )
}

function ProjectEntry({
  project,
  areaId,
}: {
  project: Project
  areaId: string
}) {
  const primary = getArea(project.areas[0])
  const secondary = project.areas[0] !== areaId && primary

  return (
    <article id={project.slug} className="scroll-mt-24">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h2 className="text-2xl">{project.title}</h2>
        <p className="text-sm text-muted-foreground">
          {project.year}
          {secondary ? (
            <>
              {" · also in "}
              <Link
                to={`/projects/${primary.id}#${project.slug}`}
                className="hover:text-foreground"
              >
                {primary.label}
              </Link>
            </>
          ) : null}
        </p>
      </div>
      <p className="mt-2 text-base text-muted-foreground">{project.summary}</p>

      <p className="mt-4 text-sm text-muted-foreground">
        {project.tags.join(" · ")}
      </p>

      <p className="mt-5 text-base leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      {project.stages && project.stages.length > 0 ? (
        <ol className="mt-5 divide-y divide-border border-y border-border">
          {project.stages.map((stage, index) => (
            <li key={stage.title} className="flex gap-4 px-5 py-4">
              <span className="w-6 shrink-0 text-xs text-muted-foreground tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-semibold tracking-tight">{stage.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {stage.summary}
                </p>
              </div>
            </li>
          ))}
        </ol>
      ) : null}

      {hasDetailPage(project) ? (
        <div className="mt-5 flex flex-wrap gap-4">
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              Repository
              <ArrowUpRight size={14} />
            </a>
          ) : null}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              Live site
              <ArrowUpRight size={14} />
            </a>
          ) : null}
          {project.embedUrl ? (
            <Link
              to={`/projects/${areaId}/${project.slug}`}
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              Demo
              <ArrowUpRight size={14} />
            </Link>
          ) : null}
        </div>
      ) : null}
    </article>
  )
}
