import { useState, useEffect } from 'react';

export default function PageNotFound() {
  const [hover, setHover] = useState(false);
  
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-50 p-4 overflow-hidden">
      <div className="flex flex-col items-center md:items-end md:mr-8 mb-6 md:mb-0">
        <div className="relative w-40 sm:w-48 h-56 sm:h-64 scale-90 sm:scale-100">
          {/* Robot Body */}
          <div className="absolute bottom-0 w-28 sm:w-32 h-36 sm:h-40 bg-white rounded-t-full rounded-b-2xl mx-auto left-0 right-0 shadow-lg"></div>
          
          {/* Robot Head */}
          <div className="absolute top-0 w-32 sm:w-36 h-20 sm:h-24 bg-gradient-to-b from-gray-800 to-blue-900 rounded-t-full rounded-b-lg mx-auto left-0 right-0 shadow-lg">
            {/* Eye Area */}
            <div className="absolute top-5 sm:top-6 w-20 sm:w-24 h-8 flex justify-center space-x-4 mx-auto left-0 right-0">
              {/* Eyes */}
              <div className={`w-5 sm:w-6 h-5 sm:h-6 rounded-full ${hover ? 'bg-blue-400' : 'bg-blue-300'} transition-all duration-300 animate-pulse`}></div>
              <div className={`w-5 sm:w-6 h-5 sm:h-6 rounded-full ${hover ? 'bg-blue-400' : 'bg-blue-300'} transition-all duration-300 animate-pulse`}></div>
            </div>
          </div>
          
          {/* Robot Arms */}
          <div className="absolute bottom-20 sm:bottom-20 left-1 w-3 sm:w-4 h-14 sm:h-16 bg-white rounded-full"></div>
          <div className="absolute bottom-20 sm:bottom-20 right-1 w-3 sm:w-4 h-14 sm:h-16 bg-white rounded-full"></div>
          
          {/* Robot Legs */}
          <div className="absolute bottom-0 left-6 w-5 sm:w-6 h-10 sm:h-12 bg-white rounded-b-lg"></div>
          <div className="absolute bottom-0 right-6 w-5 sm:w-6 h-10 sm:h-12 bg-white rounded-b-lg"></div>
          
          {/* Center Button */}
          <div className="absolute top-28 sm:top-32 w-10 sm:w-12 h-10 sm:h-12 bg-blue-400 rounded-full mx-auto left-0 right-0 flex items-center justify-center shadow-md">
            <div className="text-white font-bold text-xs">UX</div>
          </div>
          
          {/* Wires */}
          <div className="absolute top-24 sm:top-28 left-10 sm:left-12 w-1 h-3 sm:h-4 bg-red-400"></div>
          <div className="absolute top-24 sm:top-28 right-10 sm:right-12 w-1 h-3 sm:h-4 bg-yellow-400"></div>
          <div className="absolute bottom-2 left-8 sm:left-10 w-1 h-3 sm:h-4 bg-green-400"></div>
          <div className="absolute bottom-2 right-8 sm:right-10 w-1 h-3 sm:h-4 bg-yellow-400"></div>
        </div>
      </div>
      
      <div className="flex flex-col items-center md:items-start">
        <div className="text-blue-800 font-bold text-right">
          <span className="text-xs sm:text-sm">eleks'</span>
        </div>
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-blue-800 mb-2">404</h1>
        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">... Oops! Something is missing</p>
        <button 
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-8 sm:px-10 rounded transition-colors duration-300"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          HOME
        </button>
      </div>
    </div>
  );
}