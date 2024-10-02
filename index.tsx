import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Leaf } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>DryCleanXPress - Morrisville's First Choice in Dry Cleaning</title>
        <meta name="description" content="DryCleanXPress provides top-quality dry cleaning services in Morrisville with a commitment to customer satisfaction and eco-friendly practices." />
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

      <main>
        <section className="bg-teal-50 py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                  Morrisville's First Choice in Dry Cleaning
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  A tradition of unsurpassed customer service and unwavering commitment to high quality dry cleaning and laundry services.
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
                  Sign up for Free Pickup & Delivery
                </button>
              </div>
              <div className="md:w-1/2">
                <div className="bg-teal-200 rounded-lg p-4">
                  <Image
                    src="https://greenercleaner.net/wp-content/uploads/2023/10/195741983_m_normal_none-1200x780.jpg"
                    alt="DryCleanXPress professional steaming a shirt"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-teal-600 mb-8 text-center">WELCOME</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-6">
                Dry Clean X-Press is ECO-Friendly dry cleaners with the best value in the Morrisville/Cary area. 
                Our team at Dry Clean X-Press Morrisville takes pride in making your clothing and household items the 
                sharpest and brightest!
              </p>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">We are proud to say that we are:</h3>
              <ul className="list-disc list-inside text-xl text-gray-600 mb-6 pl-4">
                <li>Locally owned and operated since 2009</li>
                <li>Fast – offering same day service*</li>
                <li>Service – Dry Cleaning, Laundry, Wedding Gowns, Coats, Comforters, etc.</li>
              </ul>
              <p className="text-xl text-gray-600 mb-6">
                Dry Clean X-Press is conveniently located at 3603-103 Davis Drive, Morrisville, NC 27560. 
                Stop in today to learn about our services or call us at 919-481-0441.
              </p>
              <p className="text-2xl font-bold text-teal-600 text-center">Spend Less! Look Sharp!</p>
            </div>
          </div>
        </section>

        <section className="bg-teal-50 py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold text-teal-600 mb-6 flex items-center">
                  <Leaf className="mr-2" /> ECO FRIENDLY
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  We are committed to the environment:
                </p>
                <p className="text-xl text-gray-600 mb-6">
                  By using environmentally friendly products and processes, we make a daily effort to provide great service 
                  while keeping you, your family and your ecosystem safe.
                </p>
                <p className="text-xl text-gray-600">
                  Our cleaning machines are equipped with eco-friendly solvent that is good for the environment and also 
                  better for garments.
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Eco-friendly dry cleaning process"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-teal-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 by DRY CLEAN X-PRESS. All rights reserved. Designed by APTÉ</p>
        </div>
      </footer>
    </div>
  )
}
