import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-neutral-900 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-emerald-400 tracking-tight">BitBlog</h1>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to='/' className="text-neutral-200 font-medium hover:text-emerald-400 transition">Home</Link>
            <Link to='/feed' className="text-neutral-200 font-medium hover:text-emerald-400 transition">Explore</Link>
            <Link to='/create-blog' className="text-neutral-200 font-medium hover:text-emerald-400 transition">Write</Link>
            <Link to='/contact' className="text-neutral-200 font-medium hover:text-emerald-400 transition">Contact</Link>
          </div>

          {/* Desktop: Login + Profile */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to='/login'>
            <button className="bg-emerald-400 hover:bg-emerald-500 text-black px-5 py-1.5 rounded-full text-sm font-semibold transition-all">
              Login
            </button>
            </Link>

            <Link to="/profile">
              <div className="w-9 h-9 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-full flex items-center justify-center transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5.121 17.804A4.992 4.992 0 0012 21a4.992 4.992 0 006.879-3.196M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </Link>
          </div>

          {/* Mobile: Profile + Hamburger */}
          <div className="md:hidden flex items-center gap-4">
            <Link to="/profile">
              <div className="w-8 h-8 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-full flex items-center justify-center transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5.121 17.804A4.992 4.992 0 0012 21a4.992 4.992 0 006.879-3.196M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </Link>

            <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
              <svg className="w-6 h-6 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} bg-neutral-900 border-t border-neutral-800 px-4`}>
        <div className={`flex flex-col gap-3 py-4 ${mobileOpen ? 'translate-y-0' : '-translate-y-4'} transition-all duration-300 ease-in-out`}>
          <Link to='/' className="text-neutral-200 font-medium hover:text-emerald-400 transition">Home</Link>
          <Link to='/feed' className="text-neutral-200 font-medium hover:text-emerald-400 transition">Explore</Link>
          <Link to='/create-blog' className="text-neutral-200 font-medium hover:text-emerald-400 transition">Write</Link>
          <Link to='/contact' className="text-neutral-200 font-medium hover:text-emerald-400 transition">Contact</Link>

          <Link to='/login'>
          <button className="bg-emerald-400 hover:bg-emerald-500 text-black px-4 py-2 rounded-full text-sm w-full text-left mt-2 transition-all">
            Login
          </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
