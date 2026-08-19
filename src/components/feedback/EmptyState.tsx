type EmptyStateProps = {
  title: string
  description: string
}

function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="flex min-h-40 flex-col items-center justify-center rounded-lg border border-dashed bg-white p-6 text-center">
      <h3 className="font-heading text-base font-semibold">{title}</h3>

      <p className="mt-1 max-w-md text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

export default EmptyState
