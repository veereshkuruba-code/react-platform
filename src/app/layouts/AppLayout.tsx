import { useEffect } from 'react'
import { Outlet } from 'react-router'

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { useSidebarStore } from '../store/sidebarStore'

function AppLayout() {
  const closeSidebar = useSidebarStore((state) => state.close)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeSidebar()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [closeSidebar])

  return (
    <div className="min-h-screen bg-slate-50">
      <Header title="React Platform" />

      <div className="flex">
        <Sidebar />

        <main className="min-w-0 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AppLayout