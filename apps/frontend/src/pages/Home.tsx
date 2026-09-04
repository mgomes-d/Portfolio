import { Link } from "react-router-dom"
import { ArrowRight } from "@phosphor-icons/react"
import { buttonVariants } from "@/components/ui/button"
import { areas } from "@/content/areas"
import { certifications } from "@/content/certifications"
import { experience } from "@/content/experience"
import { getProjectsByArea } from "@/content/projects"
import { site } from "@/content/site"
import { skillGroups } from "@/content/skills"

export default function Home() {
  const credentials = certifications

  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_srgb,var(--primary)_14%,transparent),transparent_50%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <p className="mb-6 text-sm font-medium tracking-wide text-primary">
            {site.role} · {site.location}
          </p>
          <h1 className="max-w-3xl text-4xl leading-[1.05] font-bold tracking-tight sm:text-6xl lg:text-7xl">
            {site.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {site.headline} {site.intro}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/projects" className={buttonVariants({ size: "lg" })}>
              View projects
            </Link>
            <Link
              to="/about"
              className={buttonVariants({ size: "lg", variant: "outline" })}
            >
              About
            </Link>
          </div>

          <div className="mt-12">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              Certifications
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {credentials.map((item) => (
                <li key={item.id}>
                  <Link
                    to="/about#certifications"
                    className="inline-flex rounded-full border border-border/60 bg-card px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                      {item.status
                        ? `${item.homeLabel} · pending`
                        : item.homeLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              Experience
            </p>
            <ul className="mt-3 space-y-2">
              {experience.map((item) => (
                <li key={item.id}>
                  <Link
                    to="/about#experience"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.company}
                    <span className="text-border"> · </span>
                    {item.role}
                    <span className="text-border"> · </span>
                    {item.year}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-border/40">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-sm font-medium text-primary">Projects</p>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Areas of work
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Completed work, grouped by domain. Open an area for the
                projects and what they involved.
              </p>
            </div>
            <Link
              to="/projects"
              className="hidden shrink-0 items-center gap-1 text-sm font-medium text-primary hover:underline sm:inline-flex"
            >
              All areas
              <ArrowRight size={16} />
            </Link>
          </div>

          <ol className="divide-y divide-border/60 rounded-xl border border-border/60 bg-card">
            {areas.map((area, index) => {
              const count = getProjectsByArea(area.id).length
              return (
                <li key={area.id}>
                  <Link
                    to={`/projects/${area.id}`}
                    className="group flex flex-col gap-2 px-5 py-5 transition-colors hover:bg-background/60 sm:flex-row sm:items-baseline sm:gap-8"
                  >
                    <span className="w-8 shrink-0 text-xs text-muted-foreground tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="text-lg font-semibold tracking-tight group-hover:text-primary">
                        {area.label}
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                        {area.short}
                      </span>
                    </span>
                    <span className="shrink-0 text-xs text-muted-foreground sm:text-right">
                      {count} {count === 1 ? "project" : "projects"}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ol>

          <Link
            to="/projects"
            className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline sm:hidden"
          >
            All areas
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="border-t border-border/40 bg-card/40">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-sm font-medium text-primary">Skills</p>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Technical skills
              </h2>
            </div>
            <Link
              to="/about"
              className="hidden items-center gap-1 text-sm font-medium text-primary hover:underline sm:inline-flex"
            >
              About
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-xl border border-border/60 bg-background p-5"
              >
                <h3 className="font-semibold">{group.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {group.summary}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-card px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
