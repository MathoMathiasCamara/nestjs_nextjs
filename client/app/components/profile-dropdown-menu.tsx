'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button';
import signOut from '../(auth)/signout.action';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import ProfileAvatar from './profile-avatar';
import UserName from './user-name';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function ProfileDropdownMenu() {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>
                        <span className="sr-only">Open user menu</span>
                        <ProfileAvatar url="/user.jpg" />
                        <UserName name="Tim Cook" />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <Link href="/user/profile" className="block px-3 py-1 text-sm leading-6 text-gray-900 hover:bg-gray-900/10" role="menuitem" id="user-menu-item-0">
                            <NavigationMenuLink>
                                Mon profile
                            </NavigationMenuLink>
                        </Link>
                        <form action={signOut} className="block px-3 py-1 text-sm leading-6 text-gray-900 hover:bg-gray-900/10">
                            <button role="menuitem" id="user-menu-item-1">
                                <NavigationMenuLink>Deconnecter</NavigationMenuLink>
                            </button>
                        </form>                      
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
