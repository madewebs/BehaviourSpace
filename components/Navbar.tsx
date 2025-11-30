'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Exo, Edu_AU_VIC_WA_NT_Hand } from "next/font/google"

const exo = Exo({ subsets: ["latin"], weight: ["100", "200", "400", "700", "900"] });
const eduHand = Edu_AU_VIC_WA_NT_Hand({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-transparent fixed top-0 left-0 right-0 w-full px-4 py-6 md:py-4 z-50">
      <div className="bg-[#E6F7F2] rounded-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between font-medium items-center h-16 ${exo.className}`}>
          {/* Logo */}
          <div className="flex-shrink-1">
            <Link href="/" className={`text-lg md:text-xl flex items-center space-x-2 font-medium ${eduHand.className}`}>
              <Image
                width={50}
                height={50}
                alt="Logo"
                src="/logo.png"
              />
              <span className=''>BehaviourSpace</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-10">
            <Link href="/" className="">
              Home
            </Link>
            <Link href="/about" className="">
              About
            </Link>
            <Link href="/services" className="">
              Services
            </Link>
            <Link href="/contact" className="">
              Contact
            </Link>
            <Link href="/contact" className="">
              Contact
            </Link>
          </div>

          <div className='hidden lg:flex'>
            Book Now
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md"
            >
                X
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
