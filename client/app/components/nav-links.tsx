'use client'

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from 'next/navigation';
import { Building2, PieChart } from "lucide-react";

const links = [
    { name: 'Tableau de board', href: '/dashboard', icon: PieChart },
    { name: 'Appartements', href: '/apartement', icon: Building2 },
];

export default function NavLinks() {

    const pathname = usePathname();
    return (
        <nav className="flex flex-1 flex-col">
            <ul role="list" className="-mx-2 space-y-1">
                {links.map((link) => {
                    const LinkIcon = link.icon;
                    return (
                        <li key={link.name}>
                        <Link
                            href={link.href}
                            key={link.name}
                            className={cn(
                                link.href === pathname
                                    ? 'bg-gray-800 text-white'
                                    : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                            )}
                        >
                            <LinkIcon className="h-6 w-6"/>
                            {link.name}
                        </Link>
                    </li>
                    );
                }
                )}
            </ul>
        </nav>
    )
}
