type HeaderProps = {
  title: string
  isSidebarOpen: boolean
  onSidebarToggle: () => void
}

function Header({ title, isSidebarOpen, onSidebarToggle }: HeaderProps) {
  return (
    <header>
      <h1>{title}</h1>

      <button type="button" onClick={onSidebarToggle}>
        {isSidebarOpen ? 'Hide menu' : 'Show menu'}
      </button>
    </header>
  )
}

export default Header
