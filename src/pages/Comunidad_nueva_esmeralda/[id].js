import { CardContent, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { itemDataCaranaMaloca } from '../../assets/Images';

export default function ImgMuseoVivo() {
  const router = useRouter();
  console.log(router.query);
  const id = router.query.id || null;
  const next = id < 26 ? parseInt(id) + 1 : id;
  const previous = id > 1 ? id - 1 : 1;
  const itemEsmeralda = itemDataCaranaMaloca.find((item) => item.id == id);
  return (
    <>
      {id !== null && (
        <>
          <div style={{ textAlign: 'center' }}>
            <Image height={600} width={800} style={{ objectFit: 'cover' }} src={itemEsmeralda.img} alt="Imagen presentación" />
          </div>
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography variant="h6">{itemEsmeralda.author}</Typography>
            <Typography variant="p" color="text.secondary">
              {itemEsmeralda.title}
            </Typography>
          </CardContent>
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '2rem', marginBottom: '2rem' }}>
            <Link href={`/Comunidad_nueva_esmeralda/[id]`} as={`/Comunidad_nueva_esmeralda/${previous}`}>
              <Typography sx={{ cursor: 'pointer' }} align="center">
                Anterior
              </Typography>
            </Link>
            <Link href={`/Comunidad_nueva_esmeralda`}>
              <Typography sx={{ cursor: 'pointer' }} align="center">
                Inicio
              </Typography>
            </Link>
            <Link href={`/Comunidad_nueva_esmeralda/[id]`} as={`/Comunidad_nueva_esmeralda/${next}`}>
              <Typography sx={{ cursor: 'pointer' }} align="center">
                Siguiente
              </Typography>
            </Link>
          </div>
        </>
      )}
    </>
  );
}
