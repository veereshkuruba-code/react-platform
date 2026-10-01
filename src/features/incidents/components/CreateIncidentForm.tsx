import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'

import { createIncidentSchema, type CreateIncidentFormData } from '../schemas/incidentSchema'

type CreateIncidentFormProps = {
  onSubmit: (data: {
    title: string
    description: string
    severity: CreateIncidentFormData['severity']

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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateIncidentFormData>({
    resolver: zodResolver(createIncidentSchema),
    defaultValues: {
      title: '',
      description: '',
      Sample: '',
      severity: 'warning',
    },
  })

  const handleFormSubmit = async (data: CreateIncidentFormData) => {
    onReset()

    try {
      await onSubmit({
        ...data,
        status: 'Active',
      })

      reset()
    } catch {
      // Error state is handled by the parent mutation state.
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="space-y-4 rounded-lg border bg-card p-4"
    >
      {/* Title */}
      <div className="space-y-2">
        <label htmlFor="incident-title" className="text-sm font-medium">
          Title
        </label>

        <input
          id="incident-title"
          {...register('title')}
          placeholder="Enter incident title"
          className="h-10 w-full rounded-md border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
        />

        {errors.title && <p className="text-sm text-destructive">{errors.title.message}</p>}
      </div>

      {/* Description */}
      <div className="space-y-2">
        <label htmlFor="incident-description" className="text-sm font-medium">
          Description
        </label>

        <textarea
          id="incident-description"
          {...register('description')}
          placeholder="Describe the incident"
          className="min-h-24 w-full rounded-md border bg-background p-3 text-sm outline-none focus:ring-2 focus:ring-ring"
        />

        {errors.description && (
          <p className="text-sm text-destructive">{errors.description.message}</p>
        )}
      </div>

      {/* Sample */}
      <div className="space-y-2">
        <label htmlFor="incident-sample" className="text-sm font-medium">
          Sample
        </label>

        <textarea
          id="incident-sample"
          {...register('Sample')}
          placeholder="Enter sample"
          className="min-h-24 w-full rounded-md border bg-background p-3 text-sm outline-none focus:ring-2 focus:ring-ring"
        />

        {errors.Sample && <p className="text-sm text-destructive">{errors.Sample.message}</p>}
      </div>

      {/* Severity */}
      <div className="space-y-2">
        <label htmlFor="incident-severity" className="text-sm font-medium">
          Severity
        </label>

        <select
          id="incident-severity"
          {...register('severity')}
          className="h-10 w-full rounded-md border bg-background px-3 text-sm"
        >
          <option value="critical">Critical</option>
          <option value="warning">Warning</option>
          <option value="info">Info</option>
        </select>

        {errors.severity && <p className="text-sm text-destructive">{errors.severity.message}</p>}
      </div>

      {/* Submit */}
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Creating...' : 'Create Incident'}
      </Button>

      {/* Success */}
      {isSuccess && <p className="text-sm text-green-600">Incident created successfully.</p>}

      {/* API Error */}
      {errorMessage && <p className="text-sm text-destructive">{errorMessage}</p>}
    </form>
  )
}

export default CreateIncidentForm
