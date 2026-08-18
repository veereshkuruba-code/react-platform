import { NavLink } from 'react-router'

function Sidebar() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/incidents">Incidents</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
