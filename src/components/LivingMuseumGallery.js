import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function LivingMuseumGallery({ Title, GeneralDescription1, generalDescription2, itemData }) {
  return (
    <>
      <div style={{ padding: '0 2rem 2rem 0', textAlign: 'justify' }}>
        <div>
          <Typography variant="h4" align="center">
            {Title}
          </Typography>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <Typography variant="p" sx={{ textTransform: 'lowercase' }}>
            {GeneralDescription1}
          </Typography>
        </div>
        <Typography variant="p">{generalDescription2}</Typography>
      </div>
      <ImageList sx={{ width: 700, height: '1200px' }}>
        {itemData.map((item, index) => (
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
