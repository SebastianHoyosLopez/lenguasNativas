import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { itemDataCapiul } from '../../assets/Images';

export default function ImgMuseoVivo() {
  const router = useRouter();
  const id = router.query.id - 1 || null;
  console.log(id);
  return (
    <>
      {id !== null && (
        <>
          <Card sx={{ marginTop: '-5rem' }}>
            <div style={{ textAlign: 'center' }}>
              <Image height={400} width={400} style={{ objectFit: 'cover' }} src={itemDataCapiul[id].img} alt="Imagen presentación" />
            </div>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography gutterBottom variant="h6" component="div">
                {itemDataCapiul[id].author}
              </Typography>
              <Typography variant="p" color="text.secondary" noWrap>
                {itemDataCapiul[id].title}
              </Typography>
            </CardContent>
            <Link href="/Cabildo_capiul">
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
