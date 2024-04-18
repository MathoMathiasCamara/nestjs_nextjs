'use client'

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from 'next/navigation';
import { Building2, PieChart } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export const links = [
    { name: 'Tableau de board', href: '/dashboard', icon: PieChart },
    { name: 'Appartements', href: '/apartements', icon: Building2 },
];

export default function NavLinks() {

    const pathname = usePathname();
    return (
        <>
            {
                links.map((link) => {
                    const LinkIcon = link.icon;
                    return (
                        <TooltipProvider key={link.href}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={link.href}
                                        className={
                                            cn(
                                                pathname === link.href ?
                                                'bg-accent text-accent-foreground' :
                                                'text-muted-foreground',                                                
                                                'flex h-9 w-9 items-center justify-center transition-colors hover:text-foreground md:h-8 md:w-8 rounded-lg')
                                        }
                                    >
                                        <LinkIcon className="h-5 w-5" />
                                        <span className="sr-only">{link.name}</span>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent side="right">{link.name}</TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    );
                }
                )
            }
        </>
    )
}
