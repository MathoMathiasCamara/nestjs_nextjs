import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Search } from 'lucide-react'
import React from 'react'

export default function SearchBar() {
    return (
        <div className="relative flex flex-1">
            <Label htmlFor="search-field" className="sr-only">Search</Label>
            <Search
                className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                aria-hidden="true"
            />
            <Input id="search-field" className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                placeholder="Search..." type="search" name="search" />
        </div>
    )
}
