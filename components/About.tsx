import React from 'react'

export default function About() {
  return (
    <div className='bg-[#fefefe] text-[#013342] w-full py-16 px-2 md:px-6'>
      <div className='max-w-7xl mx-auto'>
        {/* Heading */}
        <p className='text-4xl md:text-5xl font-semibold mb-4'>
          Welcome to Behavior Space Clinic
        </p>

        {/* Tagline */}
        <p className='text-2xl md:text-3xl font-medium mb-2'>
          Reset Anxiety. Rebuild Balance. Reclaim You.
        </p>

        {/* Main Description */}
        <p className='text-lg leading-relaxed mb-2'>
          Find calm, clarity, and control with evidence-based behavioral therapy.
        </p>

        {/* A.B.T. Framework Section */}
        <p className='text-lg leading-relaxed mb-2'>
          Through the{' '}
          <span className='font-semibold'>A.B.T. Reset Framework</span> —{' '}
          <span className='font-semibold'>
            Awareness • Behavioral Shift • Thought Repatterning
          </span>{' '}
          — we help you break free from overthinking, panic, and emotional burnout.
        </p>

        {/* Children Support Section */}
        <h3 className='text-2xl font-semibold mb-2'>
          Support for Children
        </h3>
        <p className='text-lg  leading-relaxed mb-2'>
          We also provide specialized support for behavioral problems and learning
          disabilities in children, including ADHD, ASD, ODD, and academic or
          developmental challenges.
          Our child-focused behavioral interventions help improve self-regulation,
          attention, emotional functioning, and learning skills.
        </p>

        {/* CTA Text */}
        <p className='text-lg font-semibold'>
          Start your journey toward a stable, anxiety-free mind — for you and your
          child.
        </p>

      </div>
    </div>
  )
}
