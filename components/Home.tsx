'use client'
import React from 'react'
import Image from 'next/image'

export default function Home() {
  return (
    <section className="relative w-full min-h-[80dvh] md:min-h-[90svh] flex items-center">
      
      <Image
        src="/land.webp"
        alt="Healing background"
        fill
        priority
        className="object-cover brightness-90"
      />

      <div className="relative z-10 mx-auto px-4 md:px-20 text-left md:text-center">
        <h1 className="mont text-4xl md:text-6xl font-semibold text-white mb-2 md:mb-4">
          Here to support your healing.
        </h1>

        <p className="text-lg md:text-xl text-white/90 font-inter-tight italic">
          “The greatest glory in living lies not in never falling, but in rising every time we fall.”
        </p>

        <p className="mt-2 text-base text-white/70 font-inter-tight">
          — Nelson Mandela
        </p>
      </div>
    </section>
  )
}
