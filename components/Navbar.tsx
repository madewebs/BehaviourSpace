'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
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
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const tlRef = useRef<gsap.core.Timeline | null>(null)
  const pathname = usePathname()
  const isHome = pathname === '/'
  const showScrolledStyle = isScrolled || !isHome

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(prev => {
      const next = !prev
      if (tlRef.current) {
        if (next) {
          tlRef.current.play()
        } else {
          tlRef.current.reverse()
        }
      }
      return next
    })
  }
  const closeMenu = useCallback(() => {
    setIsOpen(false)
    tlRef.current?.reverse()
  }, [])

  // Helper: navbar offset
  const getOffsetY = useCallback(() => {
    const navEl = document.querySelector('nav') as HTMLElement | null
    return (navEl?.offsetHeight || 72) + 8
  }, [])

  // Animate scroll to a given hash (id)
  const scrollToHash = useCallback((hashOrId: string) => {
    const id = hashOrId.replace(/^\/?#/, '') // remove optional leading "/" and "#"
    const targetEl = document.getElementById(id)
    if (!targetEl) return
    gsap.to(window, {
      duration: 0.8,
      ease: 'power2.out',
      scrollTo: { y: targetEl, offsetY: getOffsetY() }
    })
  }, [getOffsetY])

  // Click handler for nav items
  const handleNavClick = useCallback((
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
  }, [closeMenu, pathname, scrollToHash])

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

  // Close on route change without triggering cascading renders
  useEffect(() => {
    closeMenu()
  }, [closeMenu, pathname])

  // Close when resizing to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) closeMenu() }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [closeMenu])

  // Animate when hash changes (e.g., navigating from other pages)
  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
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
  }, [scrollToHash])

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        showScrolledStyle 
          ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm border-b border-black/5' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          {/* Logo */}
          <div className="shrink">
            <Link 
              href="/" 
              className="group flex items-center space-x-2" 
              onClick={(e) => handleNavClick(e)}
            >
              <div className="relative w-14 h-14 md:w-12 md:h-12 flex items-center justify-center transition-shadow">
                <Image
                  width={40}
                  height={40}
                  alt="Logo"
                  src="/logo.png"
                  className="object-contain"
                />
              </div>
              <span className={`text-lg md:text-xl font-semibold tracking-wide uppercase font-mont transition-colors ${
                showScrolledStyle ? 'text-[#016b70]' : 'text-white drop-shadow-sm'
              }`}>
                Behavior<span className={showScrolledStyle ? 'text-[#028b92]' : 'text-white/90'}>Space</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className={`hidden lg:flex items-center space-x-10 text-lg font-medium transition-colors ${
            showScrolledStyle ? 'text-black/70' : 'text-white'
          }`}>
            <Link href="/" className="hover:text-[#016b70] transition-colors" onClick={(e) => handleNavClick(e)}>Home</Link>
            <Link href="/#about" className="hover:text-[#016b70] transition-colors" onClick={(e) => handleNavClick(e, 'about')}>About</Link>
            <Link href="/#therapists" className="hover:text-[#016b70] transition-colors" onClick={(e) => handleNavClick(e, 'therapists')}>Therapists</Link>
            <Link href="/#contact" className="hover:text-[#016b70] transition-colors" onClick={(e) => handleNavClick(e, 'contact')}>Contact</Link>
            <Link
              href="/booking"
              onClick={closeMenu}
              className={`inline-flex items-center justify-center px-6 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 active:scale-95 ${
                showScrolledStyle 
                  ? 'bg-[#016b70] text-white hover:bg-[#01595c] shadow-md hover:shadow-lg' 
                  : 'bg-white text-[#016b70] hover:bg-white/90 shadow-lg'
              }`}
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
              className={`inline-flex items-center justify-center p-2 rounded-xl transition-colors ${
                showScrolledStyle 
                  ? 'text-black/80' 
                  : 'text-white'
              }`}
            >
              {isOpen ? (
                <AiOutlineClose className="h-6 w-6" aria-hidden="true" />
              ) : (
                <RxHamburgerMenu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <div
          id="mobile-menu"
          ref={menuRef}
          className="lg:hidden overflow-hidden"
        >
          <div className={`mt-4 rounded-2xl p-4 shadow-xl border border-black/5 bg-white`}>
            <div className="flex flex-col space-y-2">
              <Link href="/" className="px-4 py-3 rounded-xl hover:bg-black/5 font-medium text-black/80 transition-colors" onClick={(e) => handleNavClick(e)}>Home</Link>
              <Link href="/#about" className="px-4 py-3 rounded-xl hover:bg-black/5 font-medium text-black/80 transition-colors" onClick={(e) => handleNavClick(e, 'about')}>About</Link>
              <Link href="/#therapists" className="px-4 py-3 rounded-xl hover:bg-black/5 font-medium text-black/80 transition-colors" onClick={(e) => handleNavClick(e, 'therapists')}>Therapists</Link>
              <Link href="/#contact" className="px-4 py-3 rounded-xl hover:bg-black/5 font-medium text-black/80 transition-colors" onClick={(e) => handleNavClick(e, 'contact')}>Contact</Link>
              <Link
                href="/booking"
                onClick={closeMenu}
                className="mt-4 inline-flex items-center justify-center px-4 py-3 rounded-xl bg-[#016b70] text-white font-medium hover:bg-[#01595c] transition-colors"
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
