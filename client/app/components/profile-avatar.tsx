'use client'
import Image from 'next/image'
import React from 'react'

export default function ProfileAvatar({ url } : { url: string}) {
  return (
    <Image className="rounded-full bg-gray-50" width={32} height={32}
                    src={url} alt="" />
  )
}
