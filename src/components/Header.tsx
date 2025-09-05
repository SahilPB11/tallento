import React from 'react';
import Image from 'next/image';
import { 
  MagnifyingGlassIcon, 
  BellIcon,
  Squares2X2Icon,
  PlusIcon 
} from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-3">
              {/* Logo Icon - Using a placeholder geometric design */}
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-gradient-to-br from-purple-600 to-blue-600 rounded transform rotate-45"></div>
              </div>
              
              <div className="text-white">
                <h1 className="text-xl lg:text-2xl font-bold">Tallento.ai</h1>
                <p className="text-xs lg:text-sm text-gray-300 hidden sm:block">Where AI Meets Ambition</p>
              </div>
            </div>
          </div>

          {/* Navigation Items - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Job Category */}
            <div className="flex items-center space-x-2 text-white hover:text-purple-300 transition-colors cursor-pointer">
              <Squares2X2Icon className="w-5 h-5" />
              <span className="font-medium">Job Category</span>
            </div>

            {/* Find Jobs */}
            <div className="flex items-center space-x-2 text-white hover:text-purple-300 transition-colors cursor-pointer">
              <MagnifyingGlassIcon className="w-5 h-5" />
              <span className="font-medium">Find Jobs</span>
            </div>

            {/* Notifications */}
            <div className="relative flex items-center space-x-2 text-white hover:text-purple-300 transition-colors cursor-pointer">
              <div className="relative">
                <BellIcon className="w-5 h-5" />
                {/* Notification Badge */}
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  29
                </span>
              </div>
              <span className="font-medium">Notifications</span>
            </div>

            {/* Profile Image */}
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-purple-400 cursor-pointer hover:border-purple-300 transition-colors">
              <Image
                src="/api/placeholder/40/40"
                alt="Profile"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
          </nav>

          {/* Post a Job Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Post a Job Button */}
            <button className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full font-semibold transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl">
              <PlusIcon className="w-4 h-4 lg:w-5 lg:h-5" />
              <span className="hidden sm:inline">Post a Job</span>
              <span className="sm:hidden">Post</span>
            </button>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-white p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden border-t border-purple-500/20 py-4">
          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-2 text-white py-2">
              <Squares2X2Icon className="w-5 h-5" />
              <span>Job Category</span>
            </div>
            <div className="flex items-center space-x-2 text-white py-2">
              <MagnifyingGlassIcon className="w-5 h-5" />
              <span>Find Jobs</span>
            </div>
            <div className="flex items-center space-x-2 text-white py-2">
              <div className="relative">
                <BellIcon className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  29
                </span>
              </div>
              <span>Notifications</span>
            </div>
            <div className="flex items-center space-x-2 text-white py-2">
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-purple-400">
                <Image
                  src="/api/placeholder/32/32"
                  alt="Profile"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <span>Profile</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
