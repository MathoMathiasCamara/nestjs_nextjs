import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import React, { ReactNode } from 'react'
import TopNav from '../components/top-nav'
import SideBar from '../components/side-bar'

import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import NavLinks from '../components/nav-links'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. --> */}
      <div className="relative z-50 lg:hidden" role="dialog" aria-modal="true">
        {/* <!--
            Off-canvas menu backdrop, show/hide based on off-canvas menu state.

            Entering: "transition-opacity ease-linear duration-300"
            From: "opacity-0"
            To: "opacity-100"
            Leaving: "transition-opacity ease-linear duration-300"
            From: "opacity-100"
            To: "opacity-0"
        --> */}
        <div className="fixed inset-0 bg-gray-900/80"></div>

        <div className="fixed inset-0 flex">
          {/* <!--
              Off-canvas menu, show/hide based on off-canvas menu state.

              Entering: "transition ease-in-out duration-300 transform"
              From: "-translate-x-full"
              To: "translate-x-0"
              Leaving: "transition ease-in-out duration-300 transform"
              From: "translate-x-0"
              To: "-translate-x-full"
          --> */}
          <div className="relative mr-16 flex w-full max-w-xs flex-1">
            {/* <!--
                Close button, show/hide based on off-canvas menu state.

                Entering: "ease-in-out duration-300"
                From: "opacity-0"
                To: "opacity-100"
                Leaving: "ease-in-out duration-300"
                From: "opacity-100"
                To: "opacity-0"
            --> */}
            <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
              <Button className="-m-2.5 p-2.5">
                <span className="sr-only">Close sidebar</span>
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </Button>
            </div>

            {/* <!-- Sidebar component, swap this element with another sidebar if you like --> */}
            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
              <div className="flex h-16 shrink-0 items-center">
                <Image width={32} height={32} src="/verce.svg" alt="Your Company" />
              </div>
              <NavLinks/>
            </div>
          </div>
        </div>
      </div>

      <SideBar/>
      <div className="lg:pl-72">
       <TopNav/>
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
