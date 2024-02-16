import React, { useState } from 'react';
import './Animated.Css';
import Mask from '../../src/assets/Mask.png';

const ImageReveal = ({ src }) => {
  const [startAnimation, setStartAnimation] = useState(false);

  return (
    <div className="relative w-[300px] h-[100px] overflow-hidden bg-gray-200">
      {/* Trigger the animation on click or based on your preferred event */}
      <button
        className="absolute z-10 text-sm px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setStartAnimation(true)}
      >
        Reveal Image
      </button>
      <img
        src={Mask}
        alt="Revealing"
        className={`absolute inset-0 h-full transition-all duration-300 ease-linear ${startAnimation ? 'reveal-animation' : '' } `}
        style={startAnimation ? {} : { width: '0%', transitionProperty: 'width', transitionDuration: '3s' }}
      />
    </div>
  );
};

export default ImageReveal;