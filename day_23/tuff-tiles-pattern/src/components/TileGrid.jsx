import React from 'react';
import Tile from './Tile';
import useTilePattern from './useTilePattern';

const TileGrid = () => {
  const { pattern, dimensions } = useTilePattern();
  
  return (
    <div className="w-full overflow-hidden p-2 md:p-4 flex justify-center">
      <div 
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${dimensions.cols || 8}, 1fr)`,
          gap: '0', // Remove gap between tiles
          width: '100%',
          maxWidth: '1000px'
        }}
      >
        {pattern.map((row, rowIndex) => (
          <React.Fragment key={`row-${rowIndex}`}>
            {row.map((tile, colIndex) => (
              <div 
                key={`tile-${rowIndex}-${colIndex}`}
                style={{ aspectRatio: '1/1' }} // Ensure square tiles
              >
                <Tile 
                  color={tile} 
                  row={rowIndex}
                  col={colIndex}
                />
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TileGrid;