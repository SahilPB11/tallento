import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      <Header />
      
      {/* Temporary content to show the header */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Header Component Implemented! 🎉</h1>
          <p className="text-lg text-gray-300 mb-8">
            The Tallento.ai header has been successfully created with all navigation elements.
          </p>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold mb-4">✅ Header Features Completed:</h2>
            <ul className="space-y-2 text-sm text-left">
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Tallento.ai logo with tagline
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Navigation items with icons (Job Category, Find Jobs, Notifications)
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Notification badge (29) 
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                User profile image
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                "Post a Job" button with gradient background
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Responsive design for mobile and desktop
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Dark gradient background with smooth borders
              </li>
            </ul>
          </div>
          
          <p className="text-gray-400 mt-8 text-sm">
            Next: Hero Banner component will be implemented
          </p>
        </div>
      </main>
    </div>
  );
}
