import Head from 'next/head'
import Link from 'next/link'
import { Shirt, Wind, Umbrella } from 'lucide-react'

const coupons = [
  {
    title: "WEB ONLY! BRING 8 PIECES (SHIRTS) GET THE 9TH PIECE CLEANED - FREE!",
    icon: Shirt,
    description: "With this website coupon only. Offer cannot be combined with any other offers."
  },
  {
    title: "WEB ONLY! BRING 8 PIECES (DRY CLEANING) GET THE 9TH PIECE CLEANED - FREE!",
    icon: Wind,
    description: "With this website coupon only. Offer cannot be combined with any other offers."
  },
  {
    title: "WEB ONLY! $14.99 EACH. ANY SIZE COMFORTER.",
    icon: Umbrella,
    description: "With this website coupon only. Offer cannot be combined with any other offers."
  }
]

export default function Coupons() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Coupons - DryCleanXPress</title>
        <meta name="description" content="Save money with our exclusive web coupons for dry cleaning services at DryCleanXPress." />
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
          <h1 className="text-4xl font-bold text-teal-600 mb-8 text-center">Coupons</h1>
          
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 mb-12">
            <p className="text-xl text-gray-600 mb-6">
              Print or show any of the following coupons for additional discounts at our store. Limit one per customer.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {coupons.map((coupon, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border-2 border-dashed border-teal-500">
                <div className="flex justify-center mb-4">
                  <coupon.icon className="w-16 h-16 text-teal-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">{coupon.title}</h2>
                <p className="text-gray-600 text-center mb-6">{coupon.description}</p>
                <div className="text-center">
                  <button 
                    className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                    onClick={() => window.print()}
                  >
                    Print Coupon
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-teal-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">Ready to Save?</h3>
            <p className="text-xl text-gray-600 mb-6">
              Visit our store and present these coupons to enjoy great discounts on our services!
            </p>
            <Link href="/contact" className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
              Find Our Location
            </Link>
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
