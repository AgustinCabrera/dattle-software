"use client";

import React, { useEffect, useState } from "react";
import { Flex, TextField, Button, Text } from "@radix-ui/themes";
import { EnvelopeClosedIcon, LockClosedIcon } from "@radix-ui/react-icons";
import { Controller, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation';

const SignInForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    const res = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password
    });

    if (!res?.ok) {
      console.log(res);
    }
    
    if (isClient) {
      router.push("/dashboard");
    }
  });

  if (!isClient) {
    return null; 
  }

  return (
    <form onSubmit={onSubmit}>
      <Flex direction="column" gap="2">
        <label htmlFor="email">E-mail</label>
        <TextField.Root>
          <TextField.Slot>
            <EnvelopeClosedIcon height="16" width="16" />
          </TextField.Slot>
          <Controller
            name="email"
            control={control}
            rules={{
              required: {
                value: true,
                message: "e-mail is required"
              }
            }}
            render={({ field }) => {
              return (
                <TextField.Input
                  id="email"
                  type="email"
                  placeholder="e-mail"
                  autoFocus
                  {...field}
                />
              );
            }}
          />
        </TextField.Root>
        {errors.email && typeof errors.email.message === "string" && (
          <Text color="red" className="text-xs">{errors.email.message}</Text>
        )}

        <label htmlFor="password">Password</label>
        <TextField.Root>
          <TextField.Slot>
            <LockClosedIcon height="16" width="16" />
          </TextField.Slot>
          <Controller
            name="password"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Password is required"
              },
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters"
              }
            }}
            render={({ field }) => {
              return (
                <TextField.Input
                  id="password"
                  type="password"
                  placeholder="********"
                  autoFocus
                  {...field}
                />
              );
            }}
          />
        </TextField.Root>
        {errors.password && typeof errors.password.message === "string" && (
          <Text color="red" className="text-xs">{errors.password.message}</Text>
        )}
        <Button type="submit" mt="4">
          Sign In
        </Button>
      </Flex>
    </form>
  );
};

export default SignInForm;

