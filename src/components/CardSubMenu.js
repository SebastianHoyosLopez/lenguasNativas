import * as React from 'react';
import Card from '@mui/material/Card';
import Image from 'next/image';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export default function MediaCard({ image, title, body, posts }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <div>
        <Image height={800} width={800} objectFit="cover" quality={100} src={image} alt="Imagen presentación" />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`${posts}`}>
          <Button>Leer mas</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
