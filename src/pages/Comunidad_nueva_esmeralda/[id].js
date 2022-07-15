import { Card, CardContent, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { itemDataCaranaMaloca } from '../../assets/Images';

export default function ImgMuseoVivo() {
  const router = useRouter();
  console.log(router.query);
  const id = router.query.id || null;
  const itemEsmeralda = itemDataCaranaMaloca.find((item) => item.id == id);
  return (
    <>
      {id !== null && (
        <>
          <Card sx={{ marginTop: '-5rem' }}>
            <div style={{ textAlign: 'center' }}>
              <Image height={600} width={600} style={{ objectFit: 'cover' }} src={itemEsmeralda.img} alt="Imagen presentación" />
            </div>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography gutterBottom variant="h6" component="div">
                {itemEsmeralda.author}
              </Typography>
              <Typography variant="p" color="text.secondary" noWrap>
                {itemEsmeralda.title}
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
