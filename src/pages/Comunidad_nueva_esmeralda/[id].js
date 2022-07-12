import { Card, CardContent, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { itemDataCaranaMaloca } from '../../assets/Images';

export default function ImgMuseoVivo() {
  const router = useRouter();
  const id = router.query.id - 1 || null;
  return (
    <>
      {id !== null && (
        <>
          <Card sx={{ marginTop: '-5rem' }}>
            <div style={{ textAlign: 'center' }}>
              <Image height={400} width={400} style={{ objectFit: 'cover' }} src={itemDataCaranaMaloca[id].img} alt="Imagen presentación" />
            </div>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography gutterBottom variant="h6" component="div">
                {itemDataCaranaMaloca[id].author}
              </Typography>
              <Typography variant="p" color="text.secondary" noWrap>
                {itemDataCaranaMaloca[id].title}
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
