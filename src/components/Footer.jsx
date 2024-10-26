

import React from 'react'
 import bgShadow from "../assets/bg-shadow.png";
import logoFooter from "../assets/logo-footer.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white  relative pt-48">
      {/* Newsletter Subscription */}
      <div className="max-w-6xl mx-auto m-10 px-4 py-12 absolute top-0 left-0 right-0 -translate-y-1/2"
        style={{
          boxSizing: 'border-box',
          border: '2px solid rgb(255, 255, 255)',
          borderRadius: '24px',
          background: 'rgba(255, 255, 255, 0.15)',
        }}
      >
        <div className="bg-white rounded-3xl shadow-lg p-8 relative overflow-hidden"
         style={{
                     backgroundImage: `url(${bgShadow})`,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center',
                     
                   }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-orange-100 opacity-50 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">Subscribe to our Newsletter</h2>
            <p className="text-gray-600 text-center mb-6">Get the latest updates and news right in your inbox!</p>
            <form className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-l-full border-2 border-r-0 border-gray-300 focus:outline-none focus:border-blue-500 text-gray-800"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 rounded-r-full bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold hover:from-pink-600 hover:to-orange-600 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex justify-center mb-8">
          <img
            src={logoFooter}
            alt="Cricket Logo"
            
            className="rounded-full p-2"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 text-sm">
              We are a passionate team dedicated to providing the best services to our customers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for the latest updates.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-l-full bg-gray-800 text-white border-2 border-r-0 border-gray-700 focus:outline-none focus:border-blue-500"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 rounded-r-full bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold hover:from-pink-600 hover:to-orange-600 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Your Company All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

