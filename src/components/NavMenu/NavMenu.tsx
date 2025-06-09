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
                  <Link to="/" className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-white hover:text-white" aria-current="page">
                    <img src={Logo} className='logo mr-5' alt='Vite logo'/>
                    <span className='rounded-md px-3 py-2 hover:bg-gray-700 hover:text-white'>Главная</span>
                  </Link>
                  <Link to="/films" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Афиша</Link>
                  <Link to="/news" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Новости</Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              {/* Mobile menu button */}
              <button type="button" className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-controls="mobile-menu" aria-expanded="false" onClick={toggleMenu}>
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                {/* Menu open: "hidden", Menu closed: "block"  */}
                <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                {/* Menu open: "block", Menu closed: "hidden" */}
                <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state. */}
        <div className={`md:hidden ${isCollapsed ? 'hidden' : ''}`} id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            <Link to="/" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page" onClick={handleChangePage}>Главная</Link>
            <Link to="/films" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" onClick={handleChangePage}>Афиша</Link>
            <Link to="/news" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" onClick={handleChangePage}>Новости</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
