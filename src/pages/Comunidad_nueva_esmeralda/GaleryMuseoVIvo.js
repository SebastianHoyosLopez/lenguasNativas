import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Typography } from '@mui/material';
import Link from 'next/link';
import { itemDataCaranaMaloca } from '../../assets/Images';
import Image from 'next/image';

export default function TitlebarImageList() {
  return (
    <>
      <div style={{ textAlign: 'justify' }}>
        <Typography variant="h4" align="center">
          MUSEOS VIVOS
        </Typography>
        <div style={{ marginBottom: '3rem' }}>
          <Typography variant="p">
            A continuación se presenta una muestra de los “peines” (ajiji) de hojas de caraná con los que se confecciona el techo de una maloca píínemuna (bora). Las fotografías son de la maloca de la
            comunidad de Nueva Esmeralda, corregimiento de Puerto Arica, durante el proceso de reparación del techo de la maloca que se encontraba en muy mal estado. Se incluyen fotografías exteriores
            e interiores de la maloca y de los diferentes elementos empleados en ella.
          </Typography>
        </div>
      </div>
      <ImageList sx={{ width: 700, height: '2050px' }}>
        {itemDataCaranaMaloca.map((item, index) => (
          <Link key={index} href={`/Comunidad_nueva_esmeralda/[id]`} as={`/Comunidad_nueva_esmeralda/${item.id}`}>
            <ImageListItem sx={{ cursor: 'pointer' }}>
              <Image src={item.img} srcSet={item.img} width={248} height={248} alt={item.title} loading="lazy" />
              <ImageListItemBar title={item.title} subtitle={item.author} />
            </ImageListItem>
          </Link>
        ))}
      </ImageList>
    </>
  );
}
