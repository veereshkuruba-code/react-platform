type ErrorStateProps = {
  title?: string
  description?: string
  onRetry?: () => void
}

function ErrorState({
  title = 'Something went wrong',
  description = 'We were unable to load the requested data.',
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="flex min-h-40 flex-col items-center justify-center rounded-lg border border-destructive/30 bg-destructive/5 p-6 text-center">
      <h3 className="font-heading text-base font-semibold">{title}</h3>

      <p className="mt-1 max-w-md text-sm text-muted-foreground">{description}</p>

      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-4 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Retry
        </button>
      )}
    </div>
  )
}

export default ErrorState
