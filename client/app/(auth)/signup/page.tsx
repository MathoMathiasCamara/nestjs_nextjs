"use client"

import { State, signUp } from '@/app/(auth)/signup/signup.action'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import React from 'react'
import { useFormState } from 'react-dom'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function SignUp() {
  const initialState: State = { message: null, errors: undefined };
  const [state, dispatch] = useFormState(signUp, initialState);
  return (
    <>
      <form action={dispatch}>
        <Card className="sm:mx-auto sm:w-full sm:max-w-[350px]">
          <CardHeader>
            <CardTitle>Nouveau compte</CardTitle>
            <CardDescription>Créer votre nouveau compte en un clic.</CardDescription>
          </CardHeader>
          <CardContent className='space-y-3'>

            <div >
              <Label htmlFor="name">
                Prénoms et Nom
              </Label>
              <Input
                id="name"
                name="name"
                type="name"
                placeholder='Jhon Doe'
                autoComplete="name"
                aria-describedby='name-error'
              />
              <div id='name-error' aria-live='polite' aria-atomic='true'>
                {
                  state.errors?.name && state.errors.name.map((error: string) => (
                    <p className='mt-2 text-sm text-red-500' key={error}>{error}</p>
                  ))
                }
              </div>
            </div>

            <div >
              <Label htmlFor="phone">
                Télephone
              </Label>
              <Input
                id="phone"
                name="phone"
                type="phone"
                placeholder='+9112336547885'
                autoComplete="phone"
                aria-describedby='phone-error'
              />
              <div id='phone-error' aria-live='polite' aria-atomic='true'>
                {
                  state.errors?.phone && state.errors.phone.map((error: string) => (
                    <p className='mt-2 text-sm text-red-500' key={error}>{error}</p>
                  ))
                }
              </div>
            </div>

            <div >
              <Label htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder='monemail@gmail.com'
                autoComplete="email"
                aria-describedby='email-error'
              />
              <div id='email-error' aria-live='polite' aria-atomic='true'>
                {
                  state.errors?.email && state.errors.email.map((error: string) => (
                    <p className='mt-2 text-sm text-red-500' key={error}>{error}</p>
                  ))
                }
              </div>
            </div>

            <div >
              <Label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
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
            <div aria-live='polite' aria-atomic='true'>
              {
                state.message &&
                <p className='mt-2 text-sm text-red-500'>{state.message}</p>

              }
            </div>

          </CardContent>
          <CardFooter className="flex justify-between">
            <Link
              className='text-primary underline-offset-4 hover:underline'
              href="/signin"
            >
              J'ai un compte
            </Link>

            <Button
              type="submit"
            >
              Créer Compte
            </Button>
          </CardFooter>
        </Card>
      </form>
    </>
  )
}
