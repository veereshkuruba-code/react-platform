import type { Severity, Incident } from '../types/incident'

type GetIncidentsParams = {
  search?: string
  severity?: Severity
}

export type CreateIncidentRequest = {
  title: string
  description: string
  severity: Exclude<Severity, 'all'>
  status: string
}

export async function getIncidents({ search, severity }: GetIncidentsParams): Promise<Incident[]> {
  const params = new URLSearchParams()

  if (search) {
    params.set('search', search)
  }

  if (severity && severity !== 'all') {
    params.set('severity', severity)
  }

  const queryString = params.toString()

  const response = await fetch(
    `http://localhost:8082/api/v1/incidents${queryString ? `?${queryString}` : ''}`,
  )

  if (!response.ok) {
    throw new Error('Failed to fetch incidents')
  }

  return response.json()
}

export async function createIncident(request: CreateIncidentRequest): Promise<Incident> {
  const response = await fetch('http://localhost:8082/api/v1/incidents', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  })

  if (!response.ok) {
    throw new Error('Failed to create incident')
  }

  return response.json()
}
