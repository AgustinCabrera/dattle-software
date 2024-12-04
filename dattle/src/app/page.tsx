import { LoginForm } from "@/components/login-form"

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 relative mb-8">
            <div className="rounded-full border-2 border-black p-4">
              <img
                src="/cattle-logo.svg"
                alt="Cattle Software Logo"
                className="w-full h-full"
              />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-center text-gray-900">
            CATTLE SOFTWARE
          </h1>
        </div>
        <LoginForm />
      </div>
    </main>
  )
}

