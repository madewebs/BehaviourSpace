'use client'
import React, { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css' // Import the default styles for the input

export default function Enquiry() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '', // Now a single field for the full phone number (including country code)
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // New handler for the phone input (from react-phone-number-input)
  const handlePhoneChange = (value: string | undefined) => {
    setFormData(prev => ({
      ...prev,
      phone: value || ''
    }))
  }

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault()
    const { name, phone, email, message } = formData

    if (!name || !phone || !email || !message) {
      alert('Please fill all fields')
      return
    }

    // Replace with your WhatsApp business number (with country code, e.g., 919876543210)
    const recipientPhone = '917907961350'

    // The phone is already in international format from the library, so use it directly
    const whatsappMessage = `Name: ${name}%0APhone: ${phone}%0AEmail: ${email}%0AMessage: ${message}`
    const whatsappURL = `https://wa.me/${recipientPhone}?text=For Enquiry%0A${whatsappMessage}`

    window.open(whatsappURL, '_blank')
    setFormData({ name: '', phone: '', email: '', message: '' })
  }

  return (
    <div className="w-full py-8 md:py-12 px-4" id='contact'>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">

          {/* Content Section */}
          <div className="flex-1 flex flex-col justify-start">
            <h1 className="mont text-3xl md:text-4xl  text-[#00494b] font-medium mb-2">
              Get in Touch
            </h1>
            <p className="text-md md:text-xl text-gray-700 mb-4">
              Have questions about our healing and wellness programs? We&apos;re here to help and support your journey to better mental health.
            </p>
            <p className="text-md text-gray-600 mb-8 ">
              Reach out to us through the contact form, and we&apos;ll get back to you as soon as possible. Your wellbeing is our priority.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-2">Why Connect With Us?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start text-lg">
                    <span className="text-gray-700 mr-3">✓</span>
                    <span>Expert guidance and support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-700 mr-3">✓</span>
                    <span>Personalized wellness programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-700 mr-3">✓</span>
                    <span>Confidential and caring environment</span>
                  </li>
                </ul>
              </div>

              {/* Direct Call Button */}
              <a
                href="tel:+917907961350"
                className="inline-flex items-center gap-2 mt-2 px-6 py-3 bg-[#006e69] hover:bg-[#004642] text-white font-semibold rounded-sm transition duration-200 w-fit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                Call Us Now
              </a>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="flex-1">
            <div className="bg-white rounded-xs shadow-xl p-4 md:p-8">
              <h2 className="text-xl md:text-2xl font-medium text-[#016b70] mb-4 md:mb-6">Send us a Message</h2>

              <form onSubmit={handleWhatsApp} className="space-y-4">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-md font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xs outline-none focus:outline-none"
                    placeholder="Your Name"
                    required
                  />
                </div>
                {/* Phone Field with Country Code and Flags */}
                <div>
                  <label htmlFor="phone" className="block text-md font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <PhoneInput
                    international
                    defaultCountry="IN" // Default to India, adjust as needed
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xs outline-none focus:outline-none"
                    placeholder="Your Phone Number"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-md font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xs outline-none focus:outline-none"
                    placeholder="Your Email"
                    required
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-md font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 h-24 border border-gray-300 rounded-xs outline-none focus:outline-none transition resize-none"
                    placeholder="Your Message"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#006e69] hover:bg-[#004642] transition text-[#fefefe] font-semibold py-3 rounded-sm duration-200 mt-2"
                >
                  Send via WhatsApp
                </button>
              </form>

              <p className="text-sm text-gray-500 text-center mt-2">
                We&apos;ll respond to your inquiry within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
