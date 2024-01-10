import React from 'react';
import Card from './Card';

function ForeGround() {
  const data = [
    { description: "this is the first box description", fileSize: ".6MB", close: true, tag: { isOpen: true ,tagTitle: "Download now", tagColor: "green" } },
    { description: "this is the second box description", fileSize: ".4MB", close: false, tag: { isOpen: true ,tagTitle: "Download now", tagColor: "blue" } },
    { description: "this is the third box description", fileSize: ".10MB", close: true, tag: { isOpen: false ,tagTitle: "Download now", tagColor: "green" } },

  ];

  return (
    <div className='fixed top-10 left-0 z-[3] w-full h-full flex items-center justify-start '>
      <div className='flex gap-10 mb-[30rem]'>
        {data.map((item, index) => (
          <Card key={index} data={item} />
        ))}
        
      </div>
    </div>
  );
}

export default ForeGround;
