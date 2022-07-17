import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import logoETColombia from '../../../public/image/logodeetColombia.png';

const Institucional = () => {
  return (
    <Box sx={{ padding: '0 8px 0 8px' }}>
      <Box sx={{ marginTop: '-100px', marginBottom: '-50px' }}>
        <Image src={logoETColombia} alt="logo escuela taller de colombia" height={600} />
      </Box>
      <Box sx={{ padding: '3rem', textAlign: 'justify' }}>
        <Typography variant="p" fontSize={25}>
          Las Escuelas taller son instituciones de educación para el trabajo y desarrollo humano que atienden a población en su mayoría de origen rural mediante procesos formativos en programas
          técnicos laborales de un año y cursos complementarios. En estos programas y cursos se vincula a portadores de saberes técnicos como estrategia de valoración, protección y salvaguardia de sus
          conocimientos. Las Escuelas Taller son reconocidas por las distintas secretarías de educación del país y están sujetaos también a su inspección y vigilancia. El objetivo de las Escuelas
          Taller es aportar a la transformación y a la construcción de los proyectos de vida de los aprendices, mediante procesos de formación que fortalezcan su desarrollo personal y que aporten al
          mantenimiento de las tradiciones culturales de nuestro país, sirviendo así como herramienta de paz y desarrollo local.
        </Typography>
      </Box>
    </Box>
  );
};

export default Institucional;
