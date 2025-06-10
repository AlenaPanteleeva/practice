import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/images/logo.png';

export const NavMenu = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleMenu = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  const handleChangePage = () => {
    setIsCollapsed(true);
  };

  return (
    <div className="">
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex xs:h-14 md:h-24 items-center justify-between">
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <img src={Logo} className='logo mr-5' alt='Vite logo'/>
                    <Link to="/" className="rounded-md px-3 py-2 text-white hover:bg-black hover:text-white font-montserrat font-normal tracking-tight text-2xl">Главная</Link>
                  </div>
                  <Link to="/films" className="rounded-md px-3 py-2 text-white hover:bg-black hover:text-white font-montserrat font-normal tracking-tight text-2xl">Афиша</Link>
                  <Link to="/news" className="rounded-md px-3 py-2 text-white hover:bg-black hover:text-white font-montserrat font-normal tracking-tight text-2xl">Новости</Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button 
                type="button" 
                className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" 
                aria-controls="mobile-menu" 
                aria-expanded="false" 
                onClick={toggleMenu}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isCollapsed ? 'hidden' : ''}`} id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <Link to="/" className="block rounded-md px-3 py-2 text-white hover:bg-black hover:text-white font-montserrat font-normal tracking-tight" aria-current="page" onClick={handleChangePage}>Главная</Link>
            <Link to="/films" className="block rounded-md px-3 py-2 text-white hover:bg-black hover:text-white font-montserrat font-normal tracking-tight" onClick={handleChangePage}>Афиша</Link>
            <Link to="/news" className="block rounded-md px-3 py-2 text-white hover:bg-black hover:text-white font-montserrat font-normal tracking-tight" onClick={handleChangePage}>Новости</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};