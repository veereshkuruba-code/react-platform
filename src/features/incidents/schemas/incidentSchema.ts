import { z } from 'zod'

export const createIncidentSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, 'Title is required')
    .min(3, 'Title must be at least 3 characters'),

  description: z
    .string()
    .trim()
    .min(1, 'Description is required')
    .min(10, 'Description must be at least 10 characters'),

  Sample: z
    .string()
    .trim()
    .min(1, 'Sample is required')
    .min(5, 'Sample must be at least 5 characters'),

  severity: z.enum(['critical', 'warning', 'info']),
})

export type CreateIncidentFormData = z.infer<typeof createIncidentSchema>
