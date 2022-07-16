import React from 'react';
import { CardContent, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { itemDataCapiul } from '../../assets/Images';

export default function ImgMuseoVivo() {
  const router = useRouter();
  console.log(router.query);
  const id = router.query.capiulId || null;
  const next = id < 18 ? parseInt(id) + 1 : id;
  const previous = id > 1 ? id - 1 : 1;
  const itemCapiul = itemDataCapiul.find((item) => item.id == id);

  return (
    <>
      {id !== null && (
        <>
          <div style={{ textAlign: 'center' }}>
            <Image height={600} width={800} style={{ objectFit: 'cover' }} src={itemCapiul.img} alt="Imagen presentación" />
          </div>
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography variant="h6">{itemCapiul.author}</Typography>
            <Typography variant="p" color="text.secondary">
              {itemCapiul.title}
            </Typography>
          </CardContent>
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '2rem', marginBottom: '2rem' }}>
            <Link href={`/Cabildo_capiul/[capiulId]`} as={`/Cabildo_capiul/${previous}`}>
              <Typography sx={{ cursor: 'pointer' }} align="center">
                Anterior
              </Typography>
            </Link>
            <Link href={`/Cabildo_capiul`}>
              <Typography sx={{ cursor: 'pointer' }} align="center">
                Inicio
              </Typography>
            </Link>
            <Link href={`/Cabildo_capiul/[capiulId]`} as={`/Cabildo_capiul/${next}`}>
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
