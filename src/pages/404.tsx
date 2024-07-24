import { Factory } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card'

export function NotFound() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Card className="w-[420px]">
        <header className="flex w-full flex-row items-center justify-start gap-3 border-b">
          <div className="flex gap-1 py-2 pl-3">
            <div className="h-3 w-3 rounded-full bg-green-400 dark:bg-green-500" />
            <div className="h-3 w-3 rounded-full bg-amber-400 dark:bg-amber-500" />
            <div className="h-3 w-3 rounded-full bg-red-400 dark:bg-red-500" />
          </div>

          <div className="flex items-center gap-1">
            <Factory className="h-4 w-4" />
            <span className="font-mono text-xs text-muted-foreground">
              AKOBRA CO
            </span>
          </div>
        </header>
        <div className="p-4 text-center">
          <CardTitle className="font-mono text-4xl lg:text-9xl">404</CardTitle>
          <CardDescription>
            A página que você está procurando não existe!
          </CardDescription>
        </div>
        <CardFooter className="flex justify-center">
          <Button asChild>
            <Link to="/">Voltar</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}