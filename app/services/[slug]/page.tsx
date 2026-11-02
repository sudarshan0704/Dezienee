import { notFound } from "next/navigation";
import ServiceDetail from "@/features/ServiceDetail";
import { serviceDetails } from "@/data/services/test-service-detail";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceDetails.map(({ slug }) => ({ slug }));
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = serviceDetails.find((item) => item.slug === slug);

  if (!service) notFound();

  return <ServiceDetail service={service} />;
}
