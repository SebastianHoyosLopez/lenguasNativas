import * as React from 'react';
import Card from '@mui/material/Card';
import Image from 'next/image';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function MediaCard({image,title,body}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
        <Image src={image} alt="Imagen presentación" />
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
