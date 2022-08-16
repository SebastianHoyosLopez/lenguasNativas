import { Typography } from '@mui/material';
import React from 'react';

import imageMaestroAbelAntonio from '../../../public/image/maetroAbelAntonio.jpg';
import imageMaestroCritobal from '../../../public/image/maestroCristobal.jpg';
import imageMaestroElio from '../../../public/image/BiografiaElio.jpg';
import imageMaestroWilliam from '../../../public/image/BiografiaWilliamYucuna.jpg';
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
      <div style={{ marginTop: '3rem', marginBottom: '3rem', textAlign: 'justify', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '400rem', padding: '2rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <Image src={imageMaestroElio} height={400} width={600} objectFit="cover" alt="Imagen de los maestros" />
          </div>
          <Typography variant="p">
            <strong>Maestro-sabedor en lengua miraña:</strong> <strong>Elio Guillermo Miraña Miraña</strong> pertenece al clan boa del pueblo miraña. Aunque en este pueblo el clan se define por la
            línea materna, sus conocimientos y prácticas culturales los heredó del clan achiote, también del pueblo miraña, a través de su familia materna. Convivió con su tío Luis Gwajko Miraña, el
            último cantor del clan achiote, y de él escuchó historias, consejos y, principalmente, cantos. De ahí surge su interés en los cantos y en los bailes. Tiene un gran interés por compartir lo
            que ha aprendido con otras personas siempre con respeto y responsabilidad, para que el acervo cultural del pueblo miraña sea valorado. Número de contacto: 3125069729
          </Typography>
        </div>
        <div style={{ width: '400rem', padding: '2rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <Image src={imageMaestroWilliam} height={400} width={600} objectFit="cover" alt="Imagen de los maestros" />
          </div>
          <Typography variant="p">
            <strong>Maestro-sabedor en lengua yukuna: </strong> <strong>William Yucuna Tanimuca</strong> nació en el Mirití-Paraná, Amazonas. Es médico tradicional, conocedor del pueblo kamejeya
            (yukuna) y cantor tradicional de diversos bailes de este mismo pueblo. Ha tenido experiencia en el manejo de bailes, de la maloca y en la enseñanza del conocimiento propio a los jóvenes
            indígenas. Así mismo, tiene un amplio conocimiento de las narraciones de origen. Es hablante del idioma yukuna, así como de otros idiomas de la región. Además, es la autoridad tradicional
            de Capiul. Número de contacto: 3155122774
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Biography;
