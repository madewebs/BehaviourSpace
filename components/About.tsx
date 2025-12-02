import React from 'react'
import Image from 'next/image'


export default function About() {
  return (
    <div className='bg-[#fefefe] text-[#013342] w-full py-16 px-4 md:px-6'>

      <div className='max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-start'>
        
        {/* Content Section */}
        <div className='space-y-4'>
          <p className='text-3xl md:text-4xl font-semibold'>
            Welcome to Behavior Space Clinic
          </p>

          <p className='text-2xl font-medium'>
            Reset Anxiety. Rebuild Balance. Reclaim You.
          </p>

          <p className='text-lg'>
            Find calm, clarity, and control with evidence-based behavioral therapy.
          </p>

          <p className='text-lg'>
            Through the{' '}
            <span className='font-semibold'>A.B.T. Reset Framework</span> —{' '}
            <span className='font-semibold'>
              Awareness • Behavioral Shift • Thought Repatterning
            </span>{' '}
            — we help you break free from overthinking, panic, and emotional burnout.
          </p>

          <h3 className='text-2xl font-semibold pt-4'>
            Support for Children
          </h3>
          <p className='text-lg'>
            We also provide specialized support for behavioral problems and learning disabilities in children, including ADHD, ASD, ODD, and academic or developmental challenges. Our child-focused behavioral interventions help improve self-regulation, attention, emotional functioning, and learning skills.
          </p>

          <p className='text-lg'>
            Start your journey toward a stable, anxiety-free mind — for you and your child.
          </p>
        </div>

        {/* Image Section */}
        <div className='w-full h-full'>
          <Image
            src="/aboutimg.jpg"
            alt="Behavior Space Clinic"
            width={600}
            height={300}            
            className=""
          />
        </div>
      </div>
    </div>
  )
}
