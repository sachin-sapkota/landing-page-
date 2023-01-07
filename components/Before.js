import React from 'react';
import Image from 'next/image';
import one from '../public/images/mid/one.png';
const Before = () => {
  return (
    <div className="mid_section_wrapper ">
      <div className="mid_section_title">{title}</div>
      <div className="d-flex gap-3 justify-content-center  ">
        {mid_section.map((data, i) => {
          return (
            <div key={i}>
              <Image src={one} alt="" width={250} height={250} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Before;

const title = 'Before & After';
const mid_section = [
  {
    id: 1,
    image_link: one,
  },
  {
    id: 2,
    image_link: one,
  },
  {
    id: 3,
    image_link: one,
  },
];
