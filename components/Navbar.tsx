'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-transparent fixed top-0 left-0 right-0 w-full px-4 py-6 md:py-8 z-50">
      <div className="bg-[#ffffff] shadow-lg rounded-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Option 1: Using Tailwind classes */}
        <div className="flex justify-between items-center text-black/90 h-14 md:h-16">
          {/* Logo */}
          <div className="shrink">
            <Link href="/" className="text-lg md:text-xl flex items-center space-x-2 font-normal">
              <Image
                width={50}
                height={50}
                alt="Logo"
                src="/logo.png"
              />
              {/* Option 2: Using imported font className */}
              <span className='font-semibold raleway text-[#016b70]'>BehaviorSpace</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-12 text-lg font-medium  text-black/70">
            <Link href="/">
              Home
            </Link>
            <Link href="/about" >
              About
            </Link>
            <Link href="/about" >
              Blog
            </Link>
            <Link href="/about" >
              Therapists
            </Link>
            <Link href="/contact">
              Contact
            </Link>
          </div>

          {/* Option 3: Using eduHand font */}
            <button
              onClick={toggleMenu}
              className="lg:inline-flex items-center justify-center p-2 rounded-md hidden"
            >
              Book Now
              <span className='w-6 h-6 ml-1 rounded-full bg-[#000000]'>hi</span>
            </button>

          {/* Mobile menu button */}
          <div className="hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md"
            >
              Book Now
              <span className='w-6 h-6 ml-1 rounded-full bg-[#000000]'>hi</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
