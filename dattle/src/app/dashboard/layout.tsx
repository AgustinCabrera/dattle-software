import { BottomNav } from "../../components/bottom-nav"
import { MainNav } from "../../components/main-nav"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        <MainNav />
        <main className="flex-1 p-4">{children}</main>
      </div>
      <BottomNav />
    </div>
  )
}

