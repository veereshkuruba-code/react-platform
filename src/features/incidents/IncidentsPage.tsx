import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

function IncidentsPage() {
  return (
    <main className="space-y-6 p-6">
      <section>
        <h2 className="font-heading text-2xl font-semibold tracking-tight">Incidents</h2>

        <p className="text-muted-foreground">Monitor and manage platform incidents.</p>
      </section>

      <section aria-label="Active incidents" className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Monitoring BFF unavailable</CardTitle>
            <CardDescription>Service is currently not responding.</CardDescription>
          </CardHeader>

          <CardContent className="flex items-center gap-3">
            <Badge variant="destructive">Critical</Badge>
            <span className="text-sm text-muted-foreground">Active</span>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Metrics collection delayed</CardTitle>
            <CardDescription>Metrics ingestion is experiencing delays.</CardDescription>
          </CardHeader>

          <CardContent className="flex items-center gap-3">
            <Badge variant="secondary">Warning</Badge>
            <span className="text-sm text-muted-foreground">Investigating</span>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}

export default IncidentsPage
