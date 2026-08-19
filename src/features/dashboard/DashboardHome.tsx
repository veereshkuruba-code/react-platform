import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

function DashboardHome() {
  return (
    <main className="space-y-6 p-6">
      <section>
        <h2 className="font-heading text-2xl font-semibold tracking-tight">Dashboard</h2>

        <p className="text-muted-foreground">Monitor the health of your platform.</p>
      </section>

      <section aria-label="Platform summary" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Services</CardTitle>
            <CardDescription>Total registered services</CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-3xl font-semibold">12</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Healthy Services</CardTitle>
            <CardDescription>Currently operating normally</CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex items-center gap-2">
              <p className="text-3xl font-semibold">10</p>
              <Badge>Healthy</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Incidents</CardTitle>
            <CardDescription>Incidents requiring attention</CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex items-center gap-2">
              <p className="text-3xl font-semibold">2</p>
              <Badge variant="destructive">Critical</Badge>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}

export default DashboardHome
