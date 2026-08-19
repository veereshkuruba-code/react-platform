import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import EmptyState from '@/components/feedback/EmptyState'
import ErrorState from '@/components/feedback/ErrorState'
import LoadingState from '@/components/feedback/LoadingState'

function ServicesPage() {
  const [state, setState] = useState<'success' | 'loading' | 'empty' | 'error'>('success')

  return (
    <main className="space-y-6 p-6">
      <section>
        <h2 className="font-heading text-2xl font-semibold tracking-tight">Services</h2>

        <p className="text-muted-foreground">Monitor the services running on the platform.</p>
      </section>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setState('success')}
          className="rounded-md border px-3 py-2 text-sm hover:bg-muted"
        >
          Success
        </button>

        <button
          type="button"
          onClick={() => setState('loading')}
          className="rounded-md border px-3 py-2 text-sm hover:bg-muted"
        >
          Loading
        </button>

        <button
          type="button"
          onClick={() => setState('empty')}
          className="rounded-md border px-3 py-2 text-sm hover:bg-muted"
        >
          Empty
        </button>

        <button
          type="button"
          onClick={() => setState('error')}
          className="rounded-md border px-3 py-2 text-sm hover:bg-muted"
        >
          Error
        </button>
      </div>

      {state === 'loading' && <LoadingState />}

      {state === 'empty' && (
        <EmptyState
          title="No services found"
          description="There are currently no services registered with the platform."
        />
      )}

      {state === 'error' && (
        <ErrorState
          title="Unable to load services"
          description="The service information could not be retrieved."
          onRetry={() => setState('success')}
        />
      )}

      {state === 'success' && (
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
      )}
    </main>
  )
}

export default ServicesPage
