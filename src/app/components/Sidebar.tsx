import { NavLink } from 'react-router'
import { useSidebarStore } from '../store/sidebarStore'

function Sidebar() {
  const isOpen = useSidebarStore((state) => state.isOpen)

  const close = useSidebarStore((state) => state.close)

  return (
    <>
      {isOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={close}
          className="fixed inset-0 z-40 bg-black/30 md:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-60 border-r bg-white pt-16 transition-[transform,width] duration-200 md:static md:z-auto md:pt-0 ${
          isOpen
            ? 'translate-x-0 md:w-60'
            : '-translate-x-full md:w-0 md:overflow-hidden md:border-r-0'
        }`}
      >
        <nav className="p-3" aria-label="Main navigation">
          <ul className="space-y-1">
            <li>
              <NavLink
                to="/"
                // onClick={close}
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-sm font-medium ${
                    isActive
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`
                }
              >
                Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/services"
                // onClick={close}
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-sm font-medium ${
                    isActive
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`
                }
              >
                Services
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/incidents"
                // onClick={close}
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-sm font-medium ${
                    isActive
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-700 hover:bg-slate-100'
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
