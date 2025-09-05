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



      </div>
    </section>
  );
};

export default HeroBanner;
