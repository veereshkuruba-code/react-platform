import IncidentCard from './IncidentCard'
import type { Incident } from '../types/incident'

type IncidentListProps = {
  incidents: Incident[]
}

function IncidentList({ incidents }: IncidentListProps) {
  return (
    <section
      aria-label="Filtered incidents"
      className="grid gap-4 md:grid-cols-2"
    >
      {incidents.map((incident) => (
        <IncidentCard
          key={incident.id}
          incident={incident}
        />
      ))}
    </section>
  )
}

export default IncidentList