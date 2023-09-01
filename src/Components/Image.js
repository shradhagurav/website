import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsFillBuildingsFill } from "react-icons/bs";
import { FaDollyFlatbed } from "react-icons/fa";
import { BiSolidLandscape } from "react-icons/bi";
import { BiBuildings } from "react-icons/bi";
import { MdLandscape } from "react-icons/md";
import { CgMoreR } from "react-icons/cg";
import { MdOutlineExpandMore } from "react-icons/md";
import { BiCurrentLocation } from "react-icons/bi";
const Image = () => {
  return (
    <section
      className="min-h-screen bg-blue-100 p-32 "
      style={{
        backgroundImage:
          'url("https://www.teahub.io/photos/full/316-3168549_new-york-at-early-morning-wallpaper-new-york.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-5xl font-bold mb-2 bg-clip-text  bg-gradient-to-r text-gray-900 text-center">
        Real Estate Made Real Easy
      </h1>
      <div className="space-x-2 mt-8">
        <div className="bg-white rounded-lg p-4 flex justify-between mx-24 z-10 relative">
          <div className="">
            <div className="ml-2">
              <AiOutlineHome size={30} className="text-gray-600 ml-5" />
            </div>

            <p className="text-sm  text-gray-600 decoration-inherit hover:underline hover:underline-offset-8">
              Buy Properties
            </p>
          </div>
          <div className="">
            <div className="ml-2">
              <FaDollyFlatbed size={30} className="text-gray-600 ml-5" />
            </div>

            <p className="text-sm  text-gray-600 decoration-inherit hover:underline hover:underline-offset-8">
              Rent Properties
            </p>
          </div>
          <div className="">
            <div className="ml-2">
              <BsFillBuildingsFill size={30} className="text-gray-600 ml-3" />
            </div>

            <p className="text-sm  text-gray-600 decoration-inherit hover:underline hover:underline-offset-8">
              New Project
            </p>
          </div>
          <div className="">
            <div className="ml-2">
              <BiSolidLandscape size={30} className="text-gray-600 ml-3" />
            </div>

            <p className="text-sm  text-gray-600 decoration-inherit hover:underline hover:underline-offset-8">
              Plot & Lord
            </p>
          </div>
          <div className="">
            <div className="ml-2">
              <BiBuildings size={30} className="text-gray-600 ml-6" />
            </div>

            <p className="text-sm  text-gray-600 decoration-inherit hover:underline hover:underline-offset-8">
              Commercial Property
            </p>
          </div>
          <div className="">
            <div className="ml-2">
              <MdLandscape size={30} className="text-gray-600 ml-3" />
            </div>

            <p className="text-sm  text-gray-600 decoration-inherit hover:underline hover:underline-offset-8">
              Find Agents
            </p>
          </div>
          <div className="">
            <div className="ml-2">
              <CgMoreR size={30} className="text-gray-600 ml-5" />
            </div>

            <p className="text-sm  text-gray-600 decoration-inherit hover:underline hover:underline-offset-8">
            <select
                    id="countries"
                    className=" bg-transparent w-28  text-gray-900 focus:bg-transparent  focus:ring-transparent focus:ring-0 focus:border-none"
                  >
                    <option selected> More Services</option>
                    <option value="">flights</option>
                  </select>
            </p>
          </div>
        </div>

        <div>
          <div className="-mt-5 bg-black  z-0 p-4  h-20 absolute opacity-70 w-9/12 rounded-lg ">
            <div className="flex gap-6 mt-4 ">
              <div className="bg-white py-2 w-full  rounded-lg px-4 flex gap-4">
                <input
                  type="text"
                  className="focus:ring-0 w-full"
                  placeholder="Search by 2BHK in Banglore for sale "
                />
                <div className=" ">
                  <button className="py-1 px-1 text-xs bg-blue-400 rounded whitespace-pre  flex ">
                    <BiCurrentLocation className="text-blue-800" size={16} />{" "}
                    Near me
                  </button>
                </div>

                <div>
                  <select
                    id="countries"
                    className=" bg-transparent w-36  text-gray-900 focus:bg-transparent  focus:ring-transparent focus:ring-0 focus:border-none"
                  >
                    <option selected>Budget</option>
                    <option value="">flights</option>
                  </select>
                </div>

                <div>
                  <select
                    id="countries"
                    className=" bg-transparent w-36  text-gray-900 focus:bg-transparent  focus:ring-transparent focus:ring-0 focus:border-none"
                  >
                    <option selected>Property Type</option>
                    <option value="">flights</option>
                  </select>
                </div>
              </div>

              <button className="bg-green-500 hover:bg-green-700 opacity-100 text-white font-bold py-2 px-4 rounded">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Image;
