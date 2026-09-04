import { Link } from "react-router-dom"
import { ArrowUpRight } from "@phosphor-icons/react"
import { buttonVariants } from "@/components/ui/button"
import { certifications } from "@/content/certifications"
import { experience } from "@/content/experience"
import { site } from "@/content/site"
import { skillGroups } from "@/content/skills"

export default function About() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-16">
      <p className="mb-3 text-sm font-medium text-primary">About</p>
      <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
        Backend developer in Brussels.
      </h1>

      <div className="mt-10 max-w-2xl space-y-5 text-lg leading-relaxed text-muted-foreground">
        {site.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <section id="experience" className="mt-16 scroll-mt-24">
        <h2 className="text-2xl font-bold tracking-tight">Experience</h2>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Two internships in Belgium.
        </p>
        <ol className="mt-8 divide-y divide-border/60 rounded-xl border border-border/60 bg-card">
          {experience.map((item) => (
            <li key={item.id} className="px-6 py-7">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <p className="text-xs tracking-widest text-primary uppercase">
                  {item.kind} · {item.location}
                </p>
                <p className="text-xs text-muted-foreground">{item.period}</p>
              </div>
              <h3 className="mt-2 text-lg font-semibold tracking-tight">
                {item.role}
              </h3>
              <p className="text-sm text-muted-foreground">{item.company}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {item.summary}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <ul className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-background px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section id="certifications" className="mt-16 scroll-mt-24">
        <h2 className="text-2xl font-bold tracking-tight">Certifications</h2>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Two AWS certifications, verifiable on Credly. The two French
          professional titles have been applied for; the official award is
          pending.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {certifications.map((item) => (
            <article
              key={item.id}
              className="flex flex-col rounded-xl border border-border/60 bg-card p-6"
            >
              <p className="text-xs tracking-widest text-primary uppercase">
                {item.shortLabel}
                {item.status ? ` · ${item.status}` : ""}
              </p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">{item.level}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {item.summary}
              </p>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                {item.linkLabel}
                <ArrowUpRight size={14} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight">Skills</h2>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Grouped by domain. Each item corresponds to work shown in the
          projects or in the internships.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-border/60 bg-card p-5"
            >
              <h3 className="font-semibold">{group.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {group.summary}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-background px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-16">
        <Link to="/projects" className={buttonVariants({ size: "lg" })}>
          See projects
        </Link>
      </div>
    </main>
  )
}
