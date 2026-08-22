import type { Incident } from '../types/incident'

export const incidents: Incident[] = [
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
