import Image from 'next/image';
import imagenPresentacion from '../../../public/image/portadaCapiul.jpg';
import { Grid, Box, Typography } from '@mui/material';
import CardSubMenu from '../../components/CardSubMenu.js';
import presentacion from '../../../public/image/museoVivoCapiul/photoCapiul1.png';
import saberes from '../../../public/image/saberesCapiul.jpg';
import GaleryMuseoVIvo from './GaleryMuseoVIvo';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Post from '../../components/PostCapiul';
import { sortByDate } from '../../utils/';
import contenido from '../../../public/image/galeriaNuevaEsmeralda/2.png';

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('postsCapiul'));

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
      <Grid container sx={{ display: 'flex', padding: '0 8rem 0 8rem' }}>
        <Grid item xs={12} sx={{ marginBottom: '5rem', boxShadow: '0 4px 8px 0 rgba(0, 0.2, 0, 0.2)' }}>
          <Box
            sx={{
              color: 'white',
              position: 'absolute',
              zIndex: '1',
              width: '80%',
              marginTop: '0rem',
              marginLeft: '2rem',
              background: 'black',
              opacity: 0.5,
              //padding: '0rem 1rem 1rem 1rem',
            }}
          >
            <Typography variant="h4">Lenguas originarias de los pueblos tikuna, múrui, miraña y yukuna</Typography>
          </Box>
          <Box>
            <Image src={imagenPresentacion} alt="Imagen presentación" height={1200} />
          </Box>
        </Grid>
        <Grid container direction="row" justifyContent="space-around" alignItems="center" xs={12}>
          <CardSubMenu
           image={presentacion}
            posts={'./Cabildo_capiul/Presentacion'}
             title={'Presentación'} 
             body={'lenguas originarias de los pueblos tikuna, múrui, miraña y yukuna'} />
          <CardSubMenu
            image={saberes}
            posts={'./Cabildo_capiul/SaberesOficios'}
            title={'Saberes y Oficios'}
            body={'La población miembro de CAPIUL se reconoce como perteneciente a 26 grupos étnicos, de al menos diez familias lingüísticas diferentes'}
          />
            <CardSubMenu
            image={contenido}
            posts={'./Comunidad_nueva_esmeralda/Contenido'}
            title={'Contenido'}
            body={'El proceso de formación contó con una duración de 36 sesiones (140 horas en total)'}
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
    </div>
  );
};

export default index;
