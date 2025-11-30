'use client'
import React from 'react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-amber-950 min-h-screen w-full h-full">
        <Image
          src="/land.jpg"
          alt="Description of image"
          fill
          className="object-cover brightness-50"
        />
      
    </div>
  )
}
