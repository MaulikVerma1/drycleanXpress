import Head from 'next/head'
import Link from 'next/link'
import { Shirt, Home } from 'lucide-react'

const serviceCategories = [
  {
    id: 'clothing',
    name: 'Clothing (Laundry or Dry Cleaning)',
    icon: Shirt,
    items: [
      'Blouses', 'Coats', 'Coveralls', 'Dresses', 'Formal Dresses', 'Wedding Gowns', 
      'Wedding Dress Press', 'Wedding Dress Clean & Preserved', 'Gloves', 'Hat', 
      'Jackets', 'Jumpsuits', 'Pants', 'Robes', 'Scarves', 'Shirts', 'Shorts', 
      'Skirts', 'Sweaters', 'Vests', 'Suits'
    ]
  },
  {
    id: 'household',
    name: 'Household Items',
    icon: Home,
    items: [
      'Bed Skirts', 'Blankets', 'Comforters', 'Drapes', 'Duvets', 'Sheets', 
      'Pillows', 'Napkins', 'Tablecloths', 'Valance & Shams'
    ]
  }
]

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Our Services - DryCleanXPress</title>
        <meta name="description" content="Explore our wide range of dry cleaning and laundry services at DryCleanXPress." />
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
          <h1 className="text-4xl font-bold text-teal-600 mb-8 text-center">Our Services</h1>
          
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 mb-12">
            <p className="text-xl text-gray-600 mb-6">
              Here are some of the items we can clean to perfection for you! If something is not listed here, we are happy to try and accommodate.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            {serviceCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center mb-6">
                  <category.icon className="w-8 h-8 text-teal-600 mr-4" />
                  <h2 className="text-2xl font-semibold text-gray-800">{category.name}</h2>
                </div>
                <ul className="grid grid-cols-2 gap-2">
                  {category.items.map((item, index) => (
                    <li key={index} className="text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-teal-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">Need Something Special?</h3>
            <p className="text-xl text-gray-600 mb-6">
              Don't see what you're looking for? We're always happy to help with special requests!
            </p>
            <Link href="/contact" className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-teal-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 by DRY CLEAN X-PRESS. All rights reserved. Designed by APTÉ</p>
        </div>
      </footer>
    </div>
  )
}
