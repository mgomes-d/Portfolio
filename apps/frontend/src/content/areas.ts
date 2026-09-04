/**
 * Areas of work. Projects are grouped under these; the order here is the
 * order used everywhere on the site.
 */
export type AreaId =
  | "web"
  | "networking"
  | "systems"
  | "security"
  | "languages"
  | "graphics"

export type Area = {
  id: AreaId
  label: string
  /** One line, used on cards. */
  short: string
  /** One paragraph, used at the top of the area page. */
  intro: string
}

export const areas: Area[] = [
  {
    id: "web",
    label: "Web & backend",
    short: "HTTP servers and full web applications, from the protocol up.",
    intro:
      "Work on the web stack at two levels: an HTTP/1.1 server written from scratch, and a complete web application with authentication, real-time updates, and a game. The first explains how requests actually move; the second is about keeping a service coherent as features are added.",
  },
  {
    id: "networking",
    label: "Networking & infrastructure",
    short:
      "IPv4 routing, BGP overlays, containers, Kubernetes, and cloud deployment.",
    intro:
      "From addressing and routing on paper to running services on real infrastructure. Compose stacks, a move to cloud servers, small Kubernetes clusters with a continuous-integration path, and overlay networks between autonomous systems in GNS3.",
  },
  {
    id: "systems",
    label: "Systems & low-level",
    short: "C on Unix, threads, assembly, and a kernel written from scratch.",
    intro:
      "The layer beneath application code. A sequence of C projects covering the Unix programming model — library primitives, processes and pipes, a shell, threads — down to assembly, then a small kernel that boots on bare metal.",
  },
  {
    id: "security",
    label: "Security",
    short:
      "Binary exploitation, web application audits, and hardening a Linux machine.",
    intro:
      "Reading systems one did not write and finding the way in. Three vulnerable machines with increasing mitigations, a web application audited from anonymous visitor to administrator, and a Linux virtual machine configured with a small attack surface.",
  },
  {
    id: "languages",
    label: "Languages, data & theory",
    short:
      "OCaml, Java, C++, machine-learning models from the mathematics, computability.",
    intro:
      "Projects chosen for what they teach about programming itself: a Turing-machine interpreter and a finite-automaton parser in OCaml, a Java simulation built from a UML model, a structured tour of C++, and two machine-learning models implemented directly rather than through a framework.",
  },
  {
    id: "graphics",
    label: "Graphics & games",
    short: "Wireframes, raycasting, and a small first-person game engine.",
    intro:
      "Rendering in C without a graphics library: an isometric wireframe viewer, a first-person raycasted maze, and a larger raycasted game with levels and interactions.",
  },
]

export function getArea(id: string): Area | undefined {
  return areas.find((area) => area.id === id)
}
