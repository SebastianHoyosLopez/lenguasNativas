import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { itemDataCapiul } from '../../assets/Images';

export default function ImgMuseoVivo() {
  const router = useRouter();
  console.log(router.query);
  const id = router.query.capiulId || null;
  const itemCapiul = itemDataCapiul.find((item) => item.id == id);

  return (
    <>
      {id !== null && (
        <>
          <Card sx={{ marginTop: '-5rem' }}>
            <div style={{ textAlign: 'center' }}>
              <Image height={600} width={600} style={{ objectFit: 'cover' }} src={itemCapiul.img} alt="Imagen presentación" />
            </div>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography gutterBottom variant="h6" component="div">
                {itemCapiul.author}
              </Typography>
              <Typography variant="p" color="text.secondary" noWrap>
                {itemCapiul.title}
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
