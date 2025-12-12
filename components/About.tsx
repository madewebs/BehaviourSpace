import React from 'react'
import Image from 'next/image'


export default function About() {
  return (
    <div className='bg-[#fefefe] text-[#00494b] w-full py-10 md:py-14 px-4 md:px-6'>

      <div className='max-w-full mx-auto md:max-w-7xl flex flex-col lg:flex-row gap-6 md:gap-2 items-stretch md:items-center'>
        
        {/* Content Section */}
        <div className='flex-1 inter text-[#00412b]'>
          <p className='text-4xl md:text-6xl font-medium leading-10 md:leading-14 '>
            Welcome to Behavior Space Clinic
          </p>

          <p className='mt-3 font-normal italic text-2xl md:text-3xl'>
            Reset Anxiety. Rebuild Balance. Reclaim You.
          </p>

          <p className='mt-3 md:mt-5 text-lg md:text-xl leading-relaxed'>
            Find calm, clarity, and control with evidence-based behavioral therapy.
            Through the{' '}
            <span className='font-semibold'>A.B.T. Reset Framework</span> —{' '}
            <span className='font-semibold'>
              Awareness • Behavioral Shift • Thought Repatterning
            </span>{' '}
            — we help you break free from overthinking, panic, and emotional burnout.
          </p>

          {/* <h3 className='mt-5 text-2xl'>
            Support for Children
          </h3>
          <p className='mt-2 text-lg md:text-xl'>
            We also provide specialized support for behavioral problems and learning disabilities in children, including ADHD, ASD, ODD, and academic or developmental challenges. Our child-focused behavioral interventions help improve self-regulation, attention, emotional functioning, and learning skills.
          </p>

          <p className='mt-4 text-xl md:text-2xl'>
            Start your journey toward a stable, anxiety-free mind — for you and your child.
          </p> */}
          <div className='flex gap-6 mt-3 md:mt-6 flex-row font-medium'>
            <button className='bg-[#016b70] text-white px-4 md:px-6 py-4 rounded-xs border border-[#016b70] shadow-md hover:bg-white hover:text-[#016b70] hover:border-[#016b70] transition duration-400'>
              Book a Consultation
            </button>

            <button className='bg-white text-[#016b70] px-4 md:px-6 py-4 rounded-xs border border-[#016b70] shadow-md hover:bg-[#016b70] hover:text-white hover:border-[#016b70] transition duration-400'>
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
    </div>
  )
}
