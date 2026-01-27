'use client';

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

type LoaderProps = {
  onComplete: () => void;
};

export default function Loader({ onComplete }: LoaderProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl
        .fromTo(
          textRef.current,
          { yPercent: 121, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.8 }
        )
        .to(textRef.current, {
          letterSpacing: "0.35rem",
          duration: 0.7,
          ease: "power2.inOut",
        }, "+=0.1")
        .to(overlayRef.current, {
          yPercent: -100,
          duration: 0.8,
          ease: "power4.inOut",
          onComplete,
        }, "+=0.4");
    }, overlayRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white text-[#016b70]"
    >
      <div className="overflow-hidden py-2">
        <span
          ref={textRef}
          className="block text-2xl font-semibold tracking-[0.25rem] uppercase opacity-0"
        >
          BehaviourSpace
        </span>
      </div>
      <div className="mt-4 h-px w-24 bg-[#016b70]/20" />
    </div>
  );
}