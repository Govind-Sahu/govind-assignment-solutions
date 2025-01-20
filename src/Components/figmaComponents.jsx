import React from "react";
import "./figma.css"; 
const FigmaComponent = () => {
  return (
    <div className="p-6 bg-gray-100">
<div className="mt-8 mx-auto image-container">
  <div className="flex justify-center gap-4 h-full items-center animate-pulse">
    <img
      src="src/images/4.png"
      alt="Image 1"
      className="responsive-image"
    />
    <img
      src="src/images/2.png"
      alt="Image 2"
      className="responsive-image"
    />
    <img
      src="src/images/5.png"
      alt="Image 3"
      className="responsive-image"
    />
    <img
      src="src/images/1.png"
      alt="Image 4"
      className="responsive-image"
    />
    <img
      src="src/images/3.png"
      alt="Image 5"
      className="responsive-image"
    />
    
  </div>
</div>
    </div>
  );
};

export default FigmaComponent;
