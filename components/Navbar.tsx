'use client'

import React, { useEffect, useRef, useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

import Link from 'next/link'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { usePathname } from 'next/navigation'

// Register ScrollToPlugin once
gsap.registerPlugin(ScrollToPlugin)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const tlRef = useRef<gsap.core.Timeline | null>(null)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(prev => {
      const next = !prev
      if (tlRef.current) {
        next ? tlRef.current.play() : tlRef.current.reverse()
      }
      return next
    })
  }
  const closeMenu = () => {
    setIsOpen(false)
    tlRef.current?.reverse()
  }

  // Helper: navbar offset
  const getOffsetY = () => {
    const navEl = document.querySelector('nav') as HTMLElement | null
    return (navEl?.offsetHeight || 72) + 8
  }

  // Animate scroll to a given hash (id)
  const scrollToHash = (hashOrId: string) => {
    const id = hashOrId.replace(/^\/?#/, '') // remove optional leading "/" and "#"
    const targetEl = document.getElementById(id)
    if (!targetEl) return
    gsap.to(window, {
      duration: 0.8,
      ease: 'power2.out',
      scrollTo: { y: targetEl, offsetY: getOffsetY() }
    })
  }

  // Click handler for nav items
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash?: string
  ) => {
    closeMenu()
    if (!hash) {
      if (pathname === '/') {
        e.preventDefault()
        gsap.to(window, { duration: 0.8, ease: 'power2.out', scrollTo: { y: 0 } })
      }
      return
    }

    // If already on home, prevent default and animate
    if (pathname === '/') {
      e.preventDefault()
      scrollToHash(hash) // pass just the id
    }
    // Else allow Link to navigate to "/#hash"; initial mount/hashchange effect will animate
  }

  useEffect(() => {
    if (!menuRef.current) return
    const el = menuRef.current
    const links = el.querySelectorAll('a')

    // Mobile panel baseline
    gsap.set(el, { height: 0, opacity: 0, pointerEvents: 'none' })
    tlRef.current = gsap.timeline({ paused: true })
      .to(el, {
        height: 'auto',
        opacity: 1,
        duration: 0.35,
        ease: 'power2.out',
        onStart: () => { gsap.set(el, { pointerEvents: 'auto' })}
      })
      // Stagger-in links
      .fromTo(links, { y: -8, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 0.25,
        stagger: 0.06,
        ease: 'power2.out'
      }, '<')

    tlRef.current.eventCallback('onReverseComplete', () => {
      gsap.set(el, { pointerEvents: 'none' })
    })
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Close on route change
  useEffect(() => { closeMenu() }, [pathname])

  // Close when resizing to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) closeMenu() }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Animate when hash changes (e.g., navigating from other pages)
  useEffect(() => {
    const onHashChange = () => {
      if (window.location.pathname === '/') {
        scrollToHash(window.location.hash)
      }
    }
    window.addEventListener('hashchange', onHashChange)
    // Animate on initial mount if landing with a hash
    if (typeof window !== 'undefined' && window.location.hash) {
      onHashChange()
    }
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return (
    <nav className="bg-transparent fixed top-0 left-0 right-0 w-full px-4 py-6 md:py-8 z-50">
      <div className="bg-[#ffffff] shadow-lg max-w-6xl rounded-lg py-1 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Option 1: Using Tailwind classes */}
        <div className="flex justify-between items-center text-black/90 h-14 md:h-16">
          {/* Logo */}
          <div className="shrink">
            <Link href="/" className="text-lg md:text-xl flex items-center space-x-2 font-normal" onClick={(e) => handleNavClick(e)}>
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
          <div className="hidden lg:flex items-center space-x-8 text-lg font-medium text-black/70">
            <Link href="/" onClick={(e) => handleNavClick(e)}>Home</Link>
            <Link href="/#about" onClick={(e) => handleNavClick(e, 'about')}>About</Link>
            <Link href="/#therapists" onClick={(e) => handleNavClick(e, 'therapists')}>Therapists</Link>
            <Link href="/#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</Link>
            <Link
              href="/booking"
              className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#016b70] text-white hover:bg-[#01595c] transition-colors"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button (visible below lg) */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              className="inline-flex items-center justify-center p-2 border-black/10 hover:bg-black/5 transition"
            >
              {isOpen ? (
                <AiOutlineClose className="h-6 w-6 text-black/80" aria-hidden="true" />
              ) : (
                <RxHamburgerMenu className="h-6 w-6 text-black/80" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel (GSAP controls height + opacity + stagger) */}
        <div
          id="mobile-menu"
          ref={menuRef}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-4 border-t border-black/10">
            <div className="flex flex-col space-y-3 text-lg font-medium text-black/80">
              <Link href="/" className="px-2 py-2 rounded-md hover:bg-black/5" onClick={(e) => handleNavClick(e)}>Home</Link>
              <Link href="/#about" className="px-2 py-2 rounded-md hover:bg-black/5" onClick={(e) => handleNavClick(e, 'about')}>About</Link>
              <Link href="/#therapists" className="px-2 py-2 rounded-md hover:bg-black/5" onClick={(e) => handleNavClick(e, 'therapists')}>Therapists</Link>
              <Link href="/#contact" className="px-2 py-2 rounded-md hover:bg-black/5" onClick={(e) => handleNavClick(e, 'contact')}>Contact</Link>
              <Link
                href="/booking"
                className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#016b70] text-white hover:bg-[#01595c] transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
