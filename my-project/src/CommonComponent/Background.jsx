import React from 'react';

function Background() {
  return (
    <div className='absolute w-full h-full z-2'>
      <div className="relative w-full h-screen bg-slate-800">
        <div className="absolute top-1/8 w-full h-1/5 text-center">
          document
        </div> 
        <h1 className="absolute font-semibold text-center text-5xl left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">Docs.</h1>
      </div>
    </div>
  );
}

export default Background;
