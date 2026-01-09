'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";

type LoaderProps = {
  onComplete: () => void;
};

export default function Loader({ onComplete }: LoaderProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl
        .fromTo(
          textRef.current,
          { yPercent: 120, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.8 }
        )
        .to(textRef.current, {
          letterSpacing: "0.35rem",
          duration: 0.6,
          delay: 0.1,
        })
        .to(overlayRef.current, {
          yPercent: -100,
          duration: 0.9,
          ease: "power3.inOut",
          onComplete,
        });
    }, overlayRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-999 flex flex-col items-center justify-center bg-white text-[#016b70]"
    >
      <span
        ref={textRef}
        className="text-2xl font-semibold tracking-[0.25rem] uppercase"
      >
        BehaviourSpace
      </span>
      <span className="mt-4 h-px w-24 bg-white/40" />
    </div>
  );
}