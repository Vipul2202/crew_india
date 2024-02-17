import React, { useRef, useEffect, useState } from 'react';
import animated from '../../assets/animated.gif';
import Scroll from '../../assets/Scroll.png';
import './Splash.Css';

const Splash = () => {
  const scrollRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {

    const isDesktopScreen = () => {
      return window.innerWidth > 768; // Adjust the value according to your desktop screen width
    };

    // Set initial desktop status
    setIsDesktop(isDesktopScreen());

    // Update desktop status on window resize
    const handleResize = () => {
      setIsDesktop(isDesktopScreen());
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleScrollClick = () => {

    const oneStepHeight = window.innerHeight;

  
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

   
    const targetScrollPosition = currentScrollPosition + 1.2 * oneStepHeight; 

    window.scrollTo({
      top: targetScrollPosition,
      behavior: 'smooth'
    });
  };
  const handleLearnMoreClick = () => {
    // Open the desired website URL in a new tab when "Learn more" button is clicked
    window.open('https://internetcomputer.org/docs/current/developer-docs/getting-started/overview-of-icp', '_blank');
  };
  const handleApplyNowClick = () => {
    window.open('https://forms.gle/QyLk9ewL4o2oCuV37', '_blank');
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-gradient-to-r"
      style={{
        backgroundColor: '#100025',
        backgroundImage: `url(${animated})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transform: 'rotate(90%)',
      }}
    >
      <div className="text-white text-center mt-44 mb-96 fadeInUp">
      <h1 className="lg:text-6xl  text:2xl font-bold ">
  Empowering Startups To <br /> Thrive In The{' '}
  <span className="text-gradient">
    <span className="pl-2" style={{
      background: 'linear-gradient(90deg, #f48fb1, #6a1b9a)', 
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }}>INCUBATOR</span>
  </span>
</h1>

        <div className="flex justify-center space-x-4 mt-16">
          <button
            className="bg-white font-bold text-black md:py-2 py-0 md:px-6 px-3 rounded-full transition duration-300 hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-700 hover:text-white hover:font-bold"
            onClick={handleLearnMoreClick}
          >
            Learn more
          </button>
          <button className="lg:block px-6 font-bold py-2 bg-gradient-to-r from-pink-600 to-purple-700 rounded-full" onClick={handleApplyNowClick}>Apply Now</button>
        </div>
      </div>

      {isDesktop && (
        <img
          ref={scrollRef}
          src={Scroll}
          className='mb-0 mt-10'
          alt="scroll"
          style={{
            position: 'absolute',
            bottom: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            bottom: '-97px',
            height: '280px',
            cursor: 'pointer', // Add cursor pointer for better UX
            transition: 'transform 0.3s ease-in-out', // Add transition for smooth zoom effect
          }}
          onClick={handleScrollClick}
        />
      )}
    </div>
  );
};

export default Splash;
