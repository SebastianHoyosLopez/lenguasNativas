import Image from 'next/image';
import React from 'react';
import escuelaTallerBoyaca from "../../../public/image/Escuela taller de Boyacá imagen.jpg"

const Lenguas = () => {
  console.log('lenguas');
  return (
    <div>
      <Image src={escuelaTallerBoyaca} />
    </div>
  )
};

export default Lenguas;
