/**
 * Internships. Dates and duties come from the training plans;
 * personal details from those documents are not published.
 */
export type Experience = {
  id: string
  company: string
  role: string
  location: string
  period: string
  year: string
  kind: string
  summary: string
  points: string[]
  tags: string[]
}

export const experience: Experience[] = [
  {
    id: "corona-print",
    company: "Corona Print",
    role: "Application developer intern",
    location: "Brussels",
    period: "February–July 2026",
    year: "2026",
    kind: "Internship",
    summary:
      "Information systems and RFID: reading a live operations stack, then changing it. The work sat between the shop floor and the software that records it.",
    points: [
      "Analysed how the existing tools were used, including the Odoo ERP and the RFID encoding formats already in production.",
      "Took part in customising Odoo and in building a visitor-management application.",
      "Wrote a .NET application that encoded and read card formats through Elatec RFID readers.",
      "Wrote and documented Python services and APIs against those readers, then tested and corrected the results under supervision.",
    ],
    tags: ["Python", ".NET", "Odoo", "RFID", "Elatec"],
  },
  {
    id: "jnj",
    company: "Johnson & Johnson Innovative Medicine",
    role: "Software engineer intern, Generative AI",
    location: "Beerse",
    period: "February–June 2025",
    year: "2025",
    kind: "Internship",
    summary:
      "A Generative AI service for software and compliance documentation, fed from the existing codebase and from JIRA, and required to follow internal templates.",
    points: [
      "Designed and implemented parts of the generation pipeline, including how source code and tickets were turned into documents.",
      "Tested and debugged the service, and worked with the team on performance: caching, query cost, and other bottlenecks.",
      "Documented the API, the data model, and how the tool was meant to be used, then walked colleagues through it.",
    ],
    tags: ["Python", "Generative AI", "JIRA", "Documentation"],
  },
]
