import { useRef, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import CreateIncidentForm from './components/CreateIncidentForm'

import EmptyState from '@/components/feedback/EmptyState'
import ErrorState from '@/components/feedback/ErrorState'
import LoadingState from '@/components/feedback/LoadingState'

import { createIncident, getIncidents, type CreateIncidentRequest } from './api/incidentsApi'
import IncidentCard from './components/IncidentCard'
import IncidentFilters from './components/IncidentFilters'
import type { Severity } from './types/incident'
import { useDebounce } from '@/hooks/useDebounce'

function IncidentsPage() {
  const queryClient = useQueryClient()

  const searchInputRef = useRef<HTMLInputElement>(null)

  const [search, setSearch] = useState('')
  const [severity, setSeverity] = useState<Severity>('all')

  const debouncedSearch = useDebounce(search, 400)

  const {
    data: incidents,
    isPending,
    isFetching,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ['incidents', { search: debouncedSearch, severity }],
    queryFn: () =>
      getIncidents({
        search: debouncedSearch,
        severity,
      }),
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 30_000,
  })

  const createIncidentMutation = useMutation({
    mutationFn: createIncident,

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['incidents'],
      })
    },
  })

  if (isPending) {
    return <LoadingState />
  }

  if (isError) {
    return (
      <ErrorState
        title="Failed to load incidents"
        description={error.message}
        onRetry={() => refetch()}
      />
    )
  }

  if (incidents.length === 0) {
    return <EmptyState title={'empty Data'} description={'empty ra zumka'} />
  }

  return (
    <main className="space-y-6 p-6">
      <section>
        <h2 className="font-heading text-2xl font-semibold tracking-tight">Incidents</h2>

        <p className="text-muted-foreground">Monitor and manage platform incidents.</p>
      </section>

      <CreateIncidentForm
        onSubmit={(data: CreateIncidentRequest) => createIncidentMutation.mutateAsync(data)}
        onReset={() => createIncidentMutation.reset()}
        isSubmitting={createIncidentMutation.isPending}
        isSuccess={createIncidentMutation.isSuccess}
        errorMessage={
          createIncidentMutation.isError ? createIncidentMutation.error.message : undefined
        }
      />

      <IncidentFilters
        search={search}
        severity={severity}
        searchInputRef={searchInputRef}
        onSearchChange={setSearch}
        onSeverityChange={setSeverity}
      />

      <p className="text-sm text-muted-foreground">
        Showing {incidents.length} incident
        {incidents.length !== 1 ? 's' : ''}
        {isFetching && <span className="ml-2">Updating...12354</span>}
      </p>

      <section aria-label="Filtered incidents" className="grid gap-4 md:grid-cols-2">
        {incidents.map((incident) => (
          <IncidentCard key={incident.id} incident={incident} />
        ))}
      </section>
    </main>
  )
}

export default IncidentsPage
