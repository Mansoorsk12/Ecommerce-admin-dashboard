import React from 'react'
import assets from '../assets/assets'

const Navbar = ({ theme ,setTheme}) => {
  return (
    <div>
      <img src={theme=== 'dark' ? assets.logoDark : assets.logoLight} 
      className="w-32 sm:w-40" alt="Logo" />
      <div className="flex space-x-4 sm:max-w-md" >
        <a href="#home" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Home</a>
        <a href="#about" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">About</a>
        <a href="#services" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Services</a> 
        <a href="#contact" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
      </div>
      <div className="flex items-center space-x-4">
        <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium" >Get Started<img src={assets.arrow_icon} alt="Arrow" className="ml-2" /></a>
      </div>
    </div>
  )
}

export default Navbar
