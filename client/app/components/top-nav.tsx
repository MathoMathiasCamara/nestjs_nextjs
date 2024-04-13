'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import React, { useState } from 'react'
import SearchBar from './search-bar'
import { BellIcon, MenuIcon } from 'lucide-react'
import ProfileDropdownMenu from './profile-dropdown-menu'

export default function TopNav() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (

    // TODO
    // add side bar for mobile

    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <Button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
        <span className="sr-only">Open sidebar</span>
        <MenuIcon className="h-6 w-6" />
      </Button>

      {/* <!-- Separator --> */}
      <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true"></div>

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <SearchBar />
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <Button variant='link' className="-m-2.5 p-2.5">
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </Button>

          {/* <!-- Separator --> */}
          <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true"></div>

          {/* <!-- Profile dropdown --> */}
          <ProfileDropdownMenu/>
        </div>
      </div>
    </div>
  )
}
