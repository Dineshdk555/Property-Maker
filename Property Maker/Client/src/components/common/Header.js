import React, { useState } from 'react';
import SignInPopup from '../auth/LogIn';


const Header = () => {
  const [showSignInPopup, setShowSignInPopup] = useState(false);

  const toggleSignInPopup = () => {
    setShowSignInPopup(!showSignInPopup);
  };

  return (
    <header className="bg-gray-300 py-4 sticky mx-auto max-w-screen-xl px-4  sm:px-6 lg:px-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Menu */}
        <div className="flex items-center space-x-4">
          <a href="#" className="text-black hover:text-gray-600">Buy</a>
          <a href="#" className="text-black hover:text-gray-600">Sell</a>
          <a href="#" className="text-black hover:text-gray-600">Agent finder</a>
        </div>

        {/* Logo */}
        <div className="flex justify-center items-center">
          <img src="/path/to/logo.png" alt="Company Logo" className="w-20 h-auto" />
        </div>

        {/* Right Menu */}
        <div className="flex items-center space-x-4">
          <a href="#" className="text-black hover:text-gray-600">Manage Rentals</a>
          <a href="#" className="text-black hover:text-gray-600">Help</a>
          <button onClick={toggleSignInPopup} className="text-black hover:text-gray-600">Sign In</button>
        </div>
      </div>

      {/* Conditional rendering of SignInPopup */}
      {showSignInPopup && <SignInPopup closePopup={toggleSignInPopup}/>}
    </header>
  );
}

export default Header;
