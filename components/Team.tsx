'use client'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { team } from '../data/teamdata'

export default function Team() {
  const trackRef = useRef<HTMLDivElement | null>(null)
  const cardsRef = useRef<HTMLElement[]>([])
  const [current, setCurrent] = useState(0)
  const isScrollingRef = useRef(false)

  // Autoplay helpers
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const isPausedRef = useRef(false)
  const currentRef = useRef(0)
  const accumulatedDeltaRef = useRef(0)
  const wheelTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n))

  const centerCard = (index: number, animate = true) => {
    const container = trackRef.current
    const card = cardsRef.current[index]
    if (!container || !card) return

    const maxScroll = container.scrollWidth - container.clientWidth
    const target =
      clamp(
        card.offsetLeft - (container.clientWidth - card.clientWidth) / 2,
        0,
        Math.max(0, maxScroll)
      )

    if (animate) {
      gsap.to(container, {
        scrollLeft: target,
        duration: 1,
        ease: 'power2.inOut',
        onStart: () => { isScrollingRef.current = true },
        onComplete: () => { isScrollingRef.current = false },
      })
    } else {
      container.scrollLeft = target
    }
    setCurrent(index)
  }

  const animateScroll = (delta: number) => {
    const container = trackRef.current
    if (!container || isScrollingRef.current) return
    isScrollingRef.current = true
    const target = clamp(
      container.scrollLeft + delta,
      0,
      container.scrollWidth - container.clientWidth
    )
    gsap.to(container, {
      scrollLeft: target,
      duration: 0.6,
      ease: 'power2.out',
      onComplete: () => { isScrollingRef.current = false },
    })
  }

  const handleWheel = (e: WheelEvent) => {
    e.preventDefault()
    if (isScrollingRef.current) return
    accumulatedDeltaRef.current += e.deltaX || e.deltaY
    if (wheelTimeoutRef.current) clearTimeout(wheelTimeoutRef.current)
    wheelTimeoutRef.current = setTimeout(() => {
      if (Math.abs(accumulatedDeltaRef.current) > 20) {
        animateScroll(accumulatedDeltaRef.current > 0 ? 300 : -300)
      }
      accumulatedDeltaRef.current = 0
    }, 40)
  }

  // Touch drag
  const touchStartRef = useRef(0)
  const touchScrollRef = useRef(0)

  const handleTouchStart = (e: TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX
    touchScrollRef.current = trackRef.current?.scrollLeft ?? 0
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (isScrollingRef.current) return
    const dx = touchStartRef.current - e.touches[0].clientX
    if (Math.abs(dx) > 10) {
      e.preventDefault()
      animateScroll(dx * 1.5)
      touchStartRef.current = e.touches[0].clientX
    }
  }

  // Autoplay: advance every 3.5s, loop, pause on hover and tab hidden
  const startAutoplay = () => {
    if (autoplayRef.current) return
    autoplayRef.current = setInterval(() => {
      const next = (currentRef.current + 1) % team.length
      centerCard(next)
    }, 3500)
  }
  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
      autoplayRef.current = null
    }
  }
  const restartAutoplay = () => {
    stopAutoplay()
    if (!isPausedRef.current) startAutoplay()
  }

  const goNext = () => {
    const next = (current + 1) % team.length
    centerCard(next)
    restartAutoplay()
  }
  const goPrev = () => {
    const prev = (current - 1 + team.length) % team.length
    centerCard(prev)
    restartAutoplay()
  }

  // Initial entrance animation for cards
  useLayoutEffect(() => {
    if (!trackRef.current) return
    const ctx = gsap.context(() => {
      gsap.from('.team-card', {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.08,
      })
    }, trackRef)
    return () => ctx.revert()
  }, [])

  // Center first card on mount, on resize, smooth wheel/touch scrolling
  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    centerCard(0, false)

    const onResize = () => centerCard(currentRef.current, false)
    window.addEventListener('resize', onResize)

    el.addEventListener('wheel', handleWheel, { passive: false })
    el.addEventListener('touchstart', handleTouchStart, { passive: true })
    el.addEventListener('touchmove', handleTouchMove, { passive: false })

    return () => {
      window.removeEventListener('resize', onResize)
      el.removeEventListener('wheel', handleWheel)
      el.removeEventListener('touchstart', handleTouchStart)
      el.removeEventListener('touchmove', handleTouchMove)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Keep a ref in sync with current
  useEffect(() => {
    currentRef.current = current
  }, [current])

  // Keyboard arrow navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current])

  useEffect(() => {
    startAutoplay()
    const handleVisibility = () => {
      if (document.hidden) {
        stopAutoplay()
      } else if (!isPausedRef.current) {
        startAutoplay()
      }
    }
    document.addEventListener('visibilitychange', handleVisibility)
    return () => {
      stopAutoplay()
      document.removeEventListener('visibilitychange', handleVisibility)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className="w-full py-4 md:py-8">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="mb-4 flex items-center justify-between gap-2">
          <h2 className=" text-3xl md:text-4xl text-[#00494b] mb-2 font-medium">Our Expert Therapists & Psychologists</h2>
          <div className="flex items-center gap-3">
            <button
              aria-label="Previous"
              onClick={goPrev}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-black hover:bg-[#016b70] hover:text-white transition-all active:scale-95 shadow-sm"
              type="button"
            >
              ‹
            </button>
            <button
              aria-label="Next"
              onClick={goNext}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-black hover:bg-[#016b70] hover:text-white transition-all active:scale-95 shadow-sm"
              type="button"
            >
              ›
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="flex gap-4 md:gap-10 overflow-x-hidden pb-10"
          onMouseEnter={() => {
            isPausedRef.current = true
            stopAutoplay()
          }}
          onMouseLeave={() => {
            isPausedRef.current = false
            startAutoplay()
          }}
        >
          {team.map((m, i) => (
            <article
              key={m.id}
              ref={(el) => {
                if (el) cardsRef.current[i] = el
              }}
              onClick={() => {
                centerCard(i)
                restartAutoplay()
              }}
              className="team-card relative shrink-0 w-72 sm:w-80 md:w-[380px] overflow-hidden rounded-2xl border border-black/5 bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="relative h-[400px] md:h-[480px] w-full">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  sizes="(min-width: 768px) 416px, 85vw"
                  className="object-cover"
                  priority={i < 2}
                  draggable={false}
                />
                {/* fixed gradient + layering */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/70 via-black/30 to-transparent z-10" />
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 z-20">
                  <h3 className="text-lg font-semibold text-white drop-shadow">{m.name}</h3>
                  <p className="text-sm text-white/90 drop-shadow">{m.role}</p>
                </div>
              </div>

              {/* <div className="border-t border-gray-200 p-4">
                {m.bio && <p className="text-sm text-gray-700 line-clamp-3">{m.bio}</p>}
                {m.socials && (
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    {m.socials.linkedin && (
                      <a
                        href={m.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-blue-600 hover:underline"
                      >
                        LinkedIn
                      </a>
                    )}
                    {m.socials.github && (
                      <a
                        href={m.socials.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-gray-800 hover:underline"
                      >
                        GitHub
                      </a>
                    )}
                    {m.socials.twitter && (
                      <a
                        href={m.socials.twitter}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-sky-600 hover:underline"
                      >
                        X
                      </a>
                    )}
                    {m.socials.website && (
                      <a
                        href={m.socials.website}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-indigo-600 hover:underline"
                      >
                        Website
                      </a>
                    )}
                  </div>
                )}
              </div> */}
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}