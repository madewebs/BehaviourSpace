'use client';

import { useEffect, useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Team from "@/components/Team";
import Services from "@/components/Services";
import Loader from "@/components/Loader";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    document.body.style.overflow = isLoading ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  useLayoutEffect(() => {
    if (isLoading || !contentRef.current) return;

    if (typeof window !== "undefined") {
      if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
    }

    const ctx = gsap.context(() => {
      gsap.set("[data-animate='section']", { opacity: 0, y: 40 });
      gsap.set("[data-animate='footer']", { opacity: 0, y: 30 });

      gsap
        .timeline({ defaults: { ease: "power2.out" } })
        .to("[data-animate='section']", {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
        })
        .to(
          "[data-animate='footer']",
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.2"
        );
    }, contentRef);

    return () => ctx.revert();
  }, [isLoading]);

  return (
    <>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      <div
        ref={contentRef}
        className={`relative ${isLoading ? "pointer-events-none" : ""}`}
        aria-hidden={isLoading}
      >
        <div>
          <Navbar />
        </div>
        <main>
          <section id="home">
            <Home />
          </section>
          <section data-animate="section" id="about">
            <About />
          </section>
          <section data-animate="section" id="therapists">
            <Team />
          </section>
          <section data-animate="section" id="services">
            <Services />
          </section>
          <section data-animate="section" id="contact">
            <Contact />
          </section>
          {/* <section data-animate="section" id="location"><Location /></section> */}
        </main>
        <div data-animate="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}
