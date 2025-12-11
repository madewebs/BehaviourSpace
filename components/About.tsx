import React from 'react'
import Image from 'next/image'


export default function About() {
  return (
    <div className='bg-[#fefefe] text-[#00494b] w-full py-12 md:py-16 px-4 md:px-6'>

      <div className='max-w-full mx-auto md:max-w-7xl flex flex-col lg:flex-row gap-10 items-stretch'>
        
        {/* Content Section */}
        <div className='flex-1 inter text-[#00412b]'>
          <p className='text-4xl md:text-5xl font-semibold'>
            Welcome to Behavior Space Clinic
          </p>

          <p className=' mt-6 text-3xl md:text-4xl'>
            Reset Anxiety. Rebuild Balance. Reclaim You.
          </p>

          <p className='mt-4 text-lg md:text-xl leading-7 md:leading-8 tracking-wide'>
            Find calm, clarity, and control with evidence-based behavioral therapy.
          </p>

          <p className='mt-2 text-lg md:text-xl leading-7 md:leading-8 tracking-wide'>
            Through the{' '}
            <span className='font-semibold'>A.B.T. Reset Framework</span> —{' '}
            <span className='font-semibold'>
              Awareness • Behavioral Shift • Thought Repatterning
            </span>{' '}
            — we help you break free from overthinking, panic, and emotional burnout.
          </p>

          <h3 className='mt-5 text-2xl md:text-3xl'>
            Support for Children
          </h3>
          <p className='mt-2 text-lg md:text-xl leading-7 md:leading-8 tracking-wide'>
            We also provide specialized support for behavioral problems and learning disabilities in children, including ADHD, ASD, ODD, and academic or developmental challenges. Our child-focused behavioral interventions help improve self-regulation, attention, emotional functioning, and learning skills.
          </p>

          <p className='mt-4 text-xl md:text-2xl leading-7 md:leading-8 tracking-wide'>
            Start your journey toward a stable, anxiety-free mind — for you and your child.
          </p>
          <div className='flex gap-6 mt-6 md:mt-8 flex-row font-medium'>
            <button className='bg-[#016b70] w-full text-white px-4 md:px-6 py-4  rounded-full shadow-md hover:bg-[#014f51] transition'>
              Book a Consultation
            </button>

            <button className='bg-[#016b70] w-full text-white px-4 md:px-6 py-4 shadow-md rounded-full hover:bg-[#014f51] transition'>
              For Enquiry
            </button>
          </div>
        </div>
        {/* Image Section */}
        <div className="relative flex-1 overflow-hidden min-h-[650px]">
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
