import React from 'react'
import Image from 'next/image'


export default function About() {
  return (
    <div className='bg-[#fefefe] text-[#004c4f]/90 w-full py-8 md:py-16 px-4 md:px-6'>

      <div className='max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-stretch'>
        
        {/* Content Section */}
        <div className='space-y-5 flex-1 font-medium'>
          <p className='text-4xl md:text-5xl raleway font-semibold'>
            Welcome to Behavior Space Clinic
          </p>

          <p className=' text-2xl md:text-3xl'>
            Reset Anxiety. Rebuild Balance. Reclaim You.
          </p>

          <p className='text-md md:text-lg'>
            Find calm, clarity, and control with evidence-based behavioral therapy.
          </p>

          <p className='text-md md:text-lg'>
            Through the{' '}
            <span className='font-semibold'>A.B.T. Reset Framework</span> —{' '}
            <span className='font-semibold'>
              Awareness • Behavioral Shift • Thought Repatterning
            </span>{' '}
            — we help you break free from overthinking, panic, and emotional burnout.
          </p>

          <h3 className='text-xl md:text-2xl'>
            Support for Children
          </h3>
          <p className='text-md md:text-lg'>
            We also provide specialized support for behavioral problems and learning disabilities in children, including ADHD, ASD, ODD, and academic or developmental challenges. Our child-focused behavioral interventions help improve self-regulation, attention, emotional functioning, and learning skills.
          </p>

          <p className='text-md md:text-lg'>
            Start your journey toward a stable, anxiety-free mind — for you and your child.
          </p>
          <div className='flex gap-6 flex-row mont font-medium'>
            <button className='bg-[#016b70]  w-full md:max-w-50 text-white px-6 py-3 rounded-full shadow-md hover:bg-[#014f51] transition'>
              Book a Consultation
            </button>

            <button className='bg-[#016b70] w-full md:max-w-50 text-white px-6 py-3 shadow-md rounded-full hover:bg-[#014f51] transition'>
              For Enquiry
            </button>
          </div>
        </div>
        {/* Image Section */}
        <div className="relative flex-1 overflow-hidden min-h-[600px]">
          <Image
            src="/aboutimg.jpg"
            alt="Behavior Space Clinic"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}
