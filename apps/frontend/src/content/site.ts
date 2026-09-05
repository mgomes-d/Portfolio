/**
 * Site-wide copy.
 */
export const site = {
  name: "Murillo Gomes de Senna",
  shortName: "Murillo",
  initials: "MGS",
  role: "Software Engineer",
  location: "Brussels, Belgium",
  headline:
    "I focus on software from the API down to the machine: services, Unix, networks, and infrastructure.",
  intro:
    "I have written an HTTP server, a Unix shell, and a kernel from scratch, and configured networks from IPv4 routing to BGP.",
  email: "mgomesd.pro@gmail.com",
  githubUrl: "",
  linkedinUrl: "https://www.linkedin.com/in/mgomes-d/",
  about: [
    "I am a software engineer. I am interested in APIs that remain simple to consume, and in systems in which a failure stays contained rather than spreading.",
    "I trained through a project-based engineering programme in Brussels and hold the AWS Solutions Architect – Associate and Cloud Practitioner certifications. I have applied for the two French professional titles that correspond to the programme — IT solutions designer and developer (level 6) and IT architecture expert (level 7) — and am waiting for the official award. I completed internships at Johnson & Johnson Innovative Medicine and at Corona Print.",
    "The programme covered the whole stack: an HTTP server and a full web application, Docker and Kubernetes deployments, BGP overlays, a Unix shell and a kernel written in C, binary exploitation and web security audits, and machine-learning models implemented from the mathematics. The projects on this site are organised by those areas.",
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
