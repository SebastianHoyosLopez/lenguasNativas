import { Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import tallerEscuela from '../public/image/Logo Escuela - copia.png';
import ministerio from '../public/image/Logo Mincultura PNG.png';
import talleresEscuela from '../public/image/logo de etColombia.png';

const Footer = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: '4rem' }}>
      <hr />
      <Image src={tallerEscuela} alt="taller escuela" height={120} width={180} style={{ marginRight: '1rem' }} />
      <Image src={ministerio} alt="imagen ministerio" height={120} width={440} />
      <Image src={talleresEscuela} alt="talleres escuela de colombia" height={140} width={150} />
    </Box>
  );
};

export default Footer;
