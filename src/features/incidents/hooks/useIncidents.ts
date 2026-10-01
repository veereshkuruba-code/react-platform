import { useQuery } from '@tanstack/react-query'

import { getIncidents } from '../api/incidentsApi'
import type { Severity } from '../types/incident'

type UseIncidentsParams = {
  search: string
  severity: Severity
}

export function useIncidents({
  search,
  severity,
}: UseIncidentsParams) {
  return useQuery({
    queryKey: ['incidents', { search, severity }],
    queryFn: () =>
      getIncidents({
        search,
        severity,
      }),
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 30_000,
  })
}