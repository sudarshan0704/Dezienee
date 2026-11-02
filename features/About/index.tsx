import AboutIntro from "@/components/common/AboutIntro";
import HowWeWorkSection from "@/components/common/HowWeWorkSection";
import PageHero from "@/components/common/PageHero";
import TestimonialsSection from "@/components/common/TestimonialsSection";
import BestSelling from "./components/BestSelling";
import ClientsSection from "./components/ClientsSection";
import FaqSection from "./components/FaqSection";
import TeamSection from "./components/TeamSection";
import VisionMission from "./components/VisionMission";

export default function About() {
  return (
    <>
      <PageHero
        title="About us"
        backgroundImage="/images/page-header-bg.jpg"
        breadcrumbs={[
          { label: "home", href: "/" },
          { label: "about us" },
        ]}
      />
      <AboutIntro variant="about" />
      <VisionMission />
      <BestSelling />
      <TestimonialsSection />
      <TeamSection />
      <HowWeWorkSection />
      <FaqSection />
      <ClientsSection />
    </>
  );
}
