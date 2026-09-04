import { Component, type ErrorInfo, type ReactNode } from "react"
import { Link } from "react-router-dom"

type Props = {
  children: ReactNode
}

type State = {
  hasError: boolean
}

export class ProjectErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Isolated project view failed:", error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="mx-auto flex max-w-6xl flex-1 flex-col justify-center px-4 py-20">
          <p className="mb-3 text-sm font-medium text-primary">Project</p>
          <h1 className="text-3xl font-bold tracking-tight">
            This project could not be loaded
          </h1>
          <p className="mt-4 max-w-xl text-muted-foreground">
            The demo failed in isolation. The rest of the site is unaffected.
          </p>
          <Link
            to="/projects"
            className="mt-8 text-sm font-medium text-primary hover:underline"
          >
            Back to projects
          </Link>
        </main>
      )
    }

    return this.props.children
  }
}
