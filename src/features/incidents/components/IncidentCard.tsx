import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import type { Incident } from '../types/incident'

type IncidentCardProps = {
  incident: Incident
}

function IncidentCard({ incident }: IncidentCardProps) {
  const badgeVariant =
    incident.severity === 'critical'
      ? 'destructive'
      : incident.severity === 'warning'
        ? 'secondary'
        : 'outline'

  return (
    <Card>
      <CardHeader>
        <CardTitle>{incident.title}</CardTitle>

        <CardDescription>{incident.description}</CardDescription>
      </CardHeader>

      <CardContent className="flex items-center gap-3">
        <Badge variant={badgeVariant}>{incident.severity}</Badge>

        <span className="text-sm text-muted-foreground">{incident.status}</span>
      </CardContent>
    </Card>
  )
}

export default IncidentCard
