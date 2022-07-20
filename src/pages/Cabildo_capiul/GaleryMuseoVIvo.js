import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Typography } from '@mui/material';
import Image from 'next/image';
import { itemDataCapiul } from '../../assets/Images';
import Link from 'next/link';
// import Link from 'next/link';

export default function TitlebarImageList() {
  return (
    <>
      <div style={{ textAlign: 'justify' }}>
        <div>
          <Typography variant="h4" align="center">
            MUSEOS VIVOS
          </Typography>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <Typography variant="p" sx={{ textTransform: 'lowercase' }}>
            MUESTRA FOTOGRÁFICA DE LOS OBJETOS CONFECCIONADOS PARA EL MUSEO VIVO DEL CABILDO DE PUEBLOS INDÍGENAS UNIDOS DE LETICIA (CAPIUL).
          </Typography>
        </div>
        <Typography variant="p">
          Los objetos aquí presentados son resultado del Taller Escuela en lenguas originarias de los pueblos magüta, múrui, miraña y yukuna del Cabildo de Pueblos Indígenas Unidos de Leticia -
          Capiul, adelantado en Leticia, Amazonas. Estos objetos del Museo vivo fueron pensados como mediadores de la experiencia pedagógica propuesta en las sesiones de trabajo sobre la lengua. La
          idea de constituir un Museo vivo parte del principio de que los objetos tradicionales no son remembranzas de un pasado olvidado, sino objetos dotados de espíritu, de palabra y de fuerza.
          Para este Museo vivo cada maestro-sabedor ha elaborado o suministrado elementos significativos en los bailes trabajados durante las sesiones de lengua. Hay aquí muestras de atuendos rituales
          de la fiesta de la pubertad de los magüta; una trampa para peces y otra para animales mencionadas en los cantos del baile de tumbar chagra del pueblo miraña; instrumentos para recoger y
          procesar comidas indispensables para la fiesta de las frutas del pueblo múrui; y, por último, algunos elementos rituales usados para armonizar las energías convocadas durante la realización
          de los bailes del pueblo yukuna.{' '}
        </Typography>
      </div>
      <ImageList sx={{ width: 700, height: '1200px' }}>
        {itemDataCapiul.map((item, index) => (
          <Link key={index} href="/Cabildo_capiul/[capiulId]" as={`/Cabildo_capiul/${item.id}`}>
            <ImageListItem key={item.img} sx={{ cursor: 'pointer' }}>
              <Image style={{ objectFit: 'cover' }} src={item.img} srcSet={item.img} width={248} height={248} alt={item.title} loading="lazy" />
              <ImageListItemBar title={item.title} subtitle={item.author} />
            </ImageListItem>
          </Link>
        ))}
      </ImageList>
    </>
  );
}
