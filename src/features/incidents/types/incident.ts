export type Severity = 'all' | 'critical' | 'warning' | 'info'

export type Incident = {
  id: string
  title: string
  description: string
  severity: Exclude<Severity, 'all'>
  status: string
}
