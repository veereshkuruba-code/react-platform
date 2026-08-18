import { createBrowserRouter } from 'react-router'
import AppLayout from '../layouts/AppLayout'
import DashboardHome from '../../features/dashboard/DashboardHome'
import ServicesPage from '../../features/services/ServicesPage'
import IncidentsPage from '../../features/incidents/IncidentsPage'
import NotFoundPage from '../pages/NotFoundPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: 'services',
        element: <ServicesPage />,
      },
      {
        path: 'incidents',
        element: <IncidentsPage />,
      },
      {
  path: '*',
  element: <NotFoundPage />,
},
    ],
  },
])
