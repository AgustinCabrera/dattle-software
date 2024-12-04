"use client"

import { MilkIcon as Cow, Stethoscope, Milk } from 'lucide-react'
import { Button } from './ui/button'

export function MainNav() {
  return (
    <div className="flex flex-col gap-4 p-4 border-r border-gray-200">
      <Button variant="ghost" className="w-16 h-16" aria-label="Cattle Management">
        <Cow className="w-8 h-8" />
      </Button>
      <Button variant="ghost" className="w-16 h-16" aria-label="Health Records">
        <Stethoscope className="w-8 h-8" />
      </Button>
      <Button variant="ghost" className="w-16 h-16" aria-label="Production">
        <Milk className="w-8 h-8" />
      </Button>
    </div>
  )
}

