'use client'
import React from 'react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen w-full h-full relative flex items-center justify-start">
        <Image
          src="/landing.jpg"
          alt="Description of image"
          fill
          className="object-cover brightness-30"
        />
      
        <div className="relative text-left md:text-center mx-auto z-10 px-4 md:px-20">
          <h1 className="mont text-4xl md:text-6xl font-semibold text-white md:mb-4 mb-2">
            Here to support your healing.
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-inter-tight italic">
            "The greatest glory in living lies not in never falling, but in rising every time we fall."
          </p>
          <p className="text-base md:text-md text-white/70 font-inter-tight mt-2">
            — Nelson Mandela
          </p>
        </div>
    </div>
  )
}
