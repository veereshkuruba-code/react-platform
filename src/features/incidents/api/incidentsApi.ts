import apiClient from '@/lib/api/client'

import type { Incident, Severity } from '../types/incident'

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

export async function getIncidents({
  search,
  severity,
}: GetIncidentsParams): Promise<Incident[]> {
  const response = await apiClient.get<Incident[]>('/api/v1/incidents', {
    params: {
      ...(search ? { search } : {}),
      ...(severity && severity !== 'all' ? { severity } : {}),
    },
  })

  return response.data
}

export async function createIncident(
  request: CreateIncidentRequest,
): Promise<Incident> {
  const response = await apiClient.post<Incident>(
    '/api/v1/incidents',
    request,
  )

  return response.data
}