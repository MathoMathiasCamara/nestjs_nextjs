import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { BreadCrumbItem } from '@/lib/breadcrumbItem';

export default function BreadCrumb({ items }: { items: BreadCrumbItem[] }) {

    return <Breadcrumb className="hidden md:flex">
        {items.length > 0 && <BreadcrumbList key={items.length}>
            {items?.map((item, index) =>
            (<>
                {index > 0 && <BreadcrumbSeparator key={index + item.href} />}
                {item.isPage ?
                    <BreadcrumbItem key={item.href + item.label}>
                        <BreadcrumbPage>{item.label}</BreadcrumbPage>
                    </BreadcrumbItem> :
                    <BreadcrumbItem key={item.href + item.label}>
                        <BreadcrumbLink
                            href={item.href}>{item.label}</BreadcrumbLink>
                    </BreadcrumbItem>}
            </>)
            )}
        </BreadcrumbList>}
    </Breadcrumb>
}
