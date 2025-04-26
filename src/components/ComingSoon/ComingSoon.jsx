import React from 'react';

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center px-4">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-pulse">Coming Soon</h1>
      <p className="text-lg md:text-xl text-gray-300 mb-8">
        We're working hard to bring something amazing. Stay tuned!
      </p>
      <div className="flex space-x-4">
        <a href="#" className="text-white hover:text-blue-500 transition duration-300">
          <i className="fab fa-facebook fa-lg"></i>
        </a>
        <a href="#" className="text-white hover:text-pink-500 transition duration-300">
          <i className="fab fa-instagram fa-lg"></i>
        </a>
        <a href="#" className="text-white hover:text-blue-400 transition duration-300">
          <i className="fab fa-twitter fa-lg"></i>
        </a>
      </div>
    </div>
  );
};

export default ComingSoon;
