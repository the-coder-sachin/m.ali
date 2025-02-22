import React from 'react'
import {asset}  from '../../assets/assets'

const Navbar = () => {
  return (
    <>
      <nav className="flex bg-white px-4 md:px-12 items-center flex-col md:flex-row justify-center">
        <div className="logo lg:w-[300px] flex items-center gap-1 ">
          <img src="/logo.jpg" alt="" className="h-20 w-fit cursor-pointer" />
        </div>
        <ul className="text-slate-600 justify-between font-bold items-center w-full text-[15px] flex gap-4 py-2">
          <li className="cursor-pointer transition-all duration-150 ease-in-out hover:text-orange-500 uppercase">
            home
          </li>
          <li className="cursor-pointer transition-all duration-150 ease-in-out hover:text-orange-500 uppercase">
            about
          </li>
          <li className="cursor-pointer transition-all duration-150 ease-in-out hover:text-orange-500 uppercase">
            services
          </li>
          <li className="cursor-pointer transition-all duration-150 ease-in-out hover:text-orange-500 uppercase">
            FAQ
          </li>
          <li className="cursor-pointer transition-all duration-150 ease-in-out hover:text-orange-500 uppercase">
            contacts
          </li>
        </ul>

       
      </nav>
      {/* <ul className="text-white justify-between items-center w-full text-[10px] font-semibold flex sm:h-0 sm:hidden bg-sky-700 px-5 py-1">
        <li className="cursor-pointer transition-all duration-150 ease-in-out hover:text-amber-300 uppercase">
          home
        </li>
        <li className="cursor-pointer transition-all duration-150 ease-in-out hover:text-amber-300 uppercase">
          about
        </li>
        <li className="cursor-pointer transition-all duration-150 ease-in-out hover:text-amber-300 uppercase">
          services
        </li>
        <li className="cursor-pointer transition-all duration-150 ease-in-out hover:text-amber-300 uppercase">
          FAQ
        </li>
        <li className="cursor-pointer transition-all duration-150 ease-in-out hover:text-amber-300 uppercase">
          contacts
        </li>
      </ul> */}
    </>
  );
}

export default Navbar