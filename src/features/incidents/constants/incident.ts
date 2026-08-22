import type { Severity } from '../types/incident'

export const severityOptions: {
  value: Severity
  label: string
}[] = [
  {
    value: 'all',
    label: 'All severities',
  },
  {
    value: 'critical',
    label: 'Critical',
  },
  {
    value: 'warning',
    label: 'Warning',
  },
  {
    value: 'info',
    label: 'Info',
  },
]
