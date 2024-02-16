import React from 'react';
// import a from '../../assets/a.png';
import exl3 from '../../assets/exl3.png';
// import old from '../../assets/old.gif';
import opera from '../../assets/opera.gif';
import './OurTeam.css';

const OurTeam = () => {
    const handleLearnMoreClick = () => {
        window.open('https://internetcomputer.org/docs/current/developer-docs/getting-started/overview-of-icp', '_blank');
      };
    
    return (
        <div className="relative flex px-[12%] py-[10%] h-full w-full " style={{ backgroundColor: '#100025' }}>

            <div
                className="w-full h-[400px]  bg-cover bg-center rounded-xl flex justify-center overflow-hidden "
                style={{ backgroundImage: `url(${opera})` }}
            >
                <div className="absolute justify-center md:justify-start md:left-5 md:p-8 flex flex-col md:ml-[250px] mt-8 md:h-[300px] h-[250px] w-[300px] md:w-[400px] md:border border-opacity-2 rounded-lg shadow-lg p-8 ">

                    <h1 className="text-white text-4xl font-bold sm:mt-2 mt-10">Apply for Incubator </h1>
                    <h1 className="text-white text-4xl font-bold py-2">Cohort</h1>

                    <p className="text-white text-lg mt-4">Join our incubator program and take your startup to the next level</p>

                    <div className="flex justify-start space-x-4 mt-8 mb-4">
                        <a href="https://forms.gle/QyLk9ewL4o2oCuV37" target="_blank" rel="noopener noreferrer" className="bg-white font-bold text-black py-2 sm:px-2 py-0 px-2 whitespace-nowrap rounded-full transition duration-300 hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-700 hover:text-white hover:font-bold s">Apply Now</a>
                        <button onClick={handleLearnMoreClick} className="bg-white font-bold text-black py-2 px-6 border border-white whitespace-nowrap rounded-full transition duration-300 hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-700 hover:text-white hover:font-bold">Learn more</button>
                    </div>
                </div>
            </div>

            <img src={exl3} alt="icp5"
                className="absolute z-10 w-30 h-[600px] mt-0 right-[4px] top-[0rem] md:mt-0 hidden-sm overflow-hidden"
            />
        </div>
    );
};

export default OurTeam;
