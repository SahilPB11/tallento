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

            {/* Suggested Tags */}
            <div className="text-center mb-16">
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-colors cursor-pointer">
              Social Science Teacher
            </span>
            <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-colors cursor-pointer">
              Math Faculty
            </span>
            <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-colors cursor-pointer">
              Physics JEE Expert
            </span>
          </div>
        </div>


         {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Top 1% candidates */}
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <TrophyIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Top 1% candidates,</h3>
            <p className="text-gray-300 text-sm">3x faster hiring</p>
          </div>

          {/* Streamlined hiring */}
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <SparklesIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Streamlined hiring</h3>
            <p className="text-gray-300 text-sm">with AI screening</p>
          </div>

          {/* Advanced filtering */}
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FunnelIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Advanced filtering</h3>
            <p className="text-gray-300 text-sm">& instant scheduling</p>
          </div>
        </div>

        {/* Description Paragraph */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <p className="text-gray-300 text-lg leading-relaxed">
            Empowering education, coaching, and tech sectors to hire verified, 
            ready-to-join talent faster. Find high-paying jobs that match 
            your skills and goals with AI-powered screening, instant interview scheduling, and 24/7 job alerts.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto pb-16">
          {/* Jobs Available */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
            <div className="text-3xl lg:text-4xl font-bold text-white mb-2">7500+</div>
            <div className="text-gray-300 text-sm lg:text-base">Jobs Available</div>
          </div>

          {/* Companies Hiring */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
            <div className="text-3xl lg:text-4xl font-bold text-white mb-2">5500+</div>
            <div className="text-gray-300 text-sm lg:text-base">Companies Hiring</div>
          </div>

          {/* Candidates */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
            <div className="text-3xl lg:text-4xl font-bold text-white mb-2">1M+</div>
            <div className="text-gray-300 text-sm lg:text-base">Candidates</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroBanner;
