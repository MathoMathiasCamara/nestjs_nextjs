'use client'

import React, { useState } from 'react'
import SearchBar from './search-bar'
import ProfileDropdownMenu from './profile-dropdown-menu'
import SideBarMobile from './side-bar.mobile'
import BreadCrumb, { BreadCrumbItem } from './breadcrumb'

export default function TopNav() {

  const breadcrumbItems: BreadCrumbItem[] = [
    {
      label: 'Page 1',
      href: '#',
      isPage: false
    },
    {
      label: 'Page 2',
      href: '#',
      isPage: false
    },
    {
      label: 'Current Page ',
      href: '#',
      isPage: true
    }
  ]

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <SideBarMobile/>
      <BreadCrumb items={breadcrumbItems} />
      <SearchBar />
      <ProfileDropdownMenu />
    </header>
  )
}
