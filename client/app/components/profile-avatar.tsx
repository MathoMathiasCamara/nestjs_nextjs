'use client'
import Image from 'next/image'
import React from 'react'

export default function ProfileAvatar({ url }: { url: string }) {
  return (
    <Image
      src={url}
      width={36}
      height={36}
      alt="Avatar"
      className="overflow-hidden rounded-full"
    />
  )
}
