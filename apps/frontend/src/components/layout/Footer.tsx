import { Link } from "react-router-dom"
import { site, getSocials } from "@/content/site"

export default function Footer() {
  const socials = getSocials()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold tracking-tight">
            {site.name}<span className="text-primary">.</span>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {site.role} · {site.location}
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <Link to="/projects" className="hover:text-foreground">
            Projects
          </Link>
          <Link to="/about" className="hover:text-foreground">
            About
          </Link>
          <Link to="/contact" className="hover:text-foreground">
            Contact
          </Link>
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="hover:text-foreground"
              {...(social.href.startsWith("http")
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
            >
              {social.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-border/40">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-muted-foreground">
          © {year} {site.name}
        </p>
      </div>
    </footer>
  )
}
