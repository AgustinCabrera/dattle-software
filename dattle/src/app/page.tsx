import { LoginForm } from "@/components/login-form"
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center">
            <div className="w-48 h-48 relative mb-8">
              <Image
              src="/logo.svg"
              alt="Cattle Software Logo"
              layout="fill"
              objectFit="contain"
              />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-center text-gray-900">
            CATTLE SOFTWARE
          </h1>
        <LoginForm />
      </div>
    </main>
  )
}

