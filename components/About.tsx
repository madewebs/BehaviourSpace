import React from 'react'
import Image from 'next/image'


export default function About() {
  return (
    <div className='bg-[#fefefe] text-[#00494b] w-full py-10 md:py-14 '>

      <div className='max-w-full mx-auto md:max-w-7xl flex flex-col md:flex-row gap-8 md:gap-6 items-stretch md:items-center px-4 md:px-6'>

        {/* Content Section */}
        <div className='flex-1 inter text-[#00412b]'>
          <p className='text-3xl md:text-5xl mb-2 md:mb-8 leading-10 md:leading-14 '>
            Welcome to Behavior Space Clinic
          </p>

          <p className='mb-4 md:mb-5 font-normal italic text-xl md:text-3xl'>
            Reset Anxiety. Rebuild Balance. Reclaim You.
          </p>

          <p className='mt-4 md:mt-5 text-md md:text-xl leading-relaxed'>
            Find calm, clarity, and control with evidence-based behavioral therapy.
            Through the{' '}
            <span className='font-medium'>A.B.T. Reset Framework</span> —{' '}
            <span className='font-medium'>
              Awareness • Behavioral Shift • Thought Repatterning
            </span>{' '}
            — we help you break free from overthinking, panic, and emotional burnout.
          </p>

          <div className='flex gap-8 mt-5 md:mt-6 flex-row font-medium'>
            <button className='bg-[#016b70] text-white px-4 md:px-6 py-4 rounded-sm border border-[#016b70] shadow-md hover:bg-white hover:text-[#016b70] hover:border-[#016b70] hover:scale-107 duration-600 transition'>
              Book a Consultation
            </button>

            <button className='bg-white text-[#016b70] px-4 md:px-6 py-4 rounded-sm border border-[#016b70] shadow-md hover:bg-[#016b70] hover:text-white hover:border-[#016b70] transition hover:scale-107 duration-400'>
              For Enquiry
            </button>
          </div>
        </div>
        {/* Image Section */}
        <div className="relative flex-1 rounded-sm overflow-hidden min-h-[600px]">
          <Image
            src="/aboutimg.jpg"
            alt="Behavior Space Clinic"
            fill
            className="object-cover"
            sizes='100vw'
          />
        </div>
      </div>

      {/* Child Support Callout (auto height, centered text, bg image, no min-height) */}
      <div
        className="relative w-full mt-6 md:mt-8 bg-linear-0 bg-amber-700"
        style={{
          backgroundImage: "url('/abt.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='inset-0 absolute z-0 bg-black/60' />

        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-full mx-auto md:max-w-7xl px-0 py-12 md:py-16 text-center inter text-white">
          <p className="text-lg md:text-xl leading-relaxed">
            We also provide specialized support for behavioral problems and learning disabilities in children, including ADHD, ASD, ODD, and academic or developmental challenges. Our child-focused behavioral interventions help improve self-regulation, attention, emotional functioning, and learning skills.
          </p>
          <p className="mt-2 font-medium italic text-xl md:text-2xl">
            Start your journey toward a stable, anxiety-free mind — for you and your child.
          </p>
        </div>
      </div>
    </div>
  )
}