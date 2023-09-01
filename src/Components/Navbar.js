import React from "react";
import { AiOutlineHeart } from "react-icons/ai";



const Navbar = () => {
  return (
    <div>
      <nav className="bg-black">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-10 w-auto"
                  src="https://brickfolio.in/assets/img/logo%20big%20size.png"
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <div>
                    <select
                      id="countries"
                      className=" bg-transparent w-16 py-2 text-white focus:bg-transparent hover:bg-black focus:ring-transparent focus:ring-0 focus:border-none"
                    >
                      <option selected>city</option>
                      <option value="US">United States</option>
                    </select>
                  </div>

                  <div>
                    <select
                      id="countries"
                      className=" bg-transparent w-16 py-2 text-white focus:bg-transparent hover:bg-black focus:ring-transparent focus:ring-0 focus:border-none"
                    >
                      <option selected>Buy</option>
                      <option value="US">United States</option>
                    </select>
                  </div>
                  <div>
                    <select
                      id="countries"
                      className=" bg-transparent w-16 py-2 text-white focus:bg-transparent hover:bg-black focus:ring-transparent focus:ring-0 focus:border-none"
                    >
                      <option selected>Rent</option>
                      <option value="Property">Property</option>
                    </select>
                  </div>
                  
                  <div>
                    <select
                      id="countries"
                      className=" bg-transparent w-36 py-2 text-white focus:bg-transparent hover:bg-black focus:ring-transparent focus:ring-0 focus:border-none"
                    >
                      <option selected>More Services</option>
                      <option value="">flights</option>
                    </select>
                  </div>
                  <div>
                    <select
                      id="countries"
                      className=" bg-transparent w-28 py-2 text-white focus:bg-transparent hover:bg-black focus:ring-transparent focus:ring-0 focus:border-none"
                    >
                      <option selected>Resources</option>
                      <option value="">customer</option>
                    </select>
                  </div>

                 
                  <button className="bg-tranphrent hover:bg-tranphrent-100  font-semibold py-2 px-4 text-white  border border-gray-400 rounded shadow">
                 <span className="text-white bg-green-500 p-1 rounded-sm text-xs">data</span>   Intelligence
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute  right-0 flex items-center pl-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button className="bg-tranphrent hover:bg-tranphrent-100  font-semibold py-2 px-4 text-white  border border-gray-400 rounded shadow">
                Sell or rent property
              </button>
              <a
                href="#"
                className="bg-gray-900 text-white rounded-md px-3 py-2 ml-2 text-sm font-medium"
                aria-current="page"
              >
                Login
              </a>

              <button
                type="button"
                className="relative rounded-full  p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <div className="ml-2">
                  <AiOutlineHeart size={20} className="bg-white-600" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
