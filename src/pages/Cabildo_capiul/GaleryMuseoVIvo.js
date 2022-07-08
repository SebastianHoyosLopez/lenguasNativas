import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Typography } from '@mui/material';

export default function TitlebarImageList() {
  return (
    <>
      <div style={{ padding: '0 2rem 2rem 0', textAlign: 'justify' }}>
        <Typography variant="h4" align="center">
          MUSEOS VIVOS
        </Typography>
        <Typography variant="p">
          A continuación se presenta una muestra de los “peines” (ajiji) de hojas de caraná con los que se confecciona el techo de una maloca píínemuna (bora). Las fotografías son de la maloca de la
          comunidad de Nueva Esmeralda, corregimiento de Puerto Arica, durante el proceso de reparación del techo de la maloca que se encontraba en muy mal estado.
        </Typography>
      </div>
      <ImageList sx={{ width: 700, height: '1200px' }}>
        {itemDataCarana.map((item) => (
          <ImageListItem key={item.img}>
            <img src={`${item.img}?w=248&fit=crop&auto=format`} srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`} alt={item.title} loading="lazy" />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton sx={{ color: 'rgba(255, 255, 255, 0.54)' }} aria-label={`info about ${item.title}`}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      <div style={{ padding: '0 2rem 2rem 0', textAlign: 'justify' }}>
        <Typography variant="h4" align="center">
          MUSEOS VIVOS
        </Typography>
        <Typography variant="p">A continuación se incluyen fotografías exteriores e interiores de la maloca y de los diferentes elementos empleados en ella.</Typography>
      </div>
      <ImageList sx={{ width: 700, height: '1200px' }}>
        {itemDataMaloca.map((item) => (
          <ImageListItem key={item.img}>
            <img src={`${item.img}?w=248&fit=crop&auto=format`} srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`} alt={item.title} loading="lazy" />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton sx={{ color: 'rgba(255, 255, 255, 0.54)' }} aria-label={`info about ${item.title}`}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}

const itemDataCarana = [
  {
    img: 'https://imgur.com/pQEP5t2.jpg',
    title: 'Montaje de “peines” de hoja de caraná (vista exterior frontal).',
    author: 'Museo vivo',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://imgur.com/J3Uh14v.jpg',
    title: 'Montaje de “peines” de hojas de caraná (vista exterior lateral)',
    author: 'Museo vivo',
  },
  {
    img: 'https://imgur.com/T1EL0nt.jpg',
    title: 'Montaje de peines de hojas de caraná (vista exterior lateral).',
    author: 'Museo vivo',
  },
  {
    img: 'https://imgur.com/DH1mdDj.jpg',
    title: 'Vista interior de los tejidos de hojas de caraná.',
    author: 'Museo vivo',
    cols: 2,
  },
  {
    img: 'https://imgur.com/d42lApt.jpg',
    title:
      'Detalle del tejido de hojas de caraná con que se fabrican los techos de las malocas píínemuna. Esta forma de tejido en particular se llama omaytua (“pata de cucarrón”), aunque los tejidos en general pueden tener diversas formas, que se usan para “distraer” a los espíritus nocivos que ingresen a la maloca.',
    author: 'Museo vivo',
    cols: 2,
  },
  {
    img: 'https://imgur.com/MgZXdtX.jpg',
    title: 'Detalle del tejido ukume obiwa (“rabadilla de tintín”).',
    author: 'museo vivo',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://imgur.com/bSOyiAW.jpg',
    title: 'Detalle del tejido kikije niwa (alas de murciélago). ',
    author: 'Museo vivo',
  },
  {
    img: 'https://imgur.com/K0bzwMi.jpg',
    title: 'Detalle del tejido aákobií (peladura de culebra).',
    author: 'Museo vivo',
  },
  {
    img: 'https://imgur.com/zHSiRMr.jpg',
    title: 'Detalle del tejido íñiba mijkoo (costilla de camaleón)',
    author: 'Museo vivo',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://imgur.com/oZCp8Tt.jpg',
    title: 'Vista panorámica del tejido aákobií (peladura de culebra).',
    author: 'Museo vivo',
  },
];

const itemDataMaloca = [
  {
    img: 'https://imgur.com/90Qd640.jpg',
    title: 'Vista exterior lateral de la maloca de Nueva Esmeralda.',
    author: 'Museo vivo',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://imgur.com/Vt8HgKa.jpg',
    title: 'Vista exterior de la maloca con “rompecalles’ o letrero identificador elaborado manualmente.',
    author: 'Museo vivo',
  },
  {
    img: 'https://imgur.com/l0Dgin1.jpg',
    title: 'Detalle del “rompecalles” o letrero identificador de la maloca.',
    author: 'Museo vivo',
  },
  {
    img: 'https://imgur.com/6XQ5r4w.jpg',
    title: 'Vista interior de la maloca de Nueva Esmeralda.',
    author: 'Museo vivo',
  },
  {
    img: 'https://imgur.com/oQuoXaV.jpg',
    title: 'Úllebá o tiesto de barro para tostar',
    author: 'Museo vivo',
  },
  {
    img: 'https://imgur.com/XcGsUv2.jpg',
    title: 'Wahraji o cernidor',
    author: 'Museo vivo',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://imgur.com/gNhSa4Q.jpg',
    title: 'wahmiji o exprimidor de yuca grande.',
    author: 'Museo vivo',
  },
  {
    img: 'https://imgur.com/JTEhtxy.jpg',
    title: 'wapéjiwa o espátula para voltear el cazabe. ',
    author: 'Museo vivo',
  },
  {
    img: 'https://imgur.com/TeQxisi.jpg',
    title: 'kaniwa o machucador en forma de canoa.',
    author: 'Museo vivo',
  },
  {
    img: 'https://imgur.com/93jNUUo.jpg',
    title: 'Kaatsówa o rayador de yuca.',
    author: 'Museo vivo',
  },
  {
    img: 'https://imgur.com/juvmu7x.jpg',
    title: 'uberijchi o canasto.',
    author: 'Museo vivo',
  },
  {
    img: 'https://imgur.com/S1Wu127.jpg',
    title: 'Kanijko o pilón.',
    author: 'Museo vivo',
  },
  {
    img: 'https://imgur.com/bFNhLCm.jpg',
    title: 'kanui o machucador.',
    author: 'Museo vivo',
  },
  {
    img: 'https://imgur.com/83I2W9O.jpg',
    title: 'Wahjyábaba o bolsa de cernir coca.',
    author: 'Museo vivo',
  },
  {
    img: 'https://imgur.com/3yDWzHA.jpg',
    title: 'Mamuihki o aparador de tiestos y canastos.',
    author: 'Museo vivo',
  },
  {
    img: 'https://imgur.com/NOAfrZt.jpg',
    title: 'Kumunuboa o maguaré.',
    author: 'Museo vivo',
  },
];
