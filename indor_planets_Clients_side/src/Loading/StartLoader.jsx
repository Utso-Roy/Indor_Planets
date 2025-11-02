import React from 'react';

const StartLoader = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 flex items-center justify-center z-50 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="text-center relative z-10">
        {/* Main logo animation */}
        <div className="relative w-40 h-40 mx-auto mb-8">
          {/* Outer ring */}
          <div className="absolute inset-0 border-4 border-green-400/30 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
          
          {/* Middle rotating ring */}
          <div className="absolute inset-2 border-4 border-emerald-400/50 rounded-full animate-spin" style={{ animationDuration: '4s' }}>
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-green-400 rounded-full"></div>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-emerald-400 rounded-full"></div>
            <div className="absolute top-1/2 -translate-y-1/2 -left-1 w-2 h-2 bg-teal-400 rounded-full"></div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-1 w-2 h-2 bg-lime-400 rounded-full"></div>
          </div>
          
          {/* Center plant icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Pot */}
              <div className="w-12 h-8 bg-gradient-to-b from-amber-600 to-amber-700 rounded-b-lg mx-auto"></div>
              
              {/* Plant stems */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex space-x-1">
                <div className="w-1 h-12 bg-gradient-to-t from-green-600 to-green-400 rounded-full animate-pulse"></div>
                <div className="w-1 h-10 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                <div className="w-1 h-11 bg-gradient-to-t from-teal-600 to-teal-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
              </div>
              
              {/* Leaves */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div className="absolute -left-3 top-2 w-4 h-3 bg-green-500 rounded-full transform -rotate-45 animate-bounce"></div>
                <div className="absolute -right-3 top-2 w-4 h-3 bg-emerald-500 rounded-full transform rotate-45 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="absolute -left-2 top-0 w-3 h-2 bg-teal-500 rounded-full transform -rotate-30 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                <div className="absolute -right-2 top-0 w-3 h-2 bg-lime-500 rounded-full transform rotate-30 animate-bounce" style={{ animationDelay: '0.6s' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Brand name with glow effect */}
        <div className="mb-6">
          <h1 className="text-5xl font-bold text-white mb-2 tracking-wide">
            <span className="inline-block animate-pulse bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent drop-shadow-2xl">
              Green Ghor
            </span>
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-green-400 to-transparent rounded-full"></div>
        </div>
        
        {/* Welcome text with fade animation */}
        <p className="text-green-200 text-xl font-light mb-8 animate-pulse tracking-wide">
          Welcome to Green Ghor
        </p>
        
        {/* Modern progress bar */}
        <div className="w-64 mx-auto mb-6 bg-green-900/50 rounded-full h-2 overflow-hidden backdrop-blur-sm border border-green-500/30">
          <div className="h-full bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
        </div>
        
        {/* Loading dots */}
        <div className="flex justify-center space-x-3">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce shadow-lg shadow-green-400/50"></div>
          <div className="w-3 h-3 bg-emerald-400 rounded-full animate-bounce shadow-lg shadow-emerald-400/50" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-teal-400 rounded-full animate-bounce shadow-lg shadow-teal-400/50" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-lime-400 rounded-full animate-bounce shadow-lg shadow-lime-400/50" style={{ animationDelay: '0.3s' }}></div>
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full opacity-60 animate-ping"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-emerald-400 rounded-full opacity-60 animate-ping" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-teal-400 rounded-full opacity-60 animate-ping" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-lime-400 rounded-full opacity-60 animate-ping" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-green-300 rounded-full opacity-40 animate-ping" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-emerald-300 rounded-full opacity-40 animate-ping" style={{ animationDelay: '2.5s' }}></div>
    </div>
  );
};

export default StartLoader;