'use client'

import React from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { useRouter } from 'next/navigation'

gsap.registerPlugin(ScrollToPlugin)

export default function About() {
  const router = useRouter()

  const getOffsetY = () => {
    const navEl = document.querySelector('nav') as HTMLElement | null
    return (navEl?.offsetHeight || 72) + 8
  }

  const scrollToContact = () => {
    // If on home and #contact exists, animate; else navigate to /#contact
    const contactEl = document.getElementById('contact')
    if (typeof globalThis !== 'undefined' && globalThis.location.pathname === '/' && contactEl) {
      gsap.to(globalThis, {
        duration: 0.8,
        ease: 'power2.out',
        scrollTo: { y: contactEl, offsetY: getOffsetY() }
      })
    } else {
      router.push('/#contact')
    }
  }

  return (
    <div className='bg-[#fefefe] text-[#00494b] w-full py-10 md:py-14'>

      <div className='max-w-full mx-auto md:max-w-7xl flex flex-col md:flex-row gap-8 md:gap-6 items-stretch md:items-center px-4 md:px-6'>

        {/* Content Section */}
        <div className='flex-1 inter text-[#00412b]'>
          <h2 className='text-3xl md:text-5xl mb-2 md:mb-8 leading-10 md:leading-14 '>
            Welcome to Behavior Space Clinic
          </h2>

          <p className='mb-4 md:mb-5 font-normal italic text-xl md:text-3xl'>
            Reset Anxiety. Rebuild Balance. Reclaim You.
          </p>

          <p className='mt-4 md:mt-5 text-md md:text-xl leading-relaxed'>
            We help you feel calmer and more confident with simple, practical therapy.
          </p>

          <div className='flex gap-2 md:gap-8 mt-5 md:mt-6 flex-row font-medium'>
            {/* Go to /bookings */}
            <button
              type="button"
              onClick={() => router.push('/booking')}
              className='bg-[#016b70] text-white px-4 md:px-6 py-3 rounded-sm border border-[#016b70] shadow-md hover:bg-white hover:text-[#016b70] hover:border-[#016b70] hover:scale-107 duration-600 transition'
            >
              Book a Consultation
            </button>

            {/* GSAP scroll to #contact */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToContact();
              }}
              className='bg-white text-[#016b70] px-4 md:px-6 py-3 rounded-sm border border-[#016b70] shadow-md hover:bg-[#016b70] hover:text-white hover:border-[#016b70] transition hover:scale-107 duration-400 inline-block text-center'
            >
              For Enquiry
            </a>
          </div>
        </div>
        {/* Image Section */}
        <div className="relative flex-1 rounded-sm overflow-hidden min-h-150">
          <Image
            src="/child-behavioral-therapy-clinic-bangalore.webp"
            alt="Child being supported through behavioral therapy at Behavior Space Clinic"
            fill
            draggable={false}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Child Support Callout (auto height, centered text, bg image, no min-height) */}
      <div
        className="relative w-full mt-6 md:mt-8 bg-linear-0 bg-amber-700"
        style={{
          backgroundImage: "url('/autism-adhd-therapy-bangalore.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='inset-0 absolute z-0 bg-black/60' />

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative max-w-full mx-auto md:max-w-7xl py-12 md:py-14 text-center inter text-white px-4">
          <p className="text-md md:text-xl">
            Specialized support for children with ADHD, ASD, ODD, and learning challenges, designed to improve focus and emotional balance.
          </p>
        </div>
      </div>
    </div>
  )
}