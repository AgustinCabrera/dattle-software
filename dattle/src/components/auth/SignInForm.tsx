"use client";
import React from 'react'
import { Flex, TextField, Button} from '@radix-ui/themes'
import { EnvelopeClosedIcon, LockClosedIcon } from '@radix-ui/react-icons';

const SignInForm = () => {
  return (
    <Flex direction="column" gap="2">
      <label htmlFor="email">E-mail</label>
      <TextField.Root>
        <TextField.Slot>
            <EnvelopeClosedIcon height="16" width="16" />
        </TextField.Slot>
        <TextField.Input id="email" type="email" placeholder="e-mail" />
      </TextField.Root>

      <label htmlFor="password">Password</label>
      <TextField.Root>
        <TextField.Slot>
            <LockClosedIcon height="16" width="16" />
        </TextField.Slot>
        <TextField.Input id="password" type="password" placeholder="********" />
      </TextField.Root>

      <Button>
        Sign In
      </Button>
    </Flex>
  )
}
export default SignInForm
