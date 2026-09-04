import { Link, useParams } from "react-router-dom"
import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react"
import { ProjectErrorBoundary } from "@/components/ProjectErrorBoundary"
import { getArea } from "@/content/areas"
import { getProjectBySlug } from "@/content/projects"
import NotFound from "@/pages/NotFound"

type ProjectDetailProps = {
  /** Slug override, used when the page is rendered from a legacy route. */
  slug?: string
}

export default function ProjectDetail({ slug }: ProjectDetailProps) {
  return (
    <ProjectErrorBoundary>
      <ProjectView slugOverride={slug} />
    </ProjectErrorBoundary>
  )
}

function ProjectView({ slugOverride }: { slugOverride?: string }) {
  const params = useParams()
  const slug = slugOverride ?? params.slug
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return <NotFound />
  }

  const area = getArea(project.areas[0])
  const backTo = area ? `/projects/${area.id}#${project.slug}` : "/projects"

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-16">
      <Link
        to={backTo}
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft size={16} />
        {area ? area.label : "All projects"}
      </Link>

      <p className="mt-10 text-sm font-medium text-primary">
        {project.areas
          .map((id) => getArea(id)?.label)
          .filter(Boolean)
          .join(" · ")}{" "}
        · {project.year}
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
        {project.title}
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">{project.summary}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-card px-2.5 py-1 text-xs text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mt-10 text-base leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      {project.stages && project.stages.length > 0 ? (
        <section className="mt-10">
          <h2 className="text-sm font-medium tracking-widest text-primary uppercase">
            Stages
          </h2>
          <ol className="mt-4 divide-y divide-border/60 rounded-xl border border-border/60 bg-card">
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
        </section>
      ) : null}

      <div className="mt-8 flex flex-wrap gap-4">
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
      </div>

      {project.embedUrl ? (
        <section className="mt-12 rounded-xl border border-dashed border-border bg-card p-6">
          <h2 className="font-semibold tracking-tight">Demo</h2>
          <iframe
            title={`${project.title} demo`}
            src={project.embedUrl}
            sandbox="allow-scripts allow-same-origin"
            className="mt-6 min-h-[480px] w-full rounded-lg border border-border bg-background"
          />
        </section>
      ) : null}
    </main>
  )
}
