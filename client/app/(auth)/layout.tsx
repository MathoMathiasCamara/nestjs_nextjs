import React from 'react'

export default function AuthLayout({children} :  { children: React.ReactNode}) {
  return (
    <div className="flex flex-col min-h-full flex-1 justify-items-center  justify-center">
        {children}
    </div>
  )
}
