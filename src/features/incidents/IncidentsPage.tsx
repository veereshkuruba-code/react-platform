import { useRef, useState } from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

type Severity = 'all' | 'critical' | 'warning' | 'info'

type Incident = {
  id: string
  title: string
  description: string
  severity: Exclude<Severity, 'all'>
  status: string
}

const incidents: Incident[] = [
  {
    id: 'INC-001',
    title: 'Monitoring BFF unavailable',
    description: 'Service is currently not responding.',
    severity: 'critical',
    status: 'Active',
  },
  {
    id: 'INC-002',
    title: 'Metrics collection delayed',
    description: 'Metrics ingestion is experiencing delays.',
    severity: 'warning',
    status: 'Investigating',
  },
  {
    id: 'INC-003',
    title: 'Service health check recovered',
    description: 'The service is responding normally again.',
    severity: 'info',
    status: 'Resolved',
  },
]

function IncidentsPage() {
  const searchInputRef = useRef<HTMLInputElement>(null)

  const [search, setSearch] = useState('')
  const [severity, setSeverity] = useState<Severity>('all')

  const filteredIncidents = incidents.filter((incident) => {
    const matchesSearch = incident.title.toLowerCase().includes(search.toLowerCase())

    const matchesSeverity = severity === 'all' || incident.severity === severity

    return matchesSearch && matchesSeverity
  })

  return (
    <main className="space-y-6 p-6">
      <section>
        <h2 className="font-heading text-2xl font-semibold tracking-tight">Incidents</h2>

        <p className="text-muted-foreground">Monitor and manage platform incidents.</p>
      </section>

      <section aria-label="Incident filters" className="flex flex-col gap-4 md:flex-row">
        <input
          ref={searchInputRef}
          type="search"
          placeholder="Search incidents..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="h-10 flex-1 rounded-md border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
        />

        <select
          value={severity}
          onChange={(event) => setSeverity(event.target.value as Severity)}
          className="h-10 rounded-md border bg-background px-3 text-sm"
        >
          <option value="all">All severities</option>
          <option value="critical">Critical</option>
          <option value="warning">Warning</option>
          <option value="info">Info</option>
        </select>
      </section>

      <Button type="button" variant="outline" onClick={() => searchInputRef.current?.focus()}>
        Focus Search
      </Button>

      <p className="text-sm text-muted-foreground">
        Showing {filteredIncidents.length} incident
        {filteredIncidents.length !== 1 ? 's' : ''}
      </p>

      <section aria-label="Filtered incidents" className="grid gap-4 md:grid-cols-2">
        {filteredIncidents.map((incident) => (
          <Card key={incident.id}>
            <CardHeader>
              <CardTitle>{incident.title}</CardTitle>

              <CardDescription>{incident.description}</CardDescription>
            </CardHeader>

            <CardContent className="flex items-center gap-3">
              <Badge
                variant={
                  incident.severity === 'critical'
                    ? 'destructive'
                    : incident.severity === 'warning'
                      ? 'secondary'
                      : 'outline'
                }
              >
                {incident.severity}
              </Badge>

              <span className="text-sm text-muted-foreground">{incident.status}</span>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  )
}

export default IncidentsPage
