'use client'

import React from 'react'
import UserProfile from '../profile/user-profile'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { useFormState } from 'react-dom'
import { State, changePassword } from './change-password.action'

export default function ChangePasswordForm({ profile }: { profile: UserProfile | undefined }) {
    const initialState : State  = { message: null, errors: undefined };
    const changePasswordWithId = changePassword.bind(null, profile?.id ?? 0);
    const [state, dispatch] = useFormState(changePasswordWithId, initialState);
    return (
        <>
            <form action={dispatch} >
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle className="text-xl">Changer mot de passe</CardTitle>
                        <CardDescription>
                            Entrez votre nouveau mot de passe
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        className='sr-only w-0'
                        defaultValue={profile?.email}
                    />
                        <div className="grid gap-2">
                            <Label htmlFor="newPassword"
                                className="block text-sm font-medium leading-6 text-gray-900">
                                Nouveau mot de passe
                            </Label>
                            <Input
                                id="newPassword"
                                name="newPassword"
                                type="password"
                                placeholder='secret'
                                autoComplete="password"
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
                        {state.message && <div id='phone-error' aria-live='polite' aria-atomic='true'>
                            {
                                state.message &&
                                <p className='mt-2 text-sm text-red-500' key={state.message}>{state.message}</p>
                            }
                        </div>}
                        <div className="mt-6 flex items-center justify-between gap-x-6">
                            <Link
                                href="/user/profile"
                            >
                                <Button variant='outline'>
                                    Annuler
                                </Button>
                            </Link>
                            <Button
                                type="submit"
                            >
                                Changer
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </form></>
    )
}
