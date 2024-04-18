'use client'

import React, { useState } from 'react'
import SearchBar from './search-bar'
import ProfileDropdownMenu from './profile-dropdown-menu'
import SideBarMobile from './side-bar.mobile'
import BreadCrumb from './breadcrumb'
import { useSelector } from 'react-redux'

export default function TopNav() {
  const breadcrumbs = useSelector((state) => state.breadcrumbs.value);
  console.log('breadcrumb',breadcrumbs);

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <SideBarMobile/>
      <BreadCrumb items={breadcrumbs} />
      <SearchBar />
      <ProfileDropdownMenu />
    </header>
  )
}
