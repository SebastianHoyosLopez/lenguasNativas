// import React from 'react';
import Image from 'next/image';
import imagenPresentacion from '../../public/image/portadaHome.png';
import { Typography } from '@mui/material';

// // const PortHome = styled(Paper)(({ theme }) => ({
// //   ...theme.typography.body2,
// //   textAlign: 'center',
// //   color: theme.palette.text.secondary,
// //   lineHeight: '30px',
// //   fontSize: '1.3rem',
// //   background: `linear-gradient(90deg, rgba(184,184,184,0.5) 0%, rgba(240,240,240,0.9668242296918768) 32%);`,
// // }));

// const AboutSchool = () => {
//   return (
//     <>
//       <div>
//         <div
//           style={{
//             color: 'white',
//             position: 'absolute',
//             zIndex: '1',
//             width: '80%',
//             marginTop: '80px',
//             marginLeft: '2rem',
//           }}
//         >
//           <Typography variant="h1">Lenguas nativas</Typography>
//           <div style={{ textAlign: 'justify', marginLeft: '10rem', background: 'black', opacity: 0.5, marginTop: '6rem' }}>
//             <Typography variant="p" fontSize={30}>
//               Esta página web es resultado de dos proyectos de revitalización lingüística realizados en el departamento de Amazonas, bajo la asesoría de la Escuela Taller de Boyacá y el apoyo de las
//               direcciones de Poblaciones y de Patrimonio del Ministerio de Cultura. La página contiene informaciones recogidas entre los meses de diciembre de 2021 y abril de 2022 en dos lugares
//               diferentes: en la Comunidad píínemuna (bora) de Nueva Esmeralda (localizada en el curso inferior del río Igaraparaná), y en el Cabildo de Pueblos Indígenas Unidos de Leticia, Capiul,
//               cuyo carácter es multiétnico. El lector podrá encontrar aquí cantos de varios pueblos amazónicos con sus respectivos vocabularios; un resumen de los principales contenidos abordados
//               durante los talleres de lenguas, e imágenes y videos alusivos a algunas manifestaciones culturales de las comunidades visitadas. El material fotográfico proviene del archivo de la
//               investigadora Camila Sofía Venegas Osorio. La edición y selección de textos corrió a cargo del investigador Gustavo Zuluaga Hoyos
//             </Typography>
//           </div>
//         </div>
//         <div>
//           <Image src={imagenPresentacion} alt="Imagen presentación" />
//         </div>
//       </div>
//     </>
//   );
// };
// export default AboutSchool;

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import Post from '../components/Post';
import { sortByDate } from '../utils';

export default function Home({ posts }) {
  return (
    <>
      <div>
        <div
          style={{
            color: 'white',
            position: 'absolute',
            zIndex: '1',
            width: '80%',
            marginTop: '80px',
            marginLeft: '2rem',
          }}
        >
          <Typography variant="h1">Lenguas nativas</Typography>
          <div style={{ textAlign: 'justify', marginLeft: '10rem', background: 'black', opacity: 0.5, marginTop: '6rem' }}>
            <Typography variant="p" fontSize={30}>
              Esta página web es resultado de dos proyectos de revitalización lingüística realizados en el departamento de Amazonas, bajo la asesoría de la Escuela Taller de Boyacá y el apoyo de las
              direcciones de Poblaciones y de Patrimonio del Ministerio de Cultura. La página contiene informaciones recogidas entre los meses de diciembre de 2021 y abril de 2022 en dos lugares
              diferentes: en la Comunidad píínemuna (bora) de Nueva Esmeralda (localizada en el curso inferior del río Igaraparaná), y en el Cabildo de Pueblos Indígenas Unidos de Leticia, Capiul,
              cuyo carácter es multiétnico. El lector podrá encontrar aquí cantos de varios pueblos amazónicos con sus respectivos vocabularios; un resumen de los principales contenidos abordados
              durante los talleres de lenguas, e imágenes y videos alusivos a algunas manifestaciones culturales de las comunidades visitadas. El material fotográfico proviene del archivo de la
              investigadora Camila Sofía Venegas Osorio. La edición y selección de textos corrió a cargo del investigador Gustavo Zuluaga Hoyos
            </Typography>
          </div>
        </div>
        <div>
          <Image src={imagenPresentacion} alt="Imagen presentación" />
        </div>
      </div>

      <Head>
        <title>Dev Blog</title>
      </Head>

      <div className="posts">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </>
  );
}

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
