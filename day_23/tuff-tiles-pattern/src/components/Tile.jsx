import React from 'react';

const Tile = ({ color, row, col }) => {
  // Stone-like appearance variations
  const shadeVariation = Math.random() * 20 - 10; // -10 to +10
  const rotation = Math.random() * 15 - 7.5; // -7.5° to +7.5°
  const scale = 0.9 + Math.random() * 0.2; // 90% to 110%
  
  // Different shades for pink and grey tiles
  const getColorStyle = () => {
    if (color === 'pink') {
      const baseHue = 340; // Pink base
      const hueVariation = Math.random() * 20 - 10; // -10 to +10
      const saturation = 40 + Math.random() * 15; // Lower saturation
      const lightness = 60 + shadeVariation; // 50-70%
      
      return {
        backgroundColor: `hsl(${baseHue + hueVariation}, ${saturation}%, ${lightness}%)`,
        boxShadow: `inset 2px 2px 4px rgba(0, 0, 0, 0.2), 
                   inset -2px -2px 4px rgba(255, 255, 255, 0.1)`
      };
    } else {
      // Grey tiles with stone texture
      const baseHue = 0; // Grey base
      const hueVariation = Math.random() * 10 - 5; // -5 to +5
      const saturation = 5 + Math.random() * 5; // 5-10%
      const lightness = 40 + shadeVariation; // 30-50%
      
      return {
        backgroundColor: `hsl(${baseHue + hueVariation}, ${saturation}%, ${lightness}%)`,
        backgroundImage: `linear-gradient(45deg, 
                          rgba(255,255,255,0.1) 25%, 
                          transparent 25%,
                          transparent 75%, 
                          rgba(0,0,0,0.1) 75%,
                          rgba(0,0,0,0.1)),
                         linear-gradient(45deg, 
                          rgba(0,0,0,0.1) 25%, 
                          transparent 25%,
                          transparent 75%, 
                          rgba(255,255,255,0.1) 75%,
                          rgba(255,255,255,0.1))`,
        backgroundSize: '8px 8px',
        boxShadow: `inset 2px 2px 4px rgba(0, 0, 0, 0.3), 
                   inset -2px -2px 4px rgba(255, 255, 255, 0.1)`
      };
    }
  };

  const colorStyle = getColorStyle();
  
  return (
    <div 
      className="tile rounded-sm transition-all duration-300 hover:z-10 hover:scale-105"
      style={{
        ...colorStyle,
        transform: `rotate(${rotation}deg) scale(${scale})`,
      }}
      data-row={row}
      data-col={col}
    />
  );
};

export default Tile;