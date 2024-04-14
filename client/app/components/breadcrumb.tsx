import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { SlashIcon } from 'lucide-react';
import React from 'react'

export type BreadCrumbItem = {
    label: string;
    href: string;
}

export default function BreadCrumb({ items }: { items: BreadCrumbItem[] }) {
    return <Breadcrumb className='mb-5'>
        <BreadcrumbList>
            {items.map((item, index) =>
            (<>
                {index > 0 &&
                    <BreadcrumbSeparator />}
                <BreadcrumbItem>
                    <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                </BreadcrumbItem></>)

            )}
        </BreadcrumbList>
    </Breadcrumb>
}
