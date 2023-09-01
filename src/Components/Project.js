import React from "react";
import { AiOutlineHeart } from "react-icons/ai";



const Project = () => {
  const cards = [
    {
      id: 1,
      image:
        "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
      title: "M3M Golf Hill",
      location: "Secter 79 , Gurgoan",
      price_range: "Rs 1.57 to 2.63 Cr",
      flats: "3,4 Flats | 1.576-2.634 SQ (salable)",
    },
    {
      id: 2,
      image:
        "https://img.staticmb.com/mbcontent/images/uploads/2022/12/Most-Beautiful-House-in-the-World.jpg",
      title: "Pacifica Enchante",
      location: "Sirum , Chennai",
      price_range: "Rs 20 L",
      flats: "3,4 Flats | 1.576-2.634 SQ (salable)",
    },
    {
      id: 3,
      image:
        "https://www.thehousedesigners.com/images/uploads/SiteImage-Landing-modern-house-plans-1.webp",
      title: "Prestif Elm Park",
      location: "Secter 79 , Banglore",
      price_range: "Rs 1.95 to 2.83 Cr",
      flats: "3,4 Flats | 1.576-2.634 SQ (salable)",
    },
   

  ];
  return (
    <div className="mx-auto md:container ">
      <h1 className="mt-10 mb-5 font-bold text-2xl text-center">
        Hot Selling Projects in India
      </h1>

      <div className="md:flex gap-4">
        <div class="max-w-sm rounded overflow-hidden shadow-lg relative">
          <div class="px-4 py-4">
            <div class="font-bold text-xl mb-2">Best Seller in India</div>
            <p class="text-gray-700 text-base">
              Our freshly brewed list of the best residential projects from top
              rated builders in the country, backed by our award-winning
              start-to-finesh servicess.
            </p>
          </div>
          <div className="">
            <button class="bg-white absolute bottom-4 left-4 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4   border border-gray-400 rounded shadow">
              View All
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
         {cards && cards.map((card,index)=>(
          <div key={index} class="max-w-sm rounded overflow-hidden shadow-lg relative">
            <img
              class="w-full"
              src={card.image}
              alt="Sunset in the mountains"
            />

            <button className="top-2 absolute left-2 text-xs rounded  text-white bg-indigo-600 p-1">Square Assured</button>
            <div className="px-4 py-4">
              <p className="font-bold text-lg mb-2">{card.title}</p>
              <p className="text-lg text-gray-500 mb-4">{card.location}</p>

              <p className="font-bold text-lg mb-2">{card.price_range}</p>
              <p className="text-sm text-gray-500 mb-4">{card.flats}</p>
             
             <div className="flex gap-4 justify-between">
             <button className="bg-gray-300 flex gap-2 hover:bg-gray-500 text-black font-bold py-2 px-4 rounded">
             <span className="mt-1"><AiOutlineHeart size={18}/></span>
              Shortlist
              </button>
             <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Details
              </button>
             </div>

           
            </div>
           
          </div>
         ))}
         
        </div>
      </div>

    </div>
  );
};

export default Project;
