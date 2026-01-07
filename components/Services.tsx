import React from 'react'

export default function Services() {
  return (
    <div className='bg-[#fefefe] text-[#00494b] w-full py-8 md:py-10'>
      <div className='max-w-full mx-auto md:max-w-7xl px-4 md:px-6'>
        
        {/* Header */}
        <div className="text-center mb-8 md:mb-10 ">
          <h1 className="text-3xl md:text-4xl mb-2 text-[#00412b] leading-tight font-medium">
            Our Services
          </h1>
          <p className="text-md md:text-xl text-[#00412b] max-w-3xl mx-auto leading-relaxed">
            We offer compassionate, evidence-based psychological care for children, adolescents, adults, and families.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 inter">
          {/* Counseling Services */}
          <div className="bg-white p-6 md:p-8 rounded-sm border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-medium text-[#016b70] mb-3">Counseling Services</h3>
            <p className="text-[#00412b] leading-relaxed">
              Individual, child, family, marital & premarital counseling
            </p>
          </div>

          {/* Psychological Therapies */}
          <div className="bg-white p-6 md:p-8 rounded-sm border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-medium text-[#016b70] mb-3">Psychological Therapies</h3>
            <p className="text-[#00412b] leading-relaxed">
              CBT, DBT, ABA, Behavior Therapy, Play Therapy, Trauma-Focused & Mindfulness-Based Therapies
            </p>
          </div>

          {/* Child Development */}
          <div className="bg-white p-6 md:p-8 rounded-sm border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-medium text-[#016b70] mb-3">Child Development & Special Needs</h3>
            <p className="text-[#00412b] leading-relaxed">
              ASD, ADHD, Learning Disability support, early intervention & parent training
            </p>
          </div>

          {/* Psychological Assessments */}
          <div className="bg-white p-6 md:p-8 rounded-sm border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-medium text-[#016b70] mb-3">Psychological Assessments</h3>
            <p className="text-[#00412b] leading-relaxed">
              Developmental, behavioral, emotional & learning screenings
            </p>
          </div>

          {/* Internship & Training */}
          <div className="bg-white p-6 md:p-8 rounded-sm border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-medium text-[#016b70] mb-3">Internship & Professional Training</h3>
            <p className="text-[#00412b] leading-relaxed">
              Psychology internships, supervised clinical training & workshops
            </p>
          </div>

          {/* Courses & Certification */}
          <div className="bg-white p-6 md:p-8 rounded-sm border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-medium text-[#016b70] mb-3">Courses & Certification Programs</h3>
            <p className="text-[#00412b] leading-relaxed">
              Counseling & psychotherapy courses, ABA training & skill-based programs
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
