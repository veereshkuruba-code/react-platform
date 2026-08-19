function LoadingState() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-40 items-center justify-center rounded-lg border bg-white p-6"
    >
      <p className="text-sm text-muted-foreground">Loading...</p>
    </div>
  )
}

export default LoadingState
