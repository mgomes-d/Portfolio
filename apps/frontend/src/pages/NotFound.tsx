import { Link } from "react-router-dom"
import { buttonVariants } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 py-20">
      <p className="mb-3 font-serif text-base italic text-primary">404</p>
      <h1 className="text-4xl">Page not found</h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        This page does not exist.
      </p>
      <div className="mt-8">
        <Link to="/" className={buttonVariants()}>
          Back home
        </Link>
      </div>
    </main>
  )
}
