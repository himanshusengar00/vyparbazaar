import React from 'react';
import { carousalone, carousaltwo, carousalthree, carousalfour, carousalfive, carousalsix, carousalseven } from '../../../assets';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Carousal = () => {

  const sliderLeft = () => {
    const slider = document.getElementById("slider1");
    slider.scrollLeft = slider.scrollLeft - 300;
  }

  const sliderRight = () => {
    const slider = document.getElementById("slider1");
    slider.scrollLeft = slider.scrollLeft + 300;
  }

  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      <MdChevronLeft 
        onClick={sliderLeft} 
        style={{ 
          fontSize: '40px', 
          color: 'black', // Arrow color
          position: 'absolute', 
          left: '10px', // Position 10px from the left edge
          top: '50%', 
          transform: 'translateY(-50%)', 
          cursor: 'pointer', 
          opacity: 0.7, // Arrow opacity
          transition: 'opacity 0.3s',
          zIndex: 10
        }}
        onMouseEnter={(e) => e.target.style.opacity = 1}
        onMouseLeave={(e) => e.target.style.opacity = 0.7}
      />
      <div
        id={"slider1"}
        style={{ 
          display: 'flex', 
          flexDirection: 'row', 
          gap: '10px', 
          overflowX: 'scroll', 
          scrollBehavior: 'smooth', 
          padding: '0 50px', // Space for arrows on sides
          width: '100%',
          boxSizing: 'border-box',
          scrollSnapType: 'x mandatory', // Ensure snapping
        }}
      >
        <img src={carousalone} alt="carousalone" style={{ height: '170px', flexShrink: 0, objectFit: 'cover', scrollSnapAlign: 'center' }} />
        <img src={carousaltwo} alt="carousaltwo" style={{ height: '170px', flexShrink: 0, objectFit: 'cover', scrollSnapAlign: 'center' }} />
        <img src={carousalthree} alt="carousalthree" style={{ height: '170px', flexShrink: 0, objectFit: 'cover', scrollSnapAlign: 'center' }} />
        <img src={carousalfour} alt="carousalfour" style={{ height: '170px', flexShrink: 0, objectFit: 'cover', scrollSnapAlign: 'center' }} />
        <img src={carousalfive} alt="carousalfive" style={{ height: '170px', flexShrink: 0, objectFit: 'cover', scrollSnapAlign: 'center' }} />
        <img src={carousalsix} alt="carousalsix" style={{ height: '170px', flexShrink: 0, objectFit: 'cover', scrollSnapAlign: 'center' }} />
        <img src={carousalseven} alt="carousalseven" style={{ height: '170px', flexShrink: 0, objectFit: 'cover', borderRadius: '10px', scrollSnapAlign: 'center' }} />
      </div>
      <MdChevronRight 
        onClick={sliderRight} 
        style={{ 
          fontSize: '40px', 
          color: 'black', // Arrow color
          position: 'absolute', 
          right: '10px', // Position 10px from the right edge
          top: '50%', 
          transform: 'translateY(-50%)', 
          cursor: 'pointer', 
          opacity: 0.7, // Arrow opacity
          transition: 'opacity 0.3s',
          zIndex: 10
        }}
        onMouseEnter={(e) => e.target.style.opacity = 1}
        onMouseLeave={(e) => e.target.style.opacity = 0.7}
      />
    </div>
  );
}

export default Carousal;
