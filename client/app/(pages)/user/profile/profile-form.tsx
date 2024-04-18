'use client'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { KeyIcon } from 'lucide-react'
import Link from 'next/link'
import UserProfile from './user-profile'
import { State, updateProfile } from './actions'
import { useFormState } from 'react-dom'
import { BreadCrumbItem } from '@/lib/breadcrumbItem'
import { changeBreadcrumb } from '@/lib/features/breadcrumbsSlice'
import { useDispatch } from 'react-redux'
import updateBreadcrumbs from '@/lib/breadcrumb.action'


export default function ProfileForm({ profile }: { profile: UserProfile | undefined }) {

    // update the breadcrumb using redux
    updateBreadcrumbs([
        {
            label: 'Profile',
            href: '/user/profile',
            isPage: true
        }
    ]);

    //form state & action
    const initialState: State = { message: null, errors: undefined };
    const updateProfileWithId = updateProfile.bind(null, profile?.id ?? 0);
    const [state, dispatchAction] = useFormState(updateProfileWithId, initialState);

    return (
        <form action={dispatchAction}>
            <Card className="w-full">
                <CardHeader>
                    <CardTitle className="text-xl">Profile</CardTitle>
                    <CardDescription>
                        Informations de votre compte
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Input
                        id="id"
                        name="id"
                        type="number"
                        className='sr-only w-0'
                        defaultValue={profile?.id}
                    />
                    <div className="grid gap-4">

                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                defaultValue={profile?.email}
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

                        <div className="grid gap-2">
                            <Label htmlFor="fullname">Prenoms & Nom</Label>
                            <Input
                                id="fullname"
                                name='fullname'
                                defaultValue={profile?.fullname}
                                placeholder="John Doe"
                                aria-describedby='fullname-error'
                            />
                            <div id='fullname-error' aria-live='polite' aria-atomic='true'>
                                {
                                    state.errors?.fullname && state.errors.fullname.map((error: string) => (
                                        <p className='mt-2 text-sm text-red-500' key={error}>{error}</p>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="phone">
                                Telephone
                            </Label>
                            <Input
                                type="text"
                                name="phone"
                                defaultValue={profile?.phone}
                                id="phone"
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
                        <Link href='/user/change-password' className='w-12'>
                            <Button variant='outline' className='mt-3'>
                                <KeyIcon width={12} height={12} className='mr-2' />
                                Changer mot de passe
                            </Button>
                        </Link>
                        {state.message && <div id='phone-error' aria-live='polite' aria-atomic='true'>
                            {
                                state.message &&
                                <p className='mt-2 text-sm text-red-500' key={state.message}>{state.message}</p>
                            }
                        </div>}
                    </div>
                    <div className="mt-6 flex items-center justify-between gap-x-6">
                        <Link href="/dashboard">
                            <Button type="button" variant='outline' >
                                Annuler
                            </Button>
                        </Link>
                        <Button
                            type="submit"
                        >
                            Enregistrer
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </form>
    )
}
