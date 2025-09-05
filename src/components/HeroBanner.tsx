import React from 'react';
import { 
  MagnifyingGlassIcon, 
  ChevronDownIcon,
  TrophyIcon,
  FunnelIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const HeroBanner = () => {
  return (
    <section className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 min-h-screen pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Find Your
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-400 via-red-400 to-orange-400 bg-clip-text text-transparent mb-8">
            Dream Job Now
          </h1>
        </div>

        {/* Search Bar Section */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="flex flex-col sm:flex-row gap-4 bg-white/10 backdrop-blur-lg rounded-2xl p-2 border border-white/20">
            {/* Search Input with Icon */}
            <div className="flex-1 flex items-center space-x-3 bg-white rounded-xl px-4 py-3">
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search jobs, skills or companies"
                className="flex-1 outline-none text-gray-700 placeholder-gray-500"
              />
              {/* Dropdown Arrow */}
              <ChevronDownIcon className="w-5 h-5 text-gray-500 cursor-pointer" />
            </div>
            
            {/* Find Jobs Button */}
            <button className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl whitespace-nowrap">
              Find Jobs
            </button>
          </div>
        </div>

        

      </div>
    </section>
  );
};

export default HeroBanner;
