'use client'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { PanelLeft } from 'lucide-react'
import Link from 'next/link'
import CompanyLogoMobile from './company.logo.mobile'
import { links } from './nav-links'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

export default function SideBarMobile() {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="sm:hidden">
                    <PanelLeft className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
                <nav className="grid gap-6 text-lg font-medium">
                    <CompanyLogoMobile />
                    {
                        links.map((link) => {
                            const LinkIcon = link.icon;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={
                                        cn(
                                            pathname === link.href ?
                                                'text-foreground' :
                                                'text-muted-foreground hover:text-foreground',
                                            'flex items-center gap-4 px-2.5'
                                        )
                                    }
                                >
                                    <LinkIcon className="h-5 w-5" />
                                    {link.name}
                                </Link>
                            )
                        })
                    }

                </nav>
            </SheetContent>
        </Sheet>
    )
}
