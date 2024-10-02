'use client'

import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission (e.g., send data to an API)
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Contact Us - DryCleanXPress</title>
        <meta name="description" content="Get in touch with DryCleanXPress for all your dry cleaning needs in Morrisville." />
      </Head>

      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-teal-600">
            DryCleanXPress
          </Link>
          <nav>
            <ul className="flex space-x-6">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-teal-600 transition duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="text-teal-600 font-semibold">(919) 481-0441</div>
        </div>
      </header>

      <main className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-teal-600 mb-8 text-center">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Location</h2>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.198546556542!2d-78.82891068447647!3d35.90286798014401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acf7a7c6b7c2c1%3A0x1b8f6a3c8a7d8b0a!2s3603%20Davis%20Dr%2C%20Morrisville%2C%20NC%2027560!5e0!3m2!1sen!2sus!4v1623345678901!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <MapPin className="w-6 h-6 text-teal-600 mr-2 mt-1" />
                    <div>
                      <strong className="block text-gray-800">Address:</strong>
                      <p className="text-gray-600">3603-103 Davis Drive, Morrisville, NC 27560</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <Phone className="w-6 h-6 text-teal-600 mr-2" />
                    <div>
                      <strong className="block text-gray-800">Phone:</strong>
                      <p className="text-gray-600">919-481-0441</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <Mail className="w-6 h-6 text-teal-600 mr-2" />
                    <div>
                      <strong className="block text-gray-800">Email:</strong>
                      <p className="text-gray-600">drycleanxpressnc@gmail.com</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock className="w-6 h-6 text-teal-600 mr-2 mt-1" />
                    <div>
                      <strong className="block text-gray-800">Hours:</strong>
                      <p className="text-gray-600">Mon - Fri: 7am - 7pm</p>
                      <p className="text-gray-600">Sat: 8am - 5pm</p>
                      <p className="text-gray-600">Sun: Closed</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-teal-600 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 by DRY CLEAN X-PRESS. All rights reserved. Designed by APTÉ</p>
        </div>
      </footer>
    </div>
  )
}
