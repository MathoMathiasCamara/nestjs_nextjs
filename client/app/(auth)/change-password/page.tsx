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
                <Card className="mt-16 sm:mx-auto sm:w-full sm:max-w-[350px]">
                    <CardHeader>
                        <CardTitle>Nouveau mot de passe</CardTitle>
                        <CardDescription>Veuillez remplir les champs dessous.</CardDescription>
                    </CardHeader>
                    <CardContent className='space-y-3'>

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
                            <Label htmlFor="newPassword"
                                className="block text-sm font-medium leading-6 text-gray-900">
                                Nouveau Mot de passe
                            </Label>
                            <div>
                                <Input
                                    id="newPassword"
                                    name="newPassword"
                                    type="newPassword"
                                    placeholder='secret'
                                    autoComplete="current-password"
                                    aria-describedby='newPassword-error'
                                />
                                <div id='newPassword-error' aria-live='polite' aria-atomic='true'>
                                    {
                                        state.errors?.newPassword && state.errors.newPassword.map((error: string) => (
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
                            Annuler
                        </Link>

                        <Button
                            type="submit"
                        >
                            Changer mot de passe
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </>
    )
}
