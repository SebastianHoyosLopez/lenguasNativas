import { Card, CardContent, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import photo1 from '../../../public/image/galeriaNuevaEsmeralda/1.png';
import photo2 from '../../../public/image/galeriaNuevaEsmeralda/2.png';
import photo3 from '../../../public/image/galeriaNuevaEsmeralda/3.png';
import Image from 'next/image';
// import photo4 from '../../../public/image/galeriaNuevaEsmeralda/4.JPG';
import photo5 from '../../../public/image/galeriaNuevaEsmeralda/5.JPG';
import photo6 from '../../../public/image/galeriaNuevaEsmeralda/6.JPG';
import photo7 from '../../../public/image/galeriaNuevaEsmeralda/7.JPG';
import photo8 from '../../../public/image/galeriaNuevaEsmeralda/8.JPG';
import photo9 from '../../../public/image/galeriaNuevaEsmeralda/9.JPG';
import photo10 from '../../../public/image/galeriaNuevaEsmeralda/10.png';
import photo11 from '../../../public/image/galeriaNuevaEsmeralda/11.png';
import photo12 from '../../../public/image/galeriaNuevaEsmeralda/12.png';
import photo13 from '../../../public/image/galeriaNuevaEsmeralda/13.jpg';
import photo14 from '../../../public/image/galeriaNuevaEsmeralda/14.png';
// import photo15 from "../../../public/image/galeriaNuevaEsmeralda/15.png"
import photo16 from '../../../public/image/galeriaNuevaEsmeralda/16.JPG';
import photo17 from '../../../public/image/galeriaNuevaEsmeralda/17.JPG';
import photo18 from '../../../public/image/galeriaNuevaEsmeralda/18.JPG';
import photo19 from '../../../public/image/galeriaNuevaEsmeralda/19.JPG';
import photo20 from '../../../public/image/galeriaNuevaEsmeralda/20.JPG';
import photo21 from '../../../public/image/galeriaNuevaEsmeralda/21.png';
// import photo22 from "../../../public/image/galeriaNuevaEsmeralda/22.png"
import photo23 from '../../../public/image/galeriaNuevaEsmeralda/23.JPG';
import photo24 from '../../../public/image/galeriaNuevaEsmeralda/24.JPG';
import photo25 from '../../../public/image/galeriaNuevaEsmeralda/25.png';
import photo26 from '../../../public/image/galeriaNuevaEsmeralda/26.JPG';

export default function ImgMuseoVivo() {
  const router = useRouter();
  const id = router.query.id - 1 || null;
  return (
    <>
      {id > 1 && (
        <>
          <Card sx={{ marginTop: '-5rem' }}>
            <div style={{ textAlign: 'center' }}>
              <Image height={400} width={400} style={{ objectFit: 'cover' }} src={itemDataCarana[id].img} alt="Imagen presentación" />
            </div>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography gutterBottom variant="h6" component="div">
                {itemDataCarana[id].author}
              </Typography>
              <Typography variant="p" color="text.secondary" noWrap>
                {itemDataCarana[id].title}
              </Typography>
            </CardContent>
            <Link href="/Comunidad_nueva_esmeralda">
              <Typography sx={{ cursor: 'pointer' }} align="center">
                Regresar
              </Typography>
            </Link>
          </Card>
        </>
      )}
    </>
  );
}

const itemDataCarana = [
  {
    id: 1,
    img: photo1,
    title: 'Montaje de “peines” de hoja de caraná (vista exterior frontal).',
    author: 'Museo vivo',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    id: 2,
    img: photo2,
    title: 'Montaje de “peines” de hojas de caraná (vista exterior lateral)',
    author: 'Museo vivo',
  },
  {
    id: 3,
    img: photo3,
    title: 'Montaje de peines de hojas de caraná (vista exterior lateral).',
    author: 'Museo vivo',
  },
  {
    id: 4,
    img: photo11,
    title: 'Vista interior de los tejidos de hojas de caraná.',
    author: 'Museo vivo',
    cols: 2,
  },
  {
    id: 5,
    img: photo5,
    title:
      'Detalle del tejido de hojas de caraná con que se fabrican los techos de las malocas píínemuna. Esta forma de tejido en particular se llama omaytua (“pata de cucarrón”), aunque los tejidos en general pueden tener diversas formas, que se usan para “distraer” a los espíritus nocivos que ingresen a la maloca.',
    author: 'Museo vivo',
    cols: 2,
  },
  {
    id: 6,
    img: photo6,
    title: 'Detalle del tejido ukume obiwa (“rabadilla de tintín”).',
    author: 'museo vivo',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    id: 7,
    img: photo7,
    title: 'Detalle del tejido kikije niwa (alas de murciélago). ',
    author: 'Museo vivo',
  },
  {
    id: 8,
    img: photo8,
    title: 'Detalle del tejido aákobií (peladura de culebra).',
    author: 'Museo vivo',
  },
  {
    id: 9,
    img: photo9,
    title: 'Detalle del tejido íñiba mijkoo (costilla de camaleón)',
    author: 'Museo vivo',
    rows: 2,
    cols: 2,
  },
  {
    id: 10,
    img: photo10,
    title: 'Vista panorámica del tejido aákobií (peladura de culebra).',
    author: 'Museo vivo',
  },
  {
    id: 11,
    img: photo11,
    title: 'Vista exterior lateral de la maloca de Nueva Esmeralda.',
    author: 'Museo vivo',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    id: 12,
    img: photo12,
    title: 'Vista exterior de la maloca con “rompecalles’ o letrero identificador elaborado manualmente.',
    author: 'Museo vivo',
  },
  {
    id: 13,
    img: photo13,
    title: 'Detalle del “rompecalles” o letrero identificador de la maloca.',
    author: 'Museo vivo',
  },
  {
    id: 14,
    img: photo14,
    title: 'Vista interior de la maloca de Nueva Esmeralda.',
    author: 'Museo vivo',
  },
  {
    id: 15,
    img: photo17,
    title: 'Úllebá o tiesto de barro para tostar',
    author: 'Museo vivo',
  },
  {
    id: 16,
    img: photo16,
    title: 'Wahraji o cernidor',
    author: 'Museo vivo',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    id: 17,
    img: photo17,
    title: 'wahmiji o exprimidor de yuca grande.',
    author: 'Museo vivo',
  },
  {
    id: 18,
    img: photo18,
    title: 'wapéjiwa o espátula para voltear el cazabe. ',
    author: 'Museo vivo',
  },
  {
    id: 19,
    img: photo19,
    title: 'kaniwa o machucador en forma de canoa.',
    author: 'Museo vivo',
  },
  {
    id: 20,
    img: photo20,
    title: 'Kaatsówa o rayador de yuca.',
    author: 'Museo vivo',
  },
  {
    id: 21,
    img: photo21,
    title: 'uberijchi o canasto.',
    author: 'Museo vivo',
  },
  {
    id: 22,
    img: photo23,
    title: 'Kanijko o pilón.',
    author: 'Museo vivo',
  },
  {
    id: 23,
    img: photo23,
    title: 'kanui o machucador.',
    author: 'Museo vivo',
  },
  {
    id: 24,
    img: photo24,
    title: 'Wahjyábaba o bolsa de cernir coca.',
    author: 'Museo vivo',
  },
  {
    id: 25,
    img: photo25,
    title: 'Mamuihki o aparador de tiestos y canastos.',
    author: 'Museo vivo',
  },
  {
    id: 26,
    img: photo26,
    title: 'Kumunuboa o maguaré.',
    author: 'Museo vivo',
  },
];
