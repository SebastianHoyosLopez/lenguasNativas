import { Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import tallerEscuela from '../../public/image/Logo Escuela.png';
import ministerio from '../../public/image/Logo Mincultura PNG.png';
import talleresEscuela from '../../public/image/logodeetColombia.png';

const Footer = () => {
  return (
    <>
      <hr />
      <Box sx={{ textAlign: 'center', padding: '4rem', display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <Image src={ministerio} alt="imagen ministerio" height={80} width={300} />
        </div>
        <div style={{ marginTop: '-3rem' }}>
          <Image src={talleresEscuela} alt="taller escuela" height={200} width={300} />
        </div>
        <div>
          <Image src={tallerEscuela} alt="taller escuela" height={80} width={300} />
        </div>
      </Box>
    </>
  );
};

export default Footer;
