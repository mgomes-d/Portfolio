import { Link, useParams } from "react-router-dom"
import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react"
import { ProjectErrorBoundary } from "@/components/ProjectErrorBoundary"
import { getProjectBySlug } from "@/content/projects"
import NotFound from "@/pages/NotFound"

export default function ProjectDetail() {
  return (
    <ProjectErrorBoundary>
      <ProjectView />
    </ProjectErrorBoundary>
  )
}

function ProjectView() {
  const { slug } = useParams()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return <NotFound />
  }

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-16">
      <Link
        to="/projects"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft size={16} />
        All projects
      </Link>

      <p className="mt-10 text-sm font-medium text-primary">
        {project.category === "42" ? "42" : "Backend"} · {project.year}
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
        {project.runnable ? (
          <span className="rounded-full bg-primary/15 px-2.5 py-1 text-xs text-primary">
            Runnable
          </span>
        ) : null}
        <span className="rounded-full bg-card px-2.5 py-1 text-xs text-muted-foreground">
          {project.status === "shipped" ? "Shipped" : "In progress"}
        </span>
      </div>

      <p className="mt-10 text-base leading-relaxed text-muted-foreground">
        {project.description}
      </p>

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

      {project.runnable ? (
        <section className="mt-12 rounded-xl border border-dashed border-border bg-card p-6">
          <h2 className="font-semibold tracking-tight">Isolated demo</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            This program is meant to run on its own service. If the demo is
            down, this page still works — and a crash here cannot take down the
            rest of the site.
          </p>
          {project.embedUrl ? (
            <iframe
              title={`${project.title} demo`}
              src={project.embedUrl}
              sandbox="allow-scripts allow-same-origin"
              className="mt-6 min-h-[480px] w-full rounded-lg border border-border bg-background"
            />
          ) : (
            <p className="mt-4 text-sm text-muted-foreground">
              A live demo is not mounted yet. When it is, it will load here
              without touching the rest of the site.
            </p>
          )}
        </section>
      ) : null}
    </main>
  )
}
