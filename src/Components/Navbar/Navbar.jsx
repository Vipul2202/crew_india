import React, { useState } from 'react';
import logo8 from '../../assets/logo8.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleApplyNowClick = () => {
    window.open('https://forms.gle/QyLk9ewL4o2oCuV37', '_blank');
  };

  const fontStyle = {
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold'
  };

  return (
    <div>
      <div className={`navbar bg-custom-color text-white p-2 flex justify-between items-center ${isOpen ? 'logo-hidden' : ''}`}>
        <div className="mx-4">
          {!isOpen && <img src={logo8} alt="Logo" className="h-12 md:h-18 lg:h-20 " />}
        </div>
        <div className="flex-grow"></div> {/* This will push the following items to the right */}
        <div className="hidden lg:flex lg:space-x-4 justify-end">
          <a href="#about" className="nav-link" style={fontStyle}>ABOUT</a>
          <a href="#team" className="nav-link" style={fontStyle}>OUR TEAM</a>
          <a href="#gallery" className="nav-link" style={fontStyle}>GALLERY</a>
          <a href="#testimonials" className="nav-link" style={fontStyle}>TESTIMONIALS</a>
          <a href="#faqs" className="nav-link" style={fontStyle}>FAQS</a>
        </div>
       <button className={`lg:hidden px-4 py-2 font-bold bg-purple-500 rounded-md text-white ${isOpen ? 'opacity-50' : 'hover:bg-purple-600'}`} onClick={handleMenuClick}>{isOpen ? `Close` : `Menu`}</button>





        <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <a href="#about" className="block py-2 px-4 text-white hover:text-gray-300" style={fontStyle}>ABOUT</a>
          <a href="/" className="block py-2 px-4 text-white hover:text-gray-300" style={fontStyle}>OUR TEAM</a>
          <a href="#gallery" className="block py-2 px-4 text-white hover:text-gray-300" style={fontStyle}>GALLERY</a>
          <a href="#testimonials" className="block py-2 px-4 text-white hover:text-gray-300" style={fontStyle}>TESTIMONIALS</a>
          <a href="#faqs" className="block py-2 px-4 text-white hover:text-gray-300" style={fontStyle}>FAQS</a>
        </div>
        <div className='pr-8 lg:pr-36'>
          {/* <button className="hidden lg:block px-6 font-bold py-2 bg-gradient-to-r from-pink-600 to-purple-700 rounded-full" onClick={handleApplyNowClick}>Apply Now</button> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar;
