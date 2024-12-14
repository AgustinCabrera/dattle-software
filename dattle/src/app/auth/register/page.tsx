import React from 'react';
import { Container, Card, Heading, Flex, Text, Link } from '@radix-ui/themes';
import NavLink from "next/link";
import RegisterForm from '../../../components/auth/SignUpForm';

const RegisterPage = () => {
  return (
    <>
      <Container size="1" height="100%" className="p-3 md:p-0">
        <Flex className="h-screen w-full items-center">
          <Card className="w-full">
            <Heading>Sign Up</Heading>
            <RegisterForm/>
            <Flex justify="between" my="4">
              <Text>Already have an account?</Text>
              {/* Ensure a single element as a child for Radix Link */}
              <Link asChild>
                <NavLink href="/auth/login">Sign In</NavLink>
              </Link>
            </Flex>
          </Card>
        </Flex>
      </Container>
    </>
  );
};

export default RegisterPage;
