import { useState } from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <>
      <Header
        title="React Platform"
        isSidebarOpen={isSidebarOpen}
        onSidebarToggle={() => setIsSidebarOpen((current) => !current)}
      />

      <div className="app-layout">
        {isSidebarOpen && <Sidebar />}

        <Outlet />
      </div>
    </>
  )
}

export default AppLayout
