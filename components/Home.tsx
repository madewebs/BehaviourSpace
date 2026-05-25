'use client'
import React from 'react'
import Image from 'next/image'

export default function Home() {
  return (
    <section className="relative w-full min-h-[80dvh] md:min-h-[90svh] flex items-center">
      
      <Image
        src="/behavior-space-clinic-therapy.webp"
        alt="Behavior Space Clinic - Providing evidence-based behavioral therapy and mental health support"
        fill
        priority
        className="object-cover brightness-90"
      />

      <div className="relative z-10 mx-auto px-4 md:px-20 text-left">
        <div className="relative inline-block">
          <h1 className="mont text-base md:text-lg font-semibold text-white absolute -top-7 left-0">
             Mental Health Clinic
          </h1>
          <h2 className="mont text-4xl md:text-6xl font-semibold text-white pt-7">
            Here to support your healing.
          </h2>
        </div>

        <p className="text-lg md:text-xl text-white/90 font-inter-tight italic">
          “The greatest glory in living lies not in never falling, but in rising every time we fall.”
        </p>

        <p className="mt-2 text-base text-white/70 font-inter-tight">
          — Nelson Mandela
        </p>

        <p className="mt-6 max-w-3xl text-base md:text-lg text-white/80 leading-relaxed">
          We offer clear, caring help for anxiety, panic, and child behavior concerns.
        </p>
      </div>
    </section>
  )
}
