import React, { useState } from 'react';
import SignInPopup from './LogIn'; // Import your SignInPopup component

const Header = () => {
  const [showSignInPopup, setShowSignInPopup] = useState(false);

  const toggleSignInPopup = () => {
    setShowSignInPopup(!showSignInPopup);
  };

  return (
    <header className="bg-white py-4 sticky">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Menu */}
        <div className="flex items-center space-x-4">
          <a href="#" className="text-black hover:text-gray-300">Buy</a>
          <a href="#" className="text-black hover:text-gray-300">Sell</a>
          <a href="#" className="text-black hover:text-gray-300">Agent finder</a>
        </div>

        {/* Logo */}
        <div className="flex justify-center items-center">
          <img src="/path/to/logo.png" alt="Company Logo" className="w-20 h-auto" />
        </div>

        {/* Right Menu */}
        <div className="flex items-center space-x-4">
          <a href="#" className="text-black hover:text-gray-300">Manage Rentals</a>
          <a href="#" className="text-black hover:text-gray-300">Help</a>
          <button onClick={toggleSignInPopup} className="text-black hover:text-gray-300">Sign In</button>
        </div>
      </div>

      {/* Conditional rendering of SignInPopup */}
      {showSignInPopup && <SignInPopup />}
    </header>
  );
}

export default Header;
