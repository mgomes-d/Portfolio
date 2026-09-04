import { useState, type FormEvent } from "react"
import { EnvelopeSimple, MapPin } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import { getSocials, site } from "@/content/site"

export default function Contact() {
  const socials = getSocials().filter((item) => item.label !== "Email")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [sent, setSent] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const subject = `Portfolio message from ${name}`
    const body = `${message}\n\n— ${name} (${email})`
    const href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.location.href = href
    setSent(true)
  }

  return (
    <main className="mx-auto grid w-full max-w-6xl flex-1 gap-12 px-4 py-16 lg:grid-cols-2">
      <div>
        <p className="mb-3 text-sm font-medium text-primary">Contact</p>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Contact
        </h1>
        <p className="mt-4 max-w-md text-lg text-muted-foreground">
          You may write by email or use the form. The form opens your email
          client with the message prepared.
        </p>

        <ul className="mt-10 space-y-4 text-sm">
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
        </ul>

        {socials.length > 0 ? (
          <div className="mt-8 flex flex-wrap gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-sm font-medium text-primary hover:underline"
              >
                {social.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>

      <form
        onSubmit={onSubmit}
        className="rounded-xl border border-border/60 bg-card p-6 sm:p-8"
      >
        <label className="block text-sm font-medium">
          Name
          <input
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="mt-2 h-10 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
            autoComplete="name"
          />
        </label>
        <label className="mt-4 block text-sm font-medium">
          Email
          <input
            required
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="mt-2 h-10 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
            autoComplete="email"
          />
        </label>
        <label className="mt-4 block text-sm font-medium">
          Message
          <textarea
            required
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            rows={6}
            className="mt-2 w-full resize-y rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
          />
        </label>
        <Button type="submit" size="lg" className="mt-6 w-full">
          Send message
        </Button>
        {sent ? (
          <p className="mt-3 text-sm text-muted-foreground">
            Your email client should open with the message ready to send.
          </p>
        ) : null}
      </form>
    </main>
  )
}
