import { notFound } from "next/navigation";
import ProjectDetail from "@/features/ProjectDetail";
import { projectDetails } from "@/data/projects/test-project-detail";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projectDetails.map(({ slug }) => ({ slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectDetails.find((item) => item.slug === slug);

  if (!project) notFound();

  return <ProjectDetail project={project} />;
}
