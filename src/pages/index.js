import React from 'react';
import Image from 'next/image';
import imagenPresentacion from '../../public/image/WhatsApp Image 2022-06-16 at 4.44.36 PM.png';
import { Grid, Paper, styled, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
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
      <Typography variant="h2" sx={{ textAlign: 'center' }}>
        Acerca de las Escuelas Taller
      </Typography>
      <Grid container sx={{ display: 'flex', marginTop: '50px' }}>
        <Grid item xs={4} sx={{ marginRight: '100px', marginLeft: '100px' }}>
          <Item>
            <Typography variant="p">
              Las Escuelas taller son instituciones de educación para el trabajo y desarrollo humano que atienden a población en su mayoría de origen rural mediante procesos formativos en programas
              técnicos laborales de un año y cursos complementarios. En estos programas y cursos se vincula a portadores de saberes técnicos como estrategia de valoración, protección y salvaguardia de
              sus conocimientos. Las Escuela Taller son reconocidas por las distintas secretarías de educación del país y están sujetos también a su inspección y vigilancia. El objetivo de las
              Escuelas Taller es aportar a la transformación y a la construcción de los proyectos de vida de los aprendices, mediante procesos de formación que fortalezcan su desarrollo personal y que
              aporten al mantenimiento de las tradiciones culturales de nuestro país, sirviendo así como herramienta de paz y desarrollo local.
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Image src={imagenPresentacion} alt="Imagen presentación" />
        </Grid>
      </Grid>
    </>
  );
};

export default AboutSchool;
