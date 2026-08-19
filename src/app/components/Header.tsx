type HeaderProps = {
  title: string
  isSidebarOpen: boolean
  onSidebarToggle: () => void
}

function Header({ title, isSidebarOpen, onSidebarToggle }: HeaderProps) {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-4 shadow-sm">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onSidebarToggle}
          aria-label={isSidebarOpen ? 'Hide sidebar' : 'Show sidebar'}
          className="rounded-md p-2 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400"
        >
          ☰
        </button>

        <h1 className="text-lg font-semibold text-slate-900">{title}</h1>
      </div>
    </header>
  )
}

export default Header
