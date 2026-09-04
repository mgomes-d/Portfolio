/**
 * Professional certifications: French RNCP titles and AWS certifications.
 */
export type Certification = {
  id: string
  shortLabel: string
  /** Compact name for the one-line list on the home page. */
  homeLabel: string
  title: string
  level: string
  summary: string
  href: string
  linkLabel: string
  /** Shown when the title has been applied for but not yet awarded. */
  status?: string
}

export const certifications: Certification[] = [
  {
    id: "aws-saa",
    shortLabel: "AWS",
    homeLabel: "AWS Solutions Architect – Associate",
    title: "AWS Certified Solutions Architect – Associate",
    level: "Amazon Web Services · Associate level",
    summary:
      "Designing distributed systems on AWS: resilient and highly available architectures, security, cost control, and the selection of compute, storage, database, and networking services.",
    href: "https://www.credly.com/badges/386d44c5-5784-4601-8541-2813a9305826",
    linkLabel: "Verify on Credly",
  },
  {
    id: "aws-ccp",
    shortLabel: "AWS",
    homeLabel: "AWS Cloud Practitioner",
    title: "AWS Certified Cloud Practitioner",
    level: "Amazon Web Services · Foundational level",
    summary:
      "The AWS platform as a whole: core services, the shared responsibility model, security and compliance, pricing, and support.",
    href: "https://www.credly.com/badges/4ce17fa3-2158-4d1c-8110-f368fda0115a",
    linkLabel: "Verify on Credly",
  },
  {
    id: "rncp7",
    shortLabel: "RNCP 7",
    homeLabel: "RNCP 7 · IT architecture expert",
    title: "IT architecture expert",
    level: "Master-level professional title · RNCP 39774",
    status: "Application submitted",
    summary:
      "A French professional title at European qualification level 7. It covers the architecture of information systems: networks, operating systems, security, cloud, and data. The programme work is complete; the official award is pending.",
    href: "https://www.francecompetences.fr/recherche/rncp/39774/",
    linkLabel: "Title on the official register",
  },
  {
    id: "rncp6",
    shortLabel: "RNCP 6",
    homeLabel: "RNCP 6 · IT solutions designer and developer",
    title: "IT solutions designer and developer",
    level: "Bachelor-level professional title · RNCP 39783",
    status: "Application submitted",
    summary:
      "A French professional title at European qualification level 6. It covers the design and delivery of software: object-oriented and functional programming, algorithms, and web applications. The programme work is complete; the official award is pending.",
    href: "https://www.francecompetences.fr/recherche/rncp/39783/",
    linkLabel: "Title on the official register",
  },
]
