import Link from 'next/link';

export default function Post({ post }) {
  return (
    <div className="card">
      <h3>{post.frontmatter.title}</h3>
      <p>{post.frontmatter.excerpt}</p>
      <Link href={`/blog/${post.slug}`}>
        <p>Leer mas</p>
      </Link>
    </div>
  );
}
