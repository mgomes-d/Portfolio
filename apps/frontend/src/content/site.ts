/**
 * Site-wide copy and links. Edit this file to update every page.
 */
export const site = {
  name: "Murillo Gomes de Senna",
  shortName: "Murillo",
  initials: "MGS",
  role: "Backend Developer",
  location: "Belgium",
  availability: "Open to opportunities",
  headline:
    "I build robust backend systems with Python, FastAPI and AWS.",
  intro:
    "Currently open to opportunities in Belgium.",
  email: "hello@murillosenna.dev",
  githubUrl: "",
  linkedinUrl: "",
  about: [
    "I'm a backend developer focused on reliable APIs, clear interfaces, and systems that stay up when something goes wrong.",
    "I trained at 42, where you build from a spec — no tutorials, just peers and a lot of debugging. That habit of shipping isolated, testable programs is still how I work.",
    "I'm looking for a team in Belgium where I can own services end to end: design the API, persist the data, deploy it, and keep it healthy.",
  ],
} as const

export type SocialLink = {
  label: string
  href: string
}

export function getSocials(): SocialLink[] {
  const links: SocialLink[] = []

  if (site.githubUrl) {
    links.push({ label: "GitHub", href: site.githubUrl })
  }
  if (site.linkedinUrl) {
    links.push({ label: "LinkedIn", href: site.linkedinUrl })
  }
  if (site.email) {
    links.push({ label: "Email", href: `mailto:${site.email}` })
  }

  return links
}
