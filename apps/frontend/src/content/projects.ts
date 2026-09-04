/**
 * Completed work.
 *
 * Projects are listed under their primary area, in the order they should
 * appear on that area's page. A project may also belong to secondary areas,
 * in which case it is listed there too (after that area's primary projects).
 */
import type { AreaId } from "@/content/areas"

export type ProjectStage = {
  title: string
  summary: string
}

export type Project = {
  slug: string
  title: string
  summary: string
  description: string
  tags: string[]
  areas: [AreaId, ...AreaId[]]
  year: number
  stages?: ProjectStage[]
  repoUrl?: string
  liveUrl?: string
  embedUrl?: string
}

export const projects: Project[] = [
  // Web & backend --------------------------------------------------------
  {
    slug: "ft-transcendence",
    title: "ft_transcendence",
    summary:
      "A web application with authentication, real-time updates, and a playable game.",
    description:
      "A complete web application: accounts, live updates, and a game. The backend is organised as separate contracts (sessions, matchmaking, chat) so that a failure in one feature does not take down the rest of the service.",
    tags: ["TypeScript", "Realtime", "Web"],
    areas: ["web"],
    year: 2023,
  },
  {
    slug: "webserv",
    title: "webserv",
    summary:
      "An HTTP/1.1 server written from scratch and tested against a real browser.",
    description:
      "A non-blocking HTTP server: it listens, parses requests, serves static files, runs CGI, and responds to Chrome or Firefox in the same way a conventional reverse proxy would. Implementing HTTP once made later web stacks considerably clearer.",
    tags: ["C++", "HTTP", "Networking"],
    areas: ["web", "networking"],
    year: 2023,
  },

  // Networking & infrastructure -----------------------------------------
  {
    slug: "inception-of-things",
    title: "Inception of Things",
    summary:
      "Small Kubernetes clusters and a continuous-integration pipeline.",
    description:
      "The work is to bring up Kubernetes, observe how a cluster schedules workloads, and attach a continuous-integration path so that a commit can become a running service.",
    tags: ["Kubernetes", "Docker", "CI"],
    areas: ["networking"],
    year: 2025,
  },
  {
    slug: "bgp",
    title: "BGP at the edge",
    summary:
      "Overlay networks in GNS3 using VXLAN and BGP-EVPN between autonomous systems.",
    description:
      "A set of simulated networks in GNS3 with VXLAN and BGP-EVPN. Addressing and routing from the laboratory are extended to the way autonomous systems exchange reachability, beyond a single local network.",
    tags: ["Networking", "BGP"],
    areas: ["networking"],
    year: 2026,
  },
  {
    slug: "cloud-1",
    title: "Cloud-1",
    summary:
      "A small service stack moved from a local virtual machine onto cloud infrastructure.",
    description:
      "The same ideas as a compose stack (services, networks, persistence), deployed on cloud servers rather than a local hypervisor, with the additional constraints of an external datacenter.",
    tags: ["Cloud", "Linux"],
    areas: ["networking"],
    year: 2026,
  },
  {
    slug: "inception",
    title: "Inception",
    summary:
      "A Docker Compose environment: TLS reverse proxy, application, database, volumes, and networks.",
    description:
      "NGINX with TLS, an application server, and MariaDB, each in its own container, communicating over Docker networks and persisting data on volumes. The stack is described in a single compose file.",
    tags: ["Docker", "Linux"],
    areas: ["networking"],
    year: 2023,
  },
  {
    slug: "netpractice",
    title: "NetPractice",
    summary:
      "IPv4 addressing, masks, gateways, and routing across a series of faulty network diagrams.",
    description:
      "Each exercise is a broken network diagram. Addressing, masks, default gateways, and routes had to be restored until packets could move. It is practical IPv4 configuration rather than theory in isolation.",
    tags: ["Networking", "TCP/IP"],
    areas: ["networking"],
    year: 2023,
  },

  // Systems & low-level --------------------------------------------------
  {
    slug: "unix-systems-programming",
    title: "Unix systems programming in C",
    summary:
      "From a personal C library to a shell, threads, and assembly: the low-level work behind everything else.",
    description:
      "A sequence of C projects covering the Unix programming model from the ground up. It begins with reimplementing parts of the standard library, continues with processes, pipes, and a working shell, then concurrency with threads and mutexes, and ends with a set of library functions written in x86-64 assembly. Together they cover memory, file descriptors, process management, synchronisation, and the calling convention beneath C.",
    tags: ["C", "Unix", "Concurrency", "Assembly"],
    areas: ["systems"],
    year: 2024,
    stages: [
      {
        title: "Libft, ft_printf, get_next_line",
        summary:
          "Memory and string primitives with linked lists, a printf-compatible formatter, and a line reader that keeps a residual buffer between calls.",
      },
      {
        title: "pipex",
        summary:
          "The equivalent of a shell pipeline with input and output redirection, without a shell: forked processes, wired file descriptors, and a parent that waits.",
      },
      {
        title: "minishell",
        summary:
          "A Unix shell that tokenizes input, expands variables, runs builtins, and launches programs, with pipes, redirections, and signal handling matching bash.",
      },
      {
        title: "philosophers",
        summary:
          "The dining philosophers problem with threads and mutexes: no starvation, no deadlock, and correct timing under load.",
      },
      {
        title: "libasm",
        summary:
          "strlen, strcpy, strcmp, and related functions in x86-64 assembly, following the System V calling convention.",
      },
    ],
  },
  {
    slug: "kfs",
    title: "KFS",
    summary:
      "A small kernel written from scratch, in two stages: boot the machine, then grow the primitives.",
    description:
      "Enough of an operating system to boot on bare metal, then extended with interrupts and memory management. There is no hosted operating system performing the work. After years in user-space Linux, this is the other side of the system-call boundary.",
    tags: ["Kernel", "Low-level"],
    areas: ["systems"],
    year: 2026,
    stages: [
      {
        title: "KFS-1",
        summary:
          "Early bring-up: boot on bare metal, communicate with the hardware, and take control of the CPU.",
      },
      {
        title: "KFS-2",
        summary:
          "Interrupts, memory management, and additional hardware support on top of the first boot.",
      },
    ],
  },

  // Security -------------------------------------------------------------
  {
    slug: "binary-exploitation",
    title: "Binary exploitation series",
    summary:
      "Three vulnerable machines, from a first Linux box to fully mitigated 64-bit binaries.",
    description:
      "A progression through three deliberately insecure systems. The first is a Linux machine with a distinct entry at every level; the second is built around setuid binaries with mitigations that tighten as one advances; the third targets contemporary 64-bit binaries with protections enabled. The common skill is reading a system one did not write, and assuming it is untrustworthy.",
    tags: ["Security", "Binaries", "Linux"],
    areas: ["security"],
    year: 2026,
    stages: [
      {
        title: "Snow Crash",
        summary:
          "Eleven challenges on a vulnerable Linux machine: binaries and processes, the filesystem, injection, protocol behaviour, jails, and side channels.",
      },
      {
        title: "Rainfall",
        summary:
          "Exploitation of setuid programs: reading the code, mapping memory, and turning a defect into control of execution. Later levels introduce NX, stack canaries, and ASLR.",
      },
      {
        title: "Override",
        summary:
          "Contemporary 64-bit binaries: stripped, protections enabled, glibc involved, with heap and network in play.",
      },
    ],
  },
  {
    slug: "darkly",
    title: "Darkly",
    summary:
      "A web security audit: from an anonymous visitor to administrator on a vulnerable application.",
    description:
      "A web application containing classes of defect that still appear in production. I progressed from an anonymous session to administrator and documented each issue (injection, access control, and related flaws) together with how it should have been prevented.",
    tags: ["Security", "Web"],
    areas: ["security", "web"],
    year: 2026,
  },
  {
    slug: "born2beroot",
    title: "Born2beroot",
    summary:
      "A Linux virtual machine configured with partitions, users, SSH, a firewall, and monitoring.",
    description:
      "I installed a Linux virtual machine from scratch: partition layout, a non-root administrator, SSH, a firewall, and basic monitoring. It was a first exercise in reducing the attack surface of a machine I would have to maintain.",
    tags: ["Linux", "Virtualization"],
    areas: ["security", "systems"],
    year: 2022,
  },

  // Languages, data & theory --------------------------------------------
  {
    slug: "ft-turing",
    title: "ft_turing",
    summary:
      "A Turing-machine interpreter in OCaml: states, transitions, a tape, and termination.",
    description:
      "An interpreter for Turing machines written in OCaml. The machine is described by states and transitions, given a tape, and executed. It is a concrete treatment of computability: finite control, an unbounded tape, and the distinction between a program that halts and one that does not.",
    tags: ["OCaml", "Theory"],
    areas: ["languages"],
    year: 2026,
  },
  {
    slug: "dslr",
    title: "DSLR",
    summary:
      "A logistic-regression classifier on tabular data, implemented from the underlying mathematics.",
    description:
      "The program cleans a dataset, trains a one-versus-all logistic regression, and classifies rows without delegating the model to a framework. Feature scaling, the sigmoid, and the training loop remain visible in the code.",
    tags: ["Python", "Data"],
    areas: ["languages"],
    year: 2025,
  },
  {
    slug: "ft-linear-regression",
    title: "Linear regression",
    summary:
      "Estimates a car price from mileage with a linear model trained by gradient descent.",
    description:
      "A linear model is fitted to mileage and price using gradient descent, then used to estimate a price. Normalisation, the cost function, and the update rule are implemented directly, then plotted for inspection.",
    tags: ["Python", "Machine learning"],
    areas: ["languages"],
    year: 2024,
  },
  {
    slug: "ft-ality",
    title: "ft_ality",
    summary:
      "A parser implemented as a finite automaton, using fighting-game combos as the language.",
    description:
      "A small grammar of special moves is compiled into a recogniser that accepts valid sequences and rejects noise. The same ideas (state machines and parsing) appear in compilers and protocol decoders.",
    tags: ["OCaml", "Parsing"],
    areas: ["languages"],
    year: 2026,
  },
  {
    slug: "avaj-launcher",
    title: "avaj-launcher",
    summary:
      "A Java simulation built from a UML class diagram. The design precedes the code.",
    description:
      "A weather and aircraft simulation specified as UML. Factories, observers, and logging follow the diagram rather than an independent design. Object-oriented programming here is a matter of honouring an existing model.",
    tags: ["Java", "UML", "OOP"],
    areas: ["languages"],
    year: 2026,
  },
  {
    slug: "cpp-modules",
    title: "C++ modules",
    summary:
      "A structured introduction to C++: classes, templates, and the standard library.",
    description:
      "A sequence of small programs covering what C++ adds over C: classes, references, inheritance, exceptions, casts, templates, iterators, and standard containers. Together they form a working vocabulary for writing C++ as its own language.",
    tags: ["C++", "OOP"],
    areas: ["languages"],
    year: 2023,
  },

  // Graphics & games -----------------------------------------------------
  {
    slug: "doom-nukem",
    title: "Doom Nukem",
    summary:
      "A raycasted game drawing on Doom and Duke Nukem 3D: engine and level design together.",
    description:
      "Raycasting extended beyond a maze: levels, interactions, and the pacing of an early 1990s shooter. The engine has to remain efficient; the levels have to remain readable. Graphics and game structure share the same codebase.",
    tags: ["C", "Graphics", "Games"],
    areas: ["graphics"],
    year: 2026,
  },
  {
    slug: "cub3d",
    title: "cub3D",
    summary:
      "A first-person maze using raycasting, in the style of early 1990s games.",
    description:
      "The program parses a map, places a camera, and projects walls so the player can walk through a maze. The visible result is graphics; the implementation is file parsing, a tight render loop, and correct handling of textures as the view changes.",
    tags: ["C", "Graphics"],
    areas: ["graphics"],
    year: 2023,
  },
  {
    slug: "fdf",
    title: "FdF",
    summary:
      "A 3D wireframe viewer: a height map projected into a window, with camera controls.",
    description:
      "Given a height map, the program draws an isometric wireframe and allows rotation, zoom, and pan. It is a graphics loop: events, projection from three dimensions to two, and a stable scene when the window is resized or moved.",
    tags: ["C", "Graphics"],
    areas: ["graphics"],
    year: 2023,
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

/**
 * Projects for an area: those whose primary area matches, in file order,
 * followed by those that list it as a secondary area.
 */
export function getProjectsByArea(area: AreaId): Project[] {
  const primary = projects.filter((project) => project.areas[0] === area)
  const secondary = projects.filter(
    (project) => project.areas[0] !== area && project.areas.includes(area),
  )
  return [...primary, ...secondary]
}

/** Whether the project has anything beyond its text (links or a demo). */
export function hasDetailPage(project: Project): boolean {
  return Boolean(project.repoUrl || project.liveUrl || project.embedUrl)
}
