import { Link } from "react-router-dom"
import { buttonVariants } from "@/components/ui/button"
import { site } from "@/content/site"
import { skillGroups } from "@/content/skills"

const timeline = [
  {
    title: "42",
    detail:
      "Software engineering by spec. Isolation, testing, and programs that you can stop without taking everything else with them.",
  },
  {
    title: "Backend",
    detail:
      "Python, FastAPI, and AWS. APIs with clear contracts, persistence, and a deploy path you can restart.",
  },
  {
    title: "Belgium",
    detail: "Open to roles where I can own services and keep them healthy in production.",
  },
]

export default function About() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-16">
      <p className="mb-3 text-sm font-medium text-primary">About</p>
      <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
        Backend developer, 42-trained, based in {site.location}.
      </h1>

      <div className="mt-10 max-w-2xl space-y-5 text-lg leading-relaxed text-muted-foreground">
        {site.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-16 grid gap-4 md:grid-cols-3">
        {timeline.map((item) => (
          <article
            key={item.title}
            className="rounded-xl border border-border/60 bg-card p-6"
          >
            <h2 className="text-lg font-semibold tracking-tight">{item.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {item.detail}
            </p>
          </article>
        ))}
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight">Skills</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-border/60 bg-card p-5"
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
      </section>

      <div className="mt-16 flex flex-wrap gap-4">
        <Link to="/projects" className={buttonVariants({ size: "lg" })}>
          See projects
        </Link>
        <Link
          to="/contact"
          className={buttonVariants({ size: "lg", variant: "outline" })}
        >
          Contact
        </Link>
      </div>
    </main>
  )
}
