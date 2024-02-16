import React from 'react';
import e from '../../assets/e.png';
import d from '../../assets/d.png';
import './About.css'

const About = () => {
  
  return (
    <div className=" p-8 h-full gradient-background" >
      <div className="flex justify-center items-center mt-6">
          <div >
            <p className="text-gray-300 text-lg">INNOVATE</p>
            <h2 className="text-white text-3xl font-bold  py-4">MEET OUR 
            <span className='text-gradient'>
            <span className='pl-2'>CO-FOUNDERS </span>
            </span></h2>
            <p className='text-white text-md flex justify-center mb-4 '>Get to know the talented individuals behind our incubator</p>
     
          </div>
        </div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap -mx-4 justify-center md:justify-start ">
          
      
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 p-4 lg:pl-4 ">
            <div className="rounded-lg shadow-sm">
              <img
                className="w-[250px]  mx-auto"
                src={d}
                alt="Bandhu Bansal"
              />
             
                <h2 className="font-bold text-xl mb-2 text-white flex justify-center mt-4">Bandhu Bansal, Co-Founder</h2>
                <p className="text-white">
                  Bandhul is an Entrepreneur turned investor. He co-founded Finstreet, which is a crypto-based ed-marketing platform. Through Finstreet, he has strived to make comprehensive education about the crypto sector accessible in India. He is also an advisor to Mining Devs, a blockchain-based edtech platform. Bandhul is also the Advisor for Cryptic Entertainments which is an Edutainment company which aims to raise awareness about crypto. Bandhul's elite expertise in the field of finance has also branded him a regular speaker at leading institutes such as IITs and IIMs.
                </p>
            
            </div>
          </div>
       
       
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 p-4 lg:pl-4">
            <div className="rounded-lg shadow-sm">
              <img
                className="w-[250px] mx-auto"
                src={e}
                alt="Deepak Goyal"
              />
              <div className="p-10 ">
                <h2 className="font-bold text-xl mb-2 text-white flex justify-center">Deepak Goyal, Co-Founder</h2>
                <p className="text-white flex justify-center">
                  An IIT Delhi CS passout, Deepak has been deep into Education for 12+ years. He has mentored many of his students in shaping their career paths and in starting their startup journeys. Being part of many startups himself, he understands the ethos of the startup world and has off-late ventured into Web3.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;