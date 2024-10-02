import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, Leaf, Clock, Shirt } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>About Us - DryCleanXPress</title>
        <meta name="description" content="Learn about DryCleanXPress, your eco-friendly dry cleaners with the best value in the Morrisville/Cary area." />
      </Head>

      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-teal-600">
            DryCleanXPress
          </Link>
          <nav>
            <ul className="flex space-x-6">
              {['Home', 'Services', 'Coupons', 'About', 'Contact'].map((item) => (
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
          <h1 className="text-4xl font-bold text-teal-600 mb-8 text-center">About Us</h1>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <div className="flex flex-col md:flex-row items-center mb-8">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Dry Clean X-Press storefront"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-1/2">
                  <p className="text-xl text-gray-700 mb-4">
                    Dry Clean X-Press is ECO-Friendly dry cleaners with the best value in the Morrisville/Cary area.
                  </p>
                  <p className="text-xl text-gray-700">
                    Our team at Dry Clean X-Press Morrisville takes pride in making your clothing and household items the sharpest and brightest!
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-semibold text-teal-600 mb-4">We are proud to say that we are:</h2>
              <ul className="space-y-4">
                {[
                  { icon: CheckCircle, text: "Locally owned and operated since 2009" },
                  { icon: Clock, text: "Fast – offering Same Day service*" },
                  { icon: Shirt, text: "Service – Dry Cleaning, Laundry, Wedding Gowns, Coats, Comforters, etc." },
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <item.icon className="w-6 h-6 text-teal-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-teal-50 rounded-lg shadow-md p-8">
              <div className="flex items-center mb-4">
                <Leaf className="w-8 h-8 text-teal-600 mr-3" />
                <h2 className="text-2xl font-semibold text-teal-600">Our Commitment to Quality and Environment</h2>
              </div>
              <p className="text-xl text-gray-700 mb-4">
                Dry Clean X-Press is fully equipped with latest top of the line equipment and uses the best, safest and environmentally friendly cleaning supplies, ready to serve you with professional service that our customer deserve.
              </p>
              <Link href="/services" className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-teal-600 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 by DRY CLEAN X-PRESS. All rights reserved. Designed by APTÉ</p>
          <p className="mt-2 text-sm">* Same day service available on garments received before 9:00AM M-F. Please ask store associate for more detail.</p>
        </div>
      </footer>
    </div>
  )
}
