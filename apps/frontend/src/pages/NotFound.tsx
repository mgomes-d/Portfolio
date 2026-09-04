import { Link } from "react-router-dom"
import { buttonVariants } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 py-20">
      <p className="mb-3 text-sm font-medium text-primary">404</p>
      <h1 className="text-4xl font-bold tracking-tight">Page not found</h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        That route does not exist. The rest of the site is still here.
      </p>
      <div className="mt-8">
        <Link to="/" className={buttonVariants()}>
          Back home
        </Link>
      </div>
    </main>
  )
}
