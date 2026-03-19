import { LoginSteam } from '@/components/login-form'
import { Button } from '@/components/ui/button'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {

  return (
    <div className="grid grid-cols-[60%_1fr] gap-4">
      <div className="bg-[url(/bg.webp)] bg-position-[50%] bg-cover bg-no-repeat"></div>
      <div className="flex items-center justify-center h-screen">

        <LoginSteam></LoginSteam>

      </div>
    </div>
  )
}
