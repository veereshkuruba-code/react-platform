import { useMutation, useQueryClient } from '@tanstack/react-query'

import {
  createIncident,
  type CreateIncidentRequest,
} from '../api/incidentsApi'

export function useCreateIncident() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (request: CreateIncidentRequest) =>
      createIncident(request),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['incidents'],
      })
    },
  })
}