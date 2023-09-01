import React from 'react'

const Card = () => {
  return (
    <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 container mx-auto'>
      <div class="max-w-sm rounded overflow-hidden shadow-lg relative">
  <img class="w-full h-full rounded-lg" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-card%2Cevent%2Cvisiting-card-design-template-e737b60e438f638ae33ff29cbb26e984_screen.jpg?ts=1597864814" alt="Sunset in the mountains"/>
  <div className=' bottom-5 absolute left-4' >
  <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg  shadow ">
  Explore Now
</button>
 </div>
  </div>
  <div class="max-w-sm rounded overflow-hidden shadow-lg relative">
  <img class="w-full h-full rounded-lg " src="https://www.freepsdking.com/wp-content/uploads/2021/10/Photography-Visiting-Card-Design-Free-Download-2.jpg" alt="Sunset in the mountains"/>
  <div className=' bottom-5 absolute left-4' >
  <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg  shadow">
  Explore Now
</button>
  </div>

  </div>
  <div class="max-w-sm rounded overflow-hidden shadow-lg relative">
  <img class="w-full h-full rounded-lg " src="https://cdn3.f-cdn.com//files/download/49098715/design%20-%203.png?width=780&height=445&fit=crop" alt="Sunset in the mountains"/>
  <div className=' bottom-5 absolute left-4' >
  <button class="bg-white  hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg  shadow">
  Explore Now
</button>
</div>
  </div>
  <div class="max-w-sm rounded overflow-hidden shadow-lg relative">
  <img class="w-full h-full rounded-lg " src="https://templates.mediamodifier.com/5f86c58e588e8351d9ed236f/professional-business-card-template-front-side.jpg" alt="Sunset in the mountains"/>
  <div className=' bottom-5 absolute left-4' >
  <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg  shadow">
  Explore Now
</button>
</div>
  </div>
 
    </div>
  )
}

export default Card