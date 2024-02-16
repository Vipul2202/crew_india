import React from 'react';
import Group from '../../assets/Group.png';
import './Gallery.css'; 

const Gallery = () => {
  return (
    <div className='h-full ' style={{ backgroundColor: '#100025' }}>
      <div className="text-center relative">
        <h3 className='text-white text-md font-bold highlights-word '>
          <div className="loader1"></div><div className='lg:mb-12 md:mb-1 lg:pr-[20rem]'>HIGHLIGHTS</div>
        </h3>
        <h1 className="text-white text-4xl font-bold mt-2">OUR GALLERY &<span className='text-gradient'>
          <span className='pl-2'>SESSION</span>
        </span></h1>
        <div className='flex justify-center py-10'>
          <img src={Group} alt="Logo" className="w-full md:w-[80%] lg:w-[70%] xl:w-[60%] p-6 rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
