'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button';
import signOut from '../(auth)/signout.action';
import ProfileAvatar from './profile-avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'


export default function ProfileDropdownMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className="overflow-hidden rounded-full"
                >
                    <ProfileAvatar url='/user.jpg' />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <Link href='/user/profile'>
                    <DropdownMenuItem>Mon profile</DropdownMenuItem>
                </Link>
                {/* <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem> */}
                {/* <DropdownMenuSeparator /> */}
                <form action={signOut}>
                    <button role="menuitem" id="user-menu-item-1">
                        <DropdownMenuItem>Se deconnecter</DropdownMenuItem>
                    </button>
                </form>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
