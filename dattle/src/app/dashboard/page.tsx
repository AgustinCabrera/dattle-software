import Principal from "@/components/principal"


export default function Dashboard() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p>Welcome to Cattle Software. Select an option from the navigation menu to get started.</p>
      <Principal />
    </div>
  )
}

