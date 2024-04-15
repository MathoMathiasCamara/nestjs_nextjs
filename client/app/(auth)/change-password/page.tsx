'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import React from 'react'
import changePassword, { State } from './change-password.action'
import { useFormState } from 'react-dom'

export default function ChangePassword() {
    const initialState: State = { message: undefined, errors: {} };
    const [state, dispatch] = useFormState(changePassword, initialState);
    return (
        <>
            <form className='space-y-3' action={dispatch} >
            <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Changer votre mot de passe</CardTitle>
            <CardDescription>
              Entrez votre email et votre nouveau mot de passe ci-dessous
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name='email'
                  type="email"
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
                <Label htmlFor="newPassword">Nouveau Mot de passe</Label>
                <Input id="newPassword" name='newPassword' type="password" />
                <div id='newPassword-error' aria-live='polite' aria-atomic='true'>
                  {
                    state.errors?.newPassword && state.errors.newPassword.map((error: string) => (
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
                Changer mot de passe
              </Button>
              
            </div>
            <div className="mt-4 text-center text-sm">
              Vous avez un compte?{" "}
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
