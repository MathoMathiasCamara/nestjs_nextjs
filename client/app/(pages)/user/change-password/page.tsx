import BreadCrumb, { BreadCrumbItem } from '@/app/components/breadcrumb'
import { Button } from '@/components/ui/button'
import { CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import React from 'react'

export default function ChangePassword() {
  const breadcrumbItems: BreadCrumbItem[] = [
    {
      label: 'Profile',
      href: '/user/profile'
    },
    {
      label: 'Change Mot de passe',
      href: '/user/change-password'
    },
  ];
  return (
    <>
      <BreadCrumb items={breadcrumbItems}  />
      <form className='space-y-3'  >

        <p>Veuillez remplir les champs dessous.</p>

        <div >
          <Label htmlFor="newPassword"
            className="block text-sm font-medium leading-6 text-gray-900">
            Nouveau Mot de passe
          </Label>
          <div>
            <Input
              id="newPassword"
              name="newPassword"
              type="password"
              placeholder='secret'
              autoComplete="confimrNewPassword"
              aria-describedby='confimrNewPassword-error'
            />
          </div>
        </div>

        <div >
          <Label htmlFor="confimrNewPassword"
            className="block text-sm font-medium leading-6 text-gray-900">
            Nouveau Mot de passe
          </Label>
          <div>
            <Input
              id="confimrNewPassword"
              name="confimrNewPassword"
              type="password"
              placeholder='secret'
              autoComplete="confimrNewPassword"
              aria-describedby='confimrNewPassword-error'
            />
          </div>
        </div>

        <div className="flex justify-between">
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

      </form></>
  )
}
