import { MountainIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AccountMenu } from './account-menu'


export function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link to="#" className="flex items-center justify-center">
        <MountainIcon className="size-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <AccountMenu />
      </nav>
    </header>
  )
}