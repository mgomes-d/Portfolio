export type SkillGroup = {
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Python", "C", "TypeScript", "SQL"],
  },
  {
    title: "Backend",
    items: ["FastAPI", "REST APIs", "PostgreSQL", "Redis"],
  },
  {
    title: "Cloud & ops",
    items: ["AWS", "Docker", "Linux", "CI"],
  },
  {
    title: "How I work",
    items: ["Isolation", "Testing", "Clear contracts", "Observability"],
  },
]

export const highlights = [
  {
    label: "Focus",
    value: "Backend systems",
  },
  {
    label: "School",
    value: "42",
  },
  {
    label: "Based",
    value: "Belgium",
  },
  {
    label: "Status",
    value: "Open to work",
  },
]
