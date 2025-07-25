import { useState, useEffect, useCallback } from 'react';

const generatePattern = (rows, cols) => {
  const pattern = [];
  
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      // Create perfect alternating pattern
      const isPink = (i + j) % 2 === 0;
      row.push(isPink ? 'pink' : 'gray');
    }
    pattern.push(row);
  }
  
  return pattern;
};

const useTilePattern = () => {
  const [pattern, setPattern] = useState([]);
  const [dimensions, setDimensions] = useState({ rows: 0, cols: 0 });

  const calculateDimensions = useCallback(() => {
    const width = window.innerWidth;
    let cols, rows;
    
    if (width < 640) { // Mobile
      cols = 8;
      rows = 8;
    } else if (width < 1024) { // Tablet
      cols = 12;
      rows = 12;
    } else { // Desktop
      cols = 16;
      rows = 16;
    }
    
    return { cols, rows };
  }, []);

  const updatePattern = useCallback(() => {
    const newDimensions = calculateDimensions();
    const newPattern = generatePattern(newDimensions.rows, newDimensions.cols);
    
    setDimensions(newDimensions);
    setPattern(newPattern);
  }, [calculateDimensions]);

  useEffect(() => {
    updatePattern();
    window.addEventListener('resize', updatePattern);
    return () => window.removeEventListener('resize', updatePattern);
  }, [updatePattern]);

  return { pattern, dimensions };
};

export default useTilePattern;