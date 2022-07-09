import { Typography, Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import escuelaTallerBoyaca from '../../../public/image/escuela_taller_Boyaca.jpg';

const Lenguas = () => {
  console.log('lenguas');
  return (
    <>
      <Box
        sx={{
          color: 'white',
          position: 'absolute',
          zIndex: '1',
          width: '45%',
          marginTop: '20rem',
          marginLeft: '5rem',
          textAlign: 'justify',
          background: '#B78A81',
          opacity: 0.8,
          padding: '1rem',
        }}
      >
        <Typography variant="p" fontSize={25}>
          Localizada en Tunja, inició sus labores el 29 de julio de 2011 como parte del Programa Nacional de Escuelas Taller de Colombia, liderado por el Ministerio de Cultura. La Gobernación de
          Boyacá aportó su sede, El Claustro de Santa Clara La Real, en comodato.
          {/* Se caracteriza por su enfoque en la diferencia que permite, con la metodología aprender haciendo, la implementación de
          proyectos sustentables y productivos para el desarrollo económico de las regiones. La Fundación Escuela Taller de Boyacá tiene como objetivos promover procesos para la creación de sentidos
          de vida desde la cultura de paz, contribuir al sostenimiento económico para la disminución de los índices de desempleo, y salvaguardar el patrimonio de la humanidad, recuperando la memoria
          de los saberes tradicionales y conservando el patrimonio material e inmaterial de las regiones de Colombia. La Escuela Taller de Boyacá lidera la formación de sujetos sensibles al contexto y
          a la realidad regional por medio de la reflexión, la crítica y el movimiento estético; y procura aportar a la formación para el trabajo y el desarrollo humano, enfocándose en la recuperación
          y salvaguarda del patrimonio. */}
        </Typography>
      </Box>
      <div>
        <Image src={escuelaTallerBoyaca} alt="imagen escuela taller" />
      </div>
      <Box sx={{ padding: '3rem', textAlign: 'justify' }}>
        <Typography variant="p" fontSize={25}>
          Se caracteriza por su enfoque en la diferencia que permite, con la metodología aprender haciendo, la implementación de proyectos sustentables y productivos para el desarrollo económico de
          las regiones. La Fundación Escuela Taller de Boyacá tiene como objetivos promover procesos para la creación de sentidos de vida desde la cultura de paz, contribuir al sostenimiento económico
          para la disminución de los índices de desempleo, y salvaguardar el patrimonio de la humanidad, recuperando la memoria de los saberes tradicionales y conservando el patrimonio material e
          inmaterial de las regiones de Colombia. La Escuela Taller de Boyacá lidera la formación de sujetos sensibles al contexto y a la realidad regional por medio de la reflexión, la crítica y el
          movimiento estético; y procura aportar a la formación para el trabajo y el desarrollo humano, enfocándose en la recuperación y salvaguarda del patrimonio.
        </Typography>
      </Box>
    </>
  );
};

export default Lenguas;
