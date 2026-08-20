import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

function ServicesPage() {
  return (
    <main className="space-y-6 p-6">
      <section>
        <h2 className="font-heading text-2xl font-semibold tracking-tight">Services</h2>

        <p className="text-muted-foreground">Monitor the services running on the platform.</p>
      </section>

      <section aria-label="Services" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Auth Service</CardTitle>
            <CardDescription>Authentication and authorization</CardDescription>
          </CardHeader>

          <CardContent>
            <Badge>Healthy</Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Monitoring BFF</CardTitle>
            <CardDescription>Backend-for-Frontend service</CardDescription>
          </CardHeader>

          <CardContent>
            <Badge>Healthy</Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Metrics Service</CardTitle>
            <CardDescription>Platform metrics collection</CardDescription>
          </CardHeader>

          <CardContent>
            <Badge variant="destructive">Down</Badge>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}

export default ServicesPage
