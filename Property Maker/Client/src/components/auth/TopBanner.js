import React from 'react';
import bannerImage from '../../assets/topBanner.webp'
const TopBanner = () => {
  return (
    <div className="">
      <div
        className="h-64 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="absolutebg-transparent p-4 rounded-lg">
          <input type="text" placeholder="Search..." className="border border-gray-300 p-2 rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default TopBanner;
