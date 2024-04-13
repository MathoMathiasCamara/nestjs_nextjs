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
        <Card className="sm:mx-auto sm:w-full sm:max-w-[350px]">
          <CardHeader>
            <CardTitle>Connectez-vous</CardTitle>
            <CardDescription>Vous êtes à un clic de simplifier votre activité de location d'appartements.</CardDescription>
          </CardHeader>
          <CardContent className='space-y-3'>

            <div >
              <Label htmlFor="email">
                Email
              </Label>
              <Input
                id="username"
                name="username"
                type="email"
                placeholder='monemail@gmail.com'
                autoComplete="username"
                aria-describedby='username-error'
              />
              <div id='username-error' aria-live='polite' aria-atomic='true'>
                {
                  state.errors?.username && state.errors.username.map((error: string) => (
                    <p className='mt-2 text-sm text-red-500' key={error}>{error}</p>
                  ))
                }
              </div>
            </div>

            <div >
              <Label htmlFor="password" 
              className="block text-sm font-medium leading-6 text-gray-900">
                Mot de passe
              </Label>
              <div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder='m0nm0td3pass'
                  autoComplete="current-password"
                  aria-describedby='password-error'
                />
                <div id='password-error' aria-live='polite' aria-atomic='true'>
                  {
                    state.errors?.password && state.errors.password.map((error: string) => (
                      <p className='mt-2 text-sm text-red-500' key={error}>{error}</p>
                    ))
                  }
                </div>
              </div>
            </div>
            <div className='flex flex-row mt-2 justify-end'>
              <Link
                className='text-sm underline-offset-4 hover:underline'
                href="/change-password"
              >
                Mot de passe oublier?
              </Link>
            </div>

          </CardContent>
          <CardFooter className="flex justify-between">
            <Link
              className='text-primary underline-offset-4 hover:underline'
              href="/signup"
            >
              J'ai pas de compte
            </Link>

            <Button
              type="submit"
            >
              Se connecter
            </Button>
          </CardFooter>
        </Card>
      </form>
    </>
  )
}
