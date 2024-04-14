'use client'
import React from 'react'

export default function UserName({ name } : { name : string }) {
  return (
    <span className="ml-4 text-sm font-semibold leading-6 text-gray-900" 
    aria-hidden="true">
      { name }
      </span>
  )
}
