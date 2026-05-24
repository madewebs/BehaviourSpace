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
            {/* WhatsApp icon button – desktop */}
            <a
              href="https://wa.me/917907961350"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className={`inline-flex items-center justify-center w-10 h-10 rounded-full transition-all transform hover:scale-110 active:scale-95 ${
                showScrolledStyle
                  ? 'bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20'
                  : 'bg-white/15 text-white hover:bg-white/25'
              }`}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
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

          {/* Mobile right-side actions (visible below lg) */}
          <div className="lg:hidden flex items-center gap-2">
            {/* WhatsApp button — always visible in mobile navbar */}
            <a
              href="https://wa.me/917907961350"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-semibold transition-all active:scale-95 ${
                showScrolledStyle
                  ? 'bg-[#25D366] text-white hover:bg-[#1ebe5d]'
                  : 'bg-[#25D366] text-white hover:bg-[#1ebe5d]'
              }`}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
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
              {/* WhatsApp button – mobile */}
              <a
                href="https://wa.me/917907961350"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
              <Link
                href="/booking"
                onClick={closeMenu}
                className="inline-flex items-center justify-center px-4 py-3 rounded-xl bg-[#016b70] text-white font-medium hover:bg-[#01595c] transition-colors"
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
