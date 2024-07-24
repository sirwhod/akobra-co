
import { Link, Outlet } from 'react-router-dom'

import { Header } from '@/components/app/header'

export function DefaultLayout() {

  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <Outlet />
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 AKOBRA Co. Todos os direitos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link to="#" className="text-xs hover:underline underline-offset-4">
            Termos de Serviço
          </Link>
          <Link to="#" className="text-xs hover:underline underline-offset-4">
            Privacidade
          </Link>
        </nav>
      </footer>
    </div>
  )
}