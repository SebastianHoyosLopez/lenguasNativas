import React from 'react';
import Image from 'next/image';
import imagenPresentacion from '../../../public/image/nuevaEsmeralda.jpg';
import { Grid } from '@mui/material';
import CardSubMenu from '../../components/CardSubMenu.js';
import presentacion from '../../../public/image/presentacion.jpg';
import saberes from '../../../public/image/saberes.jpg';
import SubMenu from '../../components/SubMenu';
import GaleryMuseoVIvo from './GaleryMuseoVIvo';

const Institucional = () => {
  return (
    <div>
      <Grid container sx={{ display: 'flex', marginTop: '50px', padding: '0 8rem 0 8rem' }}>
        <Grid item xs={12} sx={{ marginBottom: '5rem' }}>
          <Image src={imagenPresentacion} alt="Imagen presentación" height={1200} />
        </Grid>
        <Grid container direction="row" justifyContent="space-around" alignItems="center" xs={12}>
          <CardSubMenu
            image={presentacion}
            title={'Presentación'}
            body={'El Taller Escuela para la Salvaguarda de la lengua bora llevado a cabo en la Comunidad Nueva Esmeralda, bajo la coordinación de la Escuela Taller de Boyacá,'}
          />
          <CardSubMenu
            image={saberes}
            title={'Contenido del taller escuela'}
            body={
              'La lengua píínemuna (o bora) es una de las veintiún familias lingüísticas nativas existentes en territorio colombiano. Landaburu la ubica en el grupo de lenguas de “proyección regional” en Sudamérica'
            }
          />
        </Grid>
        <Grid item xs={8} sx={{ padding: '1rem' }}>
          <GaleryMuseoVIvo />
        </Grid>
        <Grid item xs={4} sx={{ padding: '1rem' }}>
          <SubMenu />
        </Grid>
      </Grid>
    </div>
  );
};

export default Institucional;
