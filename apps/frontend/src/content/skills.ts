export type SkillGroup = {
  title: string
  /** One line of context: where the skill comes from or how it is used. */
  summary: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    summary: "Python for services; C and C++ for systems work.",
    items: [
      "Python",
      "C# / .NET",
      "C",
      "C++",
      "TypeScript",
      "Java",
      "OCaml",
      "x86-64 assembly",
      "Bash",
      "SQL",
    ],
  },
  {
    title: "Backend & web",
    summary: "APIs and services, with HTTP understood from the protocol up.",
    items: [
      "FastAPI",
      "REST API design",
      "HTTP/1.1 (server written from scratch)",
      "Real-time (WebSockets)",
      "Authentication & sessions",
      "Odoo",
      "Generative AI",
      "Relational databases",
    ],
  },
  {
    title: "Cloud & infrastructure",
    summary: "AWS certified; containers and clusters from compose files to Kubernetes.",
    items: [
      "AWS",
      "Docker & Compose",
      "Kubernetes",
      "Linux administration",
      "NGINX & TLS",
      "CI pipelines",
    ],
  },
  {
    title: "Systems & networking",
    summary: "The Unix programming model, and what happens on the wire.",
    items: [
      "Processes, threads & IPC",
      "Memory management",
      "Kernel development",
      "TCP/IP & IPv4 routing",
      "BGP, EVPN & VXLAN",
      "Debugging with GDB & Valgrind",
    ],
  },
  {
    title: "Security",
    summary: "Offensive exercises used to inform defensive choices.",
    items: [
      "Binary exploitation",
      "Reverse engineering",
      "Web application security",
      "Linux hardening",
      "Exploit mitigations (NX, canaries, ASLR)",
    ],
  },
  {
    title: "Data & theory",
    summary: "Models implemented from the mathematics; automata and parsing.",
    items: [
      "Logistic & linear regression",
      "Gradient descent",
      "Data cleaning with Python",
      "Finite automata & parsing",
      "Computability",
    ],
  },
]
