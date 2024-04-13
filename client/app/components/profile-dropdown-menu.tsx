'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function ProfileDropdownMenu() {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div className="relative">
            <button type="button"
                className="-m-1.5 flex items-center p-1.5"
                id="user-menu-button" aria-expanded="false"
                aria-haspopup="true" onClick={() => setShowDropdown(!showDropdown)}>
                <span className="sr-only">Open user menu</span>
                <Image className="rounded-full bg-gray-50" width={32} height={32}
                    src="/user.jpg" alt="" />
                <span className="hidden lg:flex lg:items-center">
                    <span className="ml-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">Tom Cook</span>
                    <svg className="ml-2 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd" />
                    </svg>
                </span>
            </button>

            {/* <!--
              Dropdown menu, show/hide based on menu state.

              Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
      --> */}
            {showDropdown &&
                <div className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
                    role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" >
                    {/* <!-- Active: "bg-gray-50", Not Active: "" --> */}
                    <Link href="#" className="block px-3 py-1 text-sm leading-6 text-gray-900 hover:bg-gray-900/10" role="menuitem" id="user-menu-item-0">Your profile</Link>
                    <Link href="#" className="block px-3 py-1 text-sm leading-6 text-gray-900 hover:bg-gray-900/10" role="menuitem" id="user-menu-item-1">Sign out</Link>
                </div>
            }
        </div>
    )
}
