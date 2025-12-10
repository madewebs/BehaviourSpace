import React from 'react'
import Image from 'next/image'


export default function About() {
  return (
    <div className='bg-[#fefefe] text-[#005658] w-full py-10 px-4 md:px-6'>

      <div className='max-w-full mx-auto md:max-w-7xl flex flex-col lg:flex-row gap-16 items-stretch'>
        
        {/* Content Section */}
        <div className='space-y-5 flex-1'>
          <p className='text-4xl md:text-5xl raleway font-medium'>
            Welcome to Behavior Space Clinic
          </p>

          <p className=' text-2xl md:text-3xl'>
            Reset Anxiety. Rebuild Balance. Reclaim You.
          </p>

          <p className='text-md md:text-lg leading-6 md:leading-8 tracking-wider'>
            Find calm, clarity, and control with evidence-based behavioral therapy.
          </p>

          <p className='text-md md:text-lg leading-6 md:leading-8 tracking-wider'>
            Through the{' '}
            <span className='font-semibold'>A.B.T. Reset Framework</span> —{' '}
            <span className='font-semibold'>
              Awareness • Behavioral Shift • Thought Repatterning
            </span>{' '}
            — we help you break free from overthinking, panic, and emotional burnout.
          </p>

          <h3 className='text-2xl md:text-3xl'>
            Support for Children
          </h3>
          <p className='text-md md:text-lg leading-6 md:leading-8 tracking-wider'>
            We also provide specialized support for behavioral problems and learning disabilities in children, including ADHD, ASD, ODD, and academic or developmental challenges. Our child-focused behavioral interventions help improve self-regulation, attention, emotional functioning, and learning skills.
          </p>

          <p className='text-xl md:text-2xl leading-6 md:leading-8'>
            Start your journey toward a stable, anxiety-free mind — for you and your child.
          </p>
          <div className='flex gap-6 md:mt-8 flex-row mont font-medium'>
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
