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
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-xl">S'inscrire</CardTitle>
            <CardDescription>
              Entrez vos informations pour créer un compte
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Prenoms & Nom</Label>
                <Input
                  id="name"
                  name='name'
                  placeholder="John Doe" />
                <div id='name-error' aria-live='polite' aria-atomic='true'>
                  {
                    state.errors?.name && state.errors.name.map((error: string) => (
                      <p className='mt-2 text-sm text-red-500' key={error}>{error}</p>
                    ))
                  }
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Telephone</Label>
                <Input
                  id="phone"
                  type='phone'
                  name='phone'
                  placeholder="+22312345678" />
                <div id='phone-error' aria-live='polite' aria-atomic='true'>
                  {
                    state.errors?.phone && state.errors.phone.map((error: string) => (
                      <p className='mt-2 text-sm text-red-500' key={error}>{error}</p>
                    ))
                  }
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name='email'
                  placeholder="m@example.com"
                />
                <div id='email-error' aria-live='polite' aria-atomic='true'>
                  {
                    state.errors?.email && state.errors.email.map((error: string) => (
                      <p className='mt-2 text-sm text-red-500' key={error}>{error}</p>
                    ))
                  }
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Mot de passe</Label>
                <Input id="password" type="password" name='password' />
                <div id='password-error' aria-live='polite' aria-atomic='true'>
                  {
                    state.errors?.password && state.errors.password.map((error: string) => (
                      <p className='mt-2 text-sm text-red-500' key={error}>{error}</p>
                    ))
                  }
                </div>
              </div>
              <Button type="submit" className="w-full">
                Créer un compte
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Vous avez déjà un compte?{" "}
              <Link href="/signin" className="underline">
                Se connecter
              </Link>
            </div>
          </CardContent>
        </Card>
      </form>
    </>
  )
}
