import { useSidebarStore } from '../store/sidebarStore'

import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '@/app/store/store'
import { toggleTheme } from '@/app/store/themeSlice'

type HeaderProps = {
  title: string
}

function Header({ title }: HeaderProps) {
  const isSidebarOpen = useSidebarStore((state) => state.isOpen)
  const toggleSidebar = useSidebarStore((state) => state.toggle)
  console.log('Header sidebar state:', isSidebarOpen)


  const dispatch = useDispatch<AppDispatch>()

const theme = useSelector(
  (state: RootState) => state.theme.mode
)

  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-4 shadow-sm">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={toggleSidebar}
          aria-label={isSidebarOpen ? 'Hide sidebar' : 'Show sidebar'}
          className="rounded-md p-2 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400"
        >
          ☰
        </button>

        <h1 className="text-lg font-semibold text-slate-900">
          {title}
        </h1>
      </div>

      <button
  type="button"
  onClick={() => dispatch(toggleTheme())}
>
  {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
</button>
    </header>
  )
}

export default Header