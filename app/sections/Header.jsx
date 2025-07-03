"use client"
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Nav items
  const navList = ['Home', 'Features', 'Pricing', 'Testimonials', 'Contact']

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <header 
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-0' : 'bg-transparent py-4'
      }`}
    >
      <div className="mx-auto md:px-[2em] px-[1em]">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="font-semibold text-[2.6em] max-md:text-[2em] accent-color ">
              Biccas
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navList.map((navItem, i) => (
              <a
                key={i}
                href={`#${navItem.toLowerCase()}`}
                className=" text-[16px] text-[#A6A6A6] font-medium  transition-colors duration-300 relative group"
              >
                {navItem}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 accent-bg transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 font-medium hover:accent-color transition-colors duration-300">
              Login
            </button>
            <button className="accent-bg text-white font-medium rounded-full px-6 py-2 transition-all duration-300  hover:shadow-lg transform hover:-translate-y-0.5">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:accent-color hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={28} className="accent-color" />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Popup */}
      {isOpen && (
        <div 
          className="fixed inset-0 backdrop-blur-[2px] bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="absolute top-0 right-0 w-4/5 h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-end mb-8">
                <button
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={24} className="text-gray-600" />
                </button>
              </div>
              
              <nav className="flex flex-col space-y-6">
                {navList.map((navItem, i) => (
                  <a
                    key={i}
                    href={`#${navItem.toLowerCase()}`}
                    className="text-lg font-medium text-gray-700 hover:accent-color hover:bg-indigo-50 px-4 py-2 rounded-lg transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {navItem}
                  </a>
                ))}
              </nav>
              
              <div className="mt-auto pt-8 space-y-4 border-t border-gray-200">
                <button 
                  className="w-full text-center accent-color font-medium  hover:underline transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                  
                </button>
                <button 
                  className="w-full accent-bg text-white font-medium rounded-full py-3 transition-all duration-300 "
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header