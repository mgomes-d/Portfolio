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
      <section>
        <div className="mx-auto max-w-6xl px-4 py-24 md:py-32">
          <p className="mb-6 font-serif text-base italic text-muted-foreground">
            {site.role} · {site.location}
          </p>
          <h1 className="max-w-3xl text-5xl leading-[0.92] italic sm:text-7xl lg:text-8xl">
            {site.shortName}
          </h1>
          <div className="mt-10 max-w-2xl border-l-[3px] border-primary pl-6">
            <p className="font-serif text-xl leading-relaxed text-foreground/80 sm:text-2xl">
              {site.headline} {site.intro}
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
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

          <div className="mt-14 grid gap-10 sm:grid-cols-2">
            <div>
              <p className="mb-3 font-serif text-base italic text-primary">
                Certifications
              </p>
              <ul className="space-y-2">
                {credentials.map((item) => (
                  <li key={item.id}>
                    <Link
                      to="/about#certifications"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.status
                        ? `${item.homeLabel} · pending`
                        : item.homeLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 font-serif text-base italic text-primary">
                Experience
              </p>
              <ul className="space-y-2">
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
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="mb-3 font-serif text-base italic text-primary">
                Projects
              </p>
              <h2 className="text-3xl italic md:text-4xl">Areas of work</h2>
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

          <ol className="divide-y divide-border border-y border-border">
            {areas.map((area, index) => {
              const count = getProjectsByArea(area.id).length
              return (
                <li key={area.id}>
                  <Link
                    to={`/projects/${area.id}`}
                    className="group flex flex-col gap-2 py-5 transition-colors hover:bg-card/70 sm:flex-row sm:items-baseline sm:gap-8"
                  >
                    <span className="w-8 shrink-0 font-serif text-sm text-primary tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="font-serif text-xl tracking-tight group-hover:text-primary">
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

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="mb-3 font-serif text-base italic text-primary">
                Skills
              </p>
              <h2 className="text-3xl italic md:text-4xl">Technical skills</h2>
            </div>
            <Link
              to="/about"
              className="hidden items-center gap-1 text-sm font-medium text-primary hover:underline sm:inline-flex"
            >
              About
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-xl">{group.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {group.summary}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {group.items.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
