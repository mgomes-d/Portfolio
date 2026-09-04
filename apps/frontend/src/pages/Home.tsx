import { Link } from "react-router-dom"
import { ArrowRight } from "@phosphor-icons/react"
import { buttonVariants } from "@/components/ui/button"
import ProjectCard from "@/components/projects/ProjectCard"
import { site } from "@/content/site"
import { getFeaturedProjects } from "@/content/projects"
import { highlights, skillGroups } from "@/content/skills"

export default function Home() {
  const featured = getFeaturedProjects()

  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(45,212,191,0.10),transparent_50%)]" />
        <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-12 px-4 py-20 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)]">
          <div>
            <p className="mb-6 text-sm font-medium tracking-wide text-primary">
              {site.role} · {site.location}
            </p>
            <h1 className="max-w-3xl text-4xl leading-[1.05] font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Hi, I&apos;m {site.name}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {site.headline} {site.intro}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/projects" className={buttonVariants({ size: "lg" })}>
                View Projects
              </Link>
              <Link
                to="/contact"
                className={buttonVariants({ size: "lg", variant: "outline" })}
              >
                Contact Me
              </Link>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-border/60 bg-card p-5"
              >
                <dt className="text-xs tracking-widest text-muted-foreground uppercase">
                  {item.label}
                </dt>
                <dd className="mt-2 text-lg font-semibold tracking-tight">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-border/40">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-sm font-medium text-primary">Selected work</p>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Featured projects
              </h2>
            </div>
            <Link
              to="/projects"
              className="hidden items-center gap-1 text-sm font-medium text-primary hover:underline sm:inline-flex"
            >
              All projects
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {featured.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
                className={index === 0 ? "md:col-span-2" : undefined}
              />
            ))}
          </div>
          <Link
            to="/projects"
            className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline sm:hidden"
          >
            All projects
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="border-t border-border/40 bg-card/40">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <p className="mb-3 text-sm font-medium text-primary">Toolkit</p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            What I work with
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-xl border border-border/60 bg-background p-5"
              >
                <h3 className="font-semibold">{group.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/40">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-20 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              {site.availability} in {site.location}
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              If you need someone to own backend services — from the API to
              production — I&apos;d like to hear from you.
            </p>
          </div>
          <Link to="/contact" className={buttonVariants({ size: "lg" })}>
            Get in touch
          </Link>
        </div>
      </section>
    </main>
  )
}
