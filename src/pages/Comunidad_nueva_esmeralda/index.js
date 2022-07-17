import Image from 'next/image';
import imagenPresentacion from '../../../public/image/portadaEsmeralda.jpg';

import { Grid, Box, Typography } from '@mui/material';
import CardSubMenu from '../../components/CardSubMenu.js';
import presentacion from '../../../public/image/saberesEsmeralda.jpg';
import saberes from '../../../public/image/saberes.jpg';
import GaleryMuseoVIvo from './GaleryMuseoVIvo';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Post from '../../components/Post';
import { sortByDate } from '../../utils/';
import MultimediaVideo from './MultimediaVideo';

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '');

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}

const index = ({ posts }) => {
  return (
    <div>
      <Grid container sx={{ display: 'flex', marginTop: '50px', padding: '0 8rem 0 8rem' }}>
        <Grid item xs={12} sx={{ marginBottom: '5rem', boxShadow: '0 4px 8px 0 rgba(0, 0.2, 0, 0.2)' }}>
          <Box
            sx={{
              color: 'white',
              position: 'absolute',
              zIndex: '1',
              width: '80%',
              marginTop: '1rem',
              marginLeft: '1rem',
              textAlign: 'justify',
              background: 'black',
              opacity: 0.6,
              padding: '1rem',
            }}
          >
            <Typography variant="h4">El Taller Escuela para la Salvaguarda de la lengua bora</Typography>
            <Typography variant="p" fontSize={25}>
              llevado a cabo en la Comunidad Nueva Esmeralda.
            </Typography>
          </Box>
          <Box>
            <Image src={imagenPresentacion} alt="Imagen presentación" height={1200} />
          </Box>
        </Grid>
        <Grid container direction="row" justifyContent="space-around" alignItems="center" xs={12}>
          <CardSubMenu
            image={saberes}
            posts={'./Comunidad_nueva_esmeralda/Presentacion'}
            title={'Presentación'}
            body={'El Taller Escuela para la Salvaguarda de la lengua bora llevado a cabo en la Comunidad Nueva Esmeralda, bajo la coordinación de la Escuela Taller de Boyacá,'}
          />
          <CardSubMenu
            image={presentacion}
            posts={'/blog/saberes-oficios'}
            title={'Saberes y Oficios'}
            body={
              'La lengua píínemuna (o bora) es una de las veintiún familias lingüísticas nativas existentes en territorio colombiano. Landaburu la ubica en el grupo de lenguas de “proyección regional” en Sudamérica'
            }
          />
        </Grid>
        <Grid item xs={8} sx={{ padding: '1rem' }}>
          <GaleryMuseoVIvo />
        </Grid>
        <Grid item xs={4} sx={{ padding: '1rem' }}>
          <div className="posts">
            {posts.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </div>
        </Grid>
      </Grid>
      <MultimediaVideo />
    </div>
  );
};

export default index;
