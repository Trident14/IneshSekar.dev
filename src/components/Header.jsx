import React from 'react';

const Header = () => {
  return (
    <header className="relative z-50 bg-white dark:bg-gray-900">
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <a href="#" className="text-xl font-bold tracking-tighter">
                Portfolio<span className="text-blue-600">.dev</span>
              </a>
            </div>
            {/* Add other nav links here */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;