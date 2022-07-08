import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';
import Link from 'next/link';
import { Grid, Button } from '@mui/material';

export default function PostPage({ frontmatter: { title, date }, content }) {
  return (
    <Grid container sx={{ display: 'flex', marginTop: '50px', padding: '0 8rem 0 8rem' }}>
      <Link href="/Cabildo_capiul">
        <Button>Regresar</Button>
      </Link>
      <div className="card card-page">
        <h1 className="post-title">{title}</h1>
        <div className="post-date">Publicado en {date}</div>
        {/* <img src={cover_image} alt="" /> */}
        <div className="post-body">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
          <div>{content}</div>
        </div>
      </div>
    </Grid>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8');

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
