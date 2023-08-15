import React, { useEffect } from 'react';
import "./Slider.css";

function Sider() {
  useEffect(() => {
    const divisor = document.getElementById("divisor");
    const slider = document.getElementById("slider");
    
    function moveDivisor() {
      divisor.style.width = slider.value + "%";
    }
    
    slider.addEventListener("input", moveDivisor);
    
    return () => {
      slider.removeEventListener("input", moveDivisor);
    };
  }, []);

  return (
    <div id="comparison">
      <figure>
        <div id="divisor"></div>
      </figure>
      <input type="range" min="0" max="100" defaultValue="50" id="slider" />
    </div>
  );
}

export default Sider;