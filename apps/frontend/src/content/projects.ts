/**
 * Add a project by appending an object. Every page reads from this list.
 *
 * Isolation rules (for 42 programs and future demos):
 * - A project page cannot take down the rest of the site (see ProjectErrorBoundary).
 * - Runnable demos load only on their own page, in a sandboxed iframe.
 * - If embedUrl is missing or the iframe fails, the rest of the page still renders.
 */
export type ProjectCategory = "42" | "backend"

export type Project = {
  slug: string
  title: string
  summary: string
  description: string
  tags: string[]
  category: ProjectCategory
  year: number
  featured?: boolean
  repoUrl?: string
  liveUrl?: string
  /** When true, this project can later host an isolated, testable demo. */
  runnable?: boolean
  /** Isolated demo URL (separate service). Loaded only on the project page. */
  embedUrl?: string
  status: "shipped" | "in-progress"
}

export const projects: Project[] = [
  {
    slug: "api-platform",
    title: "API Platform",
    summary:
      "A FastAPI service on AWS with clear contracts, health checks, and isolated failure domains.",
    description:
      "A backend template I use as a reference: versioned REST endpoints, request validation, structured logging, and a deploy path on AWS. The goal is a service you can restart, stop, or replace without touching anything else.",
    tags: ["Python", "FastAPI", "AWS", "Docker"],
    category: "backend",
    year: 2026,
    featured: true,
    status: "in-progress",
  },
  {
    slug: "minishell",
    title: "minishell",
    summary:
      "A POSIX-like shell in C: parsing, pipelines, redirections, and process control.",
    description:
      "42 project. Built a small shell from spec: tokenize input, run commands, handle pipes and redirections, and manage signals without leaking processes. A good reminder that backends are process trees as much as they are HTTP.",
    tags: ["C", "Unix", "Parsing"],
    category: "42",
    year: 2025,
    featured: true,
    status: "shipped",
  },
  {
    slug: "philosophers",
    title: "philosophers",
    summary:
      "Dining philosophers with threads, mutexes, and strict timing constraints.",
    description:
      "42 project. Concurrent program where each philosopher is a thread competing for forks. The interesting part is not the algorithm — it is making sure nobody starves, deadlocks, or reports the wrong timestamp under load.",
    tags: ["C", "Threads", "Concurrency"],
    category: "42",
    year: 2025,
    status: "shipped",
  },
  {
    slug: "turing",
    title: "Turing",
    summary:
      "A testable program designed to run in isolation — ready for a sandboxed demo later.",
    description:
      "Marked as runnable so it can be mounted as its own service later (iframe + sandbox). If the demo is down, this page still shows the write-up. That is the rule for every 42 program I want to expose: isolate it, never let it break the site or the server.",
    tags: ["C", "Theory", "Testing"],
    category: "42",
    year: 2026,
    featured: true,
    runnable: true,
    status: "in-progress",
  },
  {
    slug: "cub3d",
    title: "cub3D",
    summary:
      "A small raycaster: map parsing, camera, and a textured first-person view.",
    description:
      "42 project inspired by Wolfenstein 3D. Parse a map, project a world, and keep the render loop honest. Graphics on the surface, careful memory and file handling underneath.",
    tags: ["C", "Graphics", "Raycasting"],
    category: "42",
    year: 2025,
    status: "shipped",
  },
  {
    slug: "ft-transcendence",
    title: "ft_transcendence",
    summary:
      "A realtime web game with accounts, matchmaking, and a backend that has to stay up.",
    description:
      "42 final project. A full web app: auth, a playable game, and live updates. This is where backend habits meet a UI — contracts, sessions, and isolating a crash in one feature so the lobby still works.",
    tags: ["TypeScript", "Realtime", "Auth"],
    category: "42",
    year: 2026,
    status: "in-progress",
  },
]

export const projectCategories: { id: "all" | ProjectCategory; label: string }[] =
  [
    { id: "all", label: "All" },
    { id: "backend", label: "Backend" },
    { id: "42", label: "42" },
  ]

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getProjectsByCategory(
  category: "all" | ProjectCategory,
): Project[] {
  if (category === "all") return projects
  return projects.filter((project) => project.category === category)
}
