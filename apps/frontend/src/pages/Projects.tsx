import AreaCard from "@/components/projects/AreaCard"
import { areas } from "@/content/areas"

export default function Projects() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-16">
      <p className="mb-3 text-sm text-primary">Work</p>
      <h1 className="text-4xl md:text-5xl">Projects</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Completed work, grouped by area. Each area opens to the projects it
        contains, with a description of what was built and why.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {areas.map((area, index) => (
          <AreaCard key={area.id} area={area} index={index} />
        ))}
      </div>
    </main>
  )
}
