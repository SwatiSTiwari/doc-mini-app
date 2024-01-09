import React from 'react';
import Card from './Card';

function ForeGround() {
  const data = [
    { description: "this is the first box description", fileSize: "6MB", close: true, isOpen: { tagTitle: "hello", tagColor: "green" } },
    { description: "this is the second box description", fileSize: "6MB", close: true, isOpen: { tagTitle: "hello", tagColor: "green" } },
    { description: "this is the third box description", fileSize: "6MB", close: true, isOpen: { tagTitle: "hello", tagColor: "green" } },
    { description: "this is the fourth box description", fileSize: "6MB", close: true, isOpen: { tagTitle: "hello", tagColor: "green" } }
  ];

  return (
    <div className='fixed top-0 left-0 z-[3] w-full h-full'>
      <div className='relative w-60 h-72 bg-cyan-700 rounded-[20px]'>
        {data.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default ForeGround;
