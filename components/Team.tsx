'use client'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { team } from '../data/teamdata'

export default function Team() {
  const trackRef = useRef<HTMLDivElement | null>(null)
  const cardsRef = useRef<HTMLElement[]>([])
  const [current, setCurrent] = useState(0)

  // Autoplay helpers
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const isPausedRef = useRef(false)
  const currentRef = useRef(0)

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
        duration: 0.6,
        ease: 'power3.out',
      })
    } else {
      container.scrollLeft = target
    }
    setCurrent(index)
  }

  const goNext = () => {
    const next = clamp(current + 1, 0, team.length - 1)
    centerCard(next)
    restartAutoplay()
  }
  const goPrev = () => {
    const prev = clamp(current - 1, 0, team.length - 1)
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

  // Center first card on mount and on resize
  useEffect(() => {
    centerCard(0, false)
    const onResize = () => centerCard(currentRef.current, false)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
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

  const atStart = current <= 0
  const atEnd = current >= team.length - 1

  return (
    <section className="w-full py-4 md:py-8">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="mb-4 flex items-center justify-between gap-2">
          <h2 className=" text-3xl md:text-4xl text-[#00494b] mb-2 font-medium">Meet Our Team</h2>
          <div className="flex items-center gap-2">
            <button
              aria-label="Previous"
              onClick={goPrev}
              className={`inline-flex h-9 w-9 items-center justify-center rounded-md border text-sm transition
              ${atStart ? 'opacity-40 cursor-not-allowed' : 'hover:bg-gray-100 active:scale-[0.98]'}
              border-gray-200 bg-white text-black`}
              disabled={atStart}
              type="button"
            >
              ‹
            </button>
            <button
              aria-label="Next"
              onClick={goNext}
              className={`inline-flex h-9 w-9 items-center justify-center rounded-md border text-sm transition
              ${atEnd ? 'opacity-40 cursor-not-allowed' : 'hover:bg-gray-100 active:scale-[0.98]'}
              border-gray-200 bg-white text-black`}
              disabled={atEnd}
              type="button"
            >
              ›
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="no-scrollbar flex gap-4 md:gap-6 overflow-x-auto pb-2 snap-x snap-mandatory"
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
              className="team-card relative snap-start shrink-0 w-[85vw] max-w-104 sm:w-104 md:w-104 overflow-hidden rounded-md border border-gray-200 bg-white shadow-md"
            >
              <div className="relative h-80 sm:h-88 md:h-96 w-full">
                <img
                  src={m.image}
                  alt={m.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
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

        {/* Hide scrollbar (WebKit, Firefox, old Edge) */}
        <style jsx>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </section>
  )
}