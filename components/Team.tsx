'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { teamMembers, TeamMember } from '@/data/teamdata';

export default function Team() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-scroll functionality with GSAP
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const autoScroll = () => {
      if (!isDragging) {
        const nextIndex = (currentIndex + 1) % teamMembers.length;

        if (isMobile) {
          // Mobile: scroll one card at a time (full width)
          const cardWidth = container.offsetWidth;
          gsap.to(container, {
            scrollLeft: nextIndex * cardWidth,
            duration: 0.8,
            ease: 'power2.inOut',
          });
        } else {
          // Desktop: scroll by card width + gap
          const cardWidth = 280 + 24;
          gsap.to(container, {
            scrollLeft: nextIndex * cardWidth,
            duration: 0.8,
            ease: 'power2.inOut',
          });
        }

        setCurrentIndex(nextIndex);
      }
    };

    const interval = setInterval(autoScroll, 4000); // Auto-scroll every 4 seconds
    return () => clearInterval(interval);
  }, [isDragging, currentIndex, teamMembers.length, isMobile]);

  // Arrow key controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const container = scrollContainerRef.current;
      if (!container) return;

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const prevIndex = (currentIndex - 1 + teamMembers.length) % teamMembers.length;
        
        if (isMobile) {
          const cardWidth = container.offsetWidth;
          gsap.to(container, {
            scrollLeft: prevIndex * cardWidth,
            duration: 0.8,
            ease: 'power2.inOut',
          });
        } else {
          const cardWidth = 280 + 24;
          gsap.to(container, {
            scrollLeft: prevIndex * cardWidth,
            duration: 0.8,
            ease: 'power2.inOut',
          });
        }
        setCurrentIndex(prevIndex);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % teamMembers.length;
        
        if (isMobile) {
          const cardWidth = container.offsetWidth;
          gsap.to(container, {
            scrollLeft: nextIndex * cardWidth,
            duration: 0.8,
            ease: 'power2.inOut',
          });
        } else {
          const cardWidth = 280 + 24;
          gsap.to(container, {
            scrollLeft: nextIndex * cardWidth,
            duration: 0.8,
            ease: 'power2.inOut',
          });
        }
        setCurrentIndex(nextIndex);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, teamMembers.length, isMobile]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const x = e.touches[0].pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>

        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
          className="flex gap-6 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing md:cursor-default"
          style={{ scrollBehavior: 'auto' }}
        >
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="shrink-0 pmw-full md:w-72 h-64 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow flex items-center justify-center relative"
            >
              <Image
                src={member.image || '/logo.png'}
                alt={member.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          ))}
        </div>

        {/* Indicator dots for mobile */}
        {isMobile && (
          <div className="flex justify-center gap-2 mt-6">
            {teamMembers.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        )}

        {/* Arrow key hint for desktop */}
        {/* {!isMobile && (
          <p className="text-center text-gray-500 text-sm mt-6">
            Use ← → arrow keys to navigate
          </p>
        )} */}
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
