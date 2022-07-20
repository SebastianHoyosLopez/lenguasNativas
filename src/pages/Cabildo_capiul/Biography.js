import { Typography } from '@mui/material';
import React from 'react';

import imageMaestroAbelAntonio from '../../../public/image/maetroAbelAntonio.jpg';
import imageMaestroCritobal from '../../../public/image/maestroCristobal.jpg';
import Image from 'next/image';

const Biography = () => {
  return (
    <div style={{ marginTop: '3rem' }}>
      <Typography variant="h3" align="center">
        biografías de los maestros sabedores
      </Typography>
      <div style={{ marginTop: '3rem', marginBottom: '3rem', textAlign: 'justify', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '400rem', padding: '2rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <Image src={imageMaestroAbelAntonio} height={400} width={600} objectFit="cover" alt="Imagen de los maestros" />
          </div>
          <Typography variant="p">
            <strong>Maestro-sabedor en lengua magüta:</strong>, <strong>Abel Antonio Santos Angarita</strong> nació en el Resguardo Indígena de Arara, Amazonas. Pertenece al clan garza del pueblo
            magüta y aprendió la lengua en el seno de su comunidad, con sus abuelos y sus padres. Es Licenciado en Ciencias Sociales con énfasis en antropología de la Universidad Pontificia
            Bolivariana de Medellín, y Lingüista, Magíster en Estudios Amazónicos y Doctor en Estudios Amazónicos de la Universidad Nacional sede Amazonia. Ha tenido una amplia experiencia como
            docente, investigador y asesor de diversos proyectos en comunidades indígenas. Número de contacto: 3132280033
          </Typography>
        </div>
        <div style={{ width: '400rem', padding: '2rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <Image src={imageMaestroCritobal} height={400} width={600} objectFit="cover" alt="Imagen de los maestros" />
          </div>
          <Typography variant="p">
            <strong>Maestro-sabedor en lengua múrui:</strong> <strong>Cristóbal Fairirama Ofiyateriza</strong> nació en La Chorrera, Amazonas. Pertenece al clan borugo del pueblo múrui, y es hablante
            de la variedad mɨnɨka. Es conocedor de cantos de los distintos tipos de bailes de su pueblo. Trabajó durante más de 40 años ejerciendo la pedagogía en diferentes lugares de la Amazonía.
            Tras su jubilación llegó a la ciudad de Leticia y se vinculó a Capiul. Hoy en día quiere seguir ejerciendo la enseñanza, pero de los conocimientos tradicionales de su pueblo. En el cabildo
            ha sido designado como dueño de baile de la Gente de centro, especialmente del baile de frutas (yuaki). Número de contacto: 3125913360
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Biography;
