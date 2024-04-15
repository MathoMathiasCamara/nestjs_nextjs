import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { KeyIcon, PhoneOutgoingIcon, UserCircleIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { getProfile } from './actions'

export default async function Profile() {

  const userProfile = await getProfile();
  return (
    <form>
      <div className="space-y-12">
        {/* <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            

            <div className="col-span-full">
              <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Change
                </button>
              </div>
            </div>     
          </div>
        </div> */}

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <Label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </Label>
              <div className="mt-2">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  defaultValue={userProfile?.email}
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <Label htmlFor="fullname" className="block text-sm font-medium leading-6 text-gray-900">
                Prenoms & Nom
              </Label>
              <div className="mt-2">
                <Input
                  type="text"
                  name="fullname"
                  id="fullname"
                  defaultValue={userProfile?.fullname}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <Label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                Telephone
              </Label>
              <div className="mt-2">
                <Input
                  type="text"
                  name="phone"
                  defaultValue={userProfile?.phone}
                  id="phone"
                  autoComplete="phone"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <Link href='/user/change-password'>
            <Button variant='outline' className='mt-3'>
              <KeyIcon width={12} height={12} className='mr-2' />
              Changer Mot de passe
            </Button>
          </Link>
        </div>
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
    </form>
  )
}
