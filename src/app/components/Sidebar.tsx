import { NavLink } from 'react-router'

type SidebarProps = {
  isOpen: boolean
  onNavigate: () => void
}

function Sidebar({ isOpen, onNavigate }: SidebarProps) {
  return (
    <>
      {isOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={onNavigate}
          className="fixed inset-0 z-40 bg-black/30 md:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-60 border-r bg-white pt-16 transition-transform duration-200 md:static md:z-auto md:translate-x-0 md:pt-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="p-3" aria-label="Main navigation">
          <ul className="space-y-1">
            <li>
              <NavLink
                to="/"
                onClick={onNavigate}
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-sm font-medium ${
                    isActive ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'
                  }`
                }
              >
                Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/services"
                onClick={onNavigate}
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-sm font-medium ${
                    isActive ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'
                  }`
                }
              >
                Services
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/incidents"
                onClick={onNavigate}
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-sm font-medium ${
                    isActive ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'
                  }`
                }
              >
                Incidents
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  )
}

export default Sidebar
