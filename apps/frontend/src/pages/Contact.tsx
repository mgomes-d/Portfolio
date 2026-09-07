import { EnvelopeSimple, LinkedinLogo, MapPin } from "@phosphor-icons/react"
import { site } from "@/content/site"

export default function Contact() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-16">
      <p className="mb-3 text-sm text-primary">Contact</p>
      <h1 className="text-4xl md:text-5xl">Contact</h1>
      <p className="mt-4 max-w-md text-lg text-muted-foreground">
        Email or LinkedIn.
      </p>

      <ul className="mt-12 space-y-5">
        <li className="flex items-center gap-3 text-muted-foreground">
          <MapPin size={18} className="text-primary" />
          {site.location}
        </li>
        <li>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground"
          >
            <EnvelopeSimple size={18} className="text-primary" />
            {site.email}
          </a>
        </li>
        <li>
          <a
            href={site.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground"
          >
            <LinkedinLogo size={18} className="text-primary" />
            linkedin.com/in/mgomes-d
          </a>
        </li>
      </ul>
    </main>
  )
}
