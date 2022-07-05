import React from 'react';
import Image from 'next/image';
import imagenPresentacion from '../../public/image/portadaHome.png';
import { Grid, Paper, styled, Typography } from '@mui/material';

const PortHome = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  lineHeight: '30px',
  fontSize: '1.3rem',
  background: `linear-gradient(90deg, rgba(184,184,184,0.5) 0%, rgba(240,240,240,0.9668242296918768) 32%);`,
}));

const AboutSchool = () => {
  return (
    <>
      <div>
        <Typography variant="h1" sx={{ color: "white", position: 'absolute', zIndex: "1", width: "100%", marginTop: "80px", marginLeft: "2rem" }}>
          Lenguas nativas
        </Typography>
        <div>
          <Image src={imagenPresentacion} alt="Imagen presentación" />
        </div>
      </div>
    </>
  );
};

export default AboutSchool;
