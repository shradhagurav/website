import React from "react";
import {FaHome} from "react-icons/fa"
import {IoLogoPwa} from "react-icons/io5"
import {GiSofa} from "react-icons/gi"
import {BsFillBuildingsFill} from "react-icons/bs"
import {BiLogoEtsy} from "react-icons/bi"
import {BiLogoJquery} from "react-icons/bi"
const Contact = () => {
  return (
    <section className="h-fit   flex items-center justify-center container mx-auto">
      <div className="">
        <h1 className="mt-10 mb-5 font-bold text-2xl text-center leading-normal">
          Everything You Need at One Place
        </h1>
        <div className="grid gap-12  grid-cols-1 md:grid-cols-2  lg:grid-cols-3 justify-items-center mt-12">
        {/* first  */}
          <div className="w-[350px] rounded overflow-hidden relative  shadow-lg">
             <div className="top-4 absolute right-4">
             <div className="flex  gap-2">
             <IoLogoPwa size={20}/> 
             <p className="text-xs text-gray-500 font-bold leading-normal">Urban</p>
             </div>
                 
             </div>

            <div className="p-5">
              <div className="font-bold text-xl mb-2">Home Loan</div>
              <ul className="list-disc px-4">
                <li className="text-gray-700">Attractive interest Rates</li>
                <li className="text-gray-700">Grater Loan Eligbility</li>
                <li className="text-gray-700">Loan Offers From Banks</li>
              </ul>

              <button className="bg-transparent mt-6 hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
                Apply Now
              </button>
            </div>

            <div className="bg-blue-100 p-5 rounded-tl-[50px] absolute bottom-0 right-0">
              <FaHome size={50} className="text-blue-700"/>
            </div>
          </div>
             {/* second  */}
          <div className="w-[350px] rounded overflow-hidden relative  shadow-lg">
             <div className="top-4 absolute right-4">
             <div className="flex  gap-2">
             <BiLogoJquery size={20}/> 
             <p className="text-xs text-gray-500 font-bold leading-normal">Real</p>
             </div>
                 
             </div>

            <div className="p-5">
              <div className="font-bold text-xl mb-2">Interios & Furnishing</div>
              <ul className="list-disc px-4">
                <li className="text-gray-700">Lowest Price Garunteed</li>
                <li className="text-gray-700">10-Years Warranty</li>
                <li className="text-gray-700">Timely Delivery Assurance</li>
              </ul>

              <button className="bg-transparent mt-6 hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
               Book Counsaltion
              </button>
            </div>

            <div className="bg-pink-200 p-5 rounded-tl-[50px] absolute bottom-0 right-0">
              <GiSofa size={50} className="text-pink-700"/>
            </div>
          </div>
               {/* third */}
          <div className="w-[350px] rounded overflow-hidden relative  shadow-lg">
             <div className="top-4 absolute right-4">
             <div className="flex  gap-2">
             <BiLogoEtsy size={40}/> 
             <p className="text-xs text-gray-500 font-bold leading-normal"></p>
             </div>
                 
             </div>

            <div className="p-5">
              <div className="font-bold text-xl mb-2">Zero Brokerage Rental</div>
              <ul className="list-disc px-4">
                <li className="text-gray-700">Hassel Free Property Managment Services</li>
                <li className="text-gray-700">Loan Offers From Credit Cards</li>
              </ul>

              <button className="bg-transparent mt-6 hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
                Contact Now
              </button>
            </div>

            <div className="bg-gray-100 p-5 rounded-tl-[50px] absolute bottom-0 right-0">
              <BsFillBuildingsFill size={50} className="text-gray-700"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
