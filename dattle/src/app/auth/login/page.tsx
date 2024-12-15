import { Container, Card, Flex,Heading  } from '@radix-ui/themes'
import Image from "next/image"
import SignInForm from "../../../components/auth/SignInForm";
import Link from "next/link"

export default function LoginPage() {
  return (
    <Container size="1" height="100%" className="p-3 md:p-0">
    <Flex className="h-screen w-full items-center">
      <Card className="w-full overflow-hidden">
        <Flex>
          <div className="relative hidden w-1/2 md:block">
            <Image
              src="/cows.jpeg"
              alt="Login page image"
              width={600}
              height={600}
              className="object-cover"
              priority
            />
          </div>
          <Flex direction="column" className="w-full md:w-1/2 p-8">
            <Heading size="6" mb="2">Logo</Heading>
            <Heading size="5" mb="6">Sign into your account</Heading>
            <SignInForm />
            <Flex justify="between" mt="4">
              <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                Forgot Password?
              </Link>
              <div className="text-sm">
                Don't have an account?{' '}
                <Link href="/register" className="text-blue-600 hover:underline">
                  Register here
                </Link>
              </div>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </Flex>
    </Container>
  )
}



