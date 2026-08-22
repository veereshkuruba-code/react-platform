import { Button } from '@/components/ui/button'

import type { Severity } from '../types/incident'

import { useState, type FormEvent } from 'react'

type CreateIncidentFormProps = {
  onSubmit: (data: {
    title: string
    description: string
    severity: Exclude<Severity, 'all'>
    status: string
  }) => Promise<unknown>
  onReset: () => void
  isSubmitting: boolean
  isSuccess: boolean
  errorMessage?: string
}

function CreateIncidentForm({
  onSubmit,
  onReset,
  isSubmitting,
  isSuccess,
  errorMessage,
}: CreateIncidentFormProps) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [severity, setSeverity] = useState<Exclude<Severity, 'all'>>('warning')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    onReset()

    try {
      await onSubmit({
        title,
        description,
        severity,
        status: 'Active',
      })

      setTitle('')
      setDescription('')
      setSeverity('warning')
    } catch {
      // Error state is handled by the parent mutation state.
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border bg-card p-4">
      <div className="space-y-2">
        <label htmlFor="incident-title" className="text-sm font-medium">
          Title
        </label>

        <input
          id="incident-title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Enter incident title"
          required
          className="h-10 w-full rounded-md border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="incident-description" className="text-sm font-medium">
          Description
        </label>

        <textarea
          id="incident-description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Describe the incident"
          required
          className="min-h-24 w-full rounded-md border bg-background p-3 text-sm outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="incident-severity" className="text-sm font-medium">
          Severity
        </label>

        <select
          id="incident-severity"
          value={severity}
          onChange={(event) => setSeverity(event.target.value as Exclude<Severity, 'all'>)}
          className="h-10 w-full rounded-md border bg-background px-3 text-sm"
        >
          <option value="critical">Critical</option>
          <option value="warning">Warning</option>
          <option value="info">Info</option>
        </select>
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Creating...' : 'Create Incident'}
      </Button>

      {isSuccess && <p className="text-sm text-green-600">Incident created successfully.</p>}

      {errorMessage && <p className="text-sm text-destructive">{errorMessage}</p>}
    </form>
  )
}

export default CreateIncidentForm
