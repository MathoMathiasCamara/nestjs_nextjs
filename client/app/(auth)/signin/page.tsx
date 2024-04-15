"use client"

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import React from 'react'
import signIn, { State } from './signin.action'
import { useFormState } from 'react-dom'

export default function SignIn() {

  const initialState: State = { message: null, errors: {} };
  const [state, dispatch] = useFormState(signIn, initialState);
  return (
    <>
      <form className='space-y-3' action={dispatch}>
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Se connecter</CardTitle>
            <CardDescription>
              Entrez votre email ci-dessous pour vous connecter à votre compte
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="username">Email</Label>
                <Input
                  id="username"
                  name='username'
                  type="email"
                  placeholder="m@example.com"
                />
                <div id='username-error' aria-live='polite' aria-atomic='true'>
                  {
                    state.errors?.username && state.errors.username.map((error: string) => (
                      <p className='mt-2 text-sm text-red-500' key={error}>{error}</p>
                    ))
                  }
                </div>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link href="/change-password" className="ml-auto inline-block text-sm underline">
                    Mot de passe oublié?
                  </Link>
                </div>
                <Input id="password" name='password' type="password" />
                <div id='password-error' aria-live='polite' aria-atomic='true'>
                  {
                    state.errors?.password && state.errors.password.map((error: string) => (
                      <p className='mt-2 text-sm text-red-500' key={error}>{error}</p>
                    ))
                  }
                </div>
              </div>
              <div id='message-error' aria-live='polite' aria-atomic='true'>
                {
                  state.message &&
                  <p className='mt-2 text-sm text-red-500' >{state.message}</p>
                }
              </div>
              <Button type="submit" className="w-full">
                Se connecter
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Vous n&apos;avez pas de compte?{" "}
              <Link href="/signup" className="underline">
                S'inscrire
              </Link>
            </div>
          </CardContent>
        </Card>
      </form>
    </>
  )
}
