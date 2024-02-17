import React from 'react';
import icp1 from '../../assets/icp1.png';
import Mask from '../../assets/Mask.png';
import './Home.css';

const Home = () => {
  const isMobileOrTablet = window.innerWidth < 768;

  const handleLearnMoreClick = () => {
    window.open('https://internetcomputer.org/docs/current/developer-docs/getting-started/overview-of-icp', '_blank');
  };

  return (
    <div>
      <hr className='' style={{ backgroundColor: '#1a0037', border: 'none', height: '2px' }} />
      <div className="content min-h-screen px-[10%] py-[4%] flex flex-col justify-between gradient-background-4">
        <div className="flex flex-col md:flex-row justify-center items-center py-4 md:py-4">
          <div className="w-full md:w-7/12 px-4 fadeInUp">
           
            <h2 className="text-white font-bold text-xl text-gradient2">
            
              ABOUT US</h2>
            <header className="text-white text-5xl font-bold py-4">
              <h1 className='mb-3 text-sm'>EMPOWERING STARTUPS </h1>
              <h1 className='mb-3'>TO ACHIEVE THEIR </h1>
              <h1 className='text-gradient-to-br sm:text:lg from-purple-700 via-purple-600 to-indigo-700'>
                <span className='text-gradient'>
                  <span className='pl-2'>VISION</span>
                </span>
              </h1>
            </header>
            <section id="about" className="mb-8">
              <p className="text-md text-white">
                At our incubator, we are dedicated to supporting startups by providing them with the resources, mentorship, and collaboration opportunities they need to succeed. We believe in fostering a vibrant entrepreneurial ecosystem and helping startups turn their ideas into reality.
              </p>
              <div className="flex justify-start space-x-4 mt-12 ">
                <button onClick={handleLearnMoreClick} className="bg-white font-bold text-black md:py-2 py-0 md:px-6 px-3 rounded-full transition duration-300 hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-700 hover:text-white hover:font-bold">Learn more</button>
                <button className="bg-white font-bold text-black py-2 md:px-6 px-3 border border-white rounded-full transition duration-300 hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-700 hover:text-white hover:font-bold">Sign In</button>
              </div>
            </section>
          </div>
          <div className="relative w-full md:w-5/12 mb-10">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="8000" height="9000" version="1.1" className={isMobileOrTablet ? "hidden md:block" : "w-full h-full -mr[388px] hidden md:block"}>
                <defs>
                  <linearGradient id="gradient" x1="2%" y1="25%" x2="100%" y2="500%">
                    <stop offset="0%" stop-color="#D30775" />
                    <stop offset="100%" stop-color="#0000FF" />
                  </linearGradient>
                </defs>
                <path d="M0,100 C100,200 200,0 300,100 C400,200 500,0 600,100 C700,200 800,0 900,100  " />
              </svg>
            </div>
            <div className="w-full max-w-[400px]" style={{ position: 'relative', zIndex: '1' }}>
              <img src={icp1} alt="Description of the image" className={isMobileOrTablet ? "hidden md:block" : "w-full hidden md:block"} />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Home;
