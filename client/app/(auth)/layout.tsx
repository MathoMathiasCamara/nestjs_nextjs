import React from 'react'

export default function AuthLayout({children} :  { children: React.ReactNode}) {
  return (
    <div className="mt-16 flex flex-col min-h-full flex-1 justify-items-center  justify-center">
        {children}
    </div>
  )
}
