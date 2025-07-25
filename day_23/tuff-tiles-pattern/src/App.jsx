import React from 'react';
import TileGrid from './components/TileGrid';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center p-4 md:p-8">
      <header className="w-full max-w-4xl text-center mb-6 md:mb-10">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Tuff Tiles Road Pattern
        </h1>
        <p className="text-gray-300 text-sm md:text-base">
          Stone-like pattern with grey and pink tiles
        </p>
      </header>
      
      <main className="w-full max-w-4xl bg-gray-700/30 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden border border-gray-600/30">
        <TileGrid />
      </main>
      
      <footer className="mt-6 md:mt-10 text-center text-gray-400 text-sm">
        <p>Hover over tiles to see details • Resize the window to see responsive changes</p>
      </footer>
    </div>
  );
}

export default App;