import type { RefObject } from 'react'

import { Button } from '@/components/ui/button'

import type { Severity } from '../types/incident'
import { severityOptions } from '../constants/incident'

type IncidentFiltersProps = {
  search: string
  severity: Severity
  searchInputRef: RefObject<HTMLInputElement | null>
  onSearchChange: (value: string) => void
  onSeverityChange: (value: Severity) => void
}

function IncidentFilters({
  search,
  severity,
  searchInputRef,
  onSearchChange,
  onSeverityChange,
}: IncidentFiltersProps) {
  return (
    <>
      <section aria-label="Incident filters" className="flex flex-col gap-4 md:flex-row">
        <input
          ref={searchInputRef}
          type="search"
          placeholder="Search incidents..."
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          className="h-10 flex-1 rounded-md border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
        />

        <select
          value={severity}
          onChange={(event) => onSeverityChange(event.target.value as Severity)}
          className="h-10 rounded-md border bg-background px-3 text-sm"
        >
          {severityOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </section>

      <Button type="button" variant="outline" onClick={() => searchInputRef.current?.focus()}>
        Focus Search
      </Button>
    </>
  )
}

export default IncidentFilters
