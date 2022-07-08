import Link from 'next/link';
import { Button } from '@mui/material';

export default function Post({ post }) {
  return (
    <div className="card">
      <h3>{post.frontmatter.date}</h3>
      <p>{post.frontmatter.excerpt}</p>
      <Link href={`/blogCapiul/${post.slug}`}>
        <Button>Leer mas</Button>
      </Link>
    </div>
  );
}
