'use client'
import updateBreadcrumbs from '@/lib/breadcrumb.action';
import React from 'react'

export default function EmptyBreadCrumb() {
    // update the breadcrumb using redux
    updateBreadcrumbs([]);
    return (
        <>
        </>
    )
}
