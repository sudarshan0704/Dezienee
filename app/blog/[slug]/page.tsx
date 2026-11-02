import { notFound } from "next/navigation";
import BlogDetail from "@/features/BlogDetail";
import { blogPosts } from "@/data/blog/posts";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) notFound();

  return <BlogDetail post={post} />;
}
