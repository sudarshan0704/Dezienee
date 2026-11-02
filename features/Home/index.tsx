import AboutIntro from "@/components/common/AboutIntro";
import HowWeWorkSection from "@/components/common/HowWeWorkSection";
import TestimonialsSection from "@/components/common/TestimonialsSection";
import BlogSection from "./components/BlogSection";
import HomeHero from "./components/HomeHero";
import IntroVideoSection from "./components/IntroVideoSection";
import ProjectsSection from "./components/ProjectsSection";
import ServicesSection from "./components/ServicesSection";
import SkillsSection from "./components/SkillsSection";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <HomeHero />
      <AboutIntro variant="home" />
      <WhyChooseUs />
      <ServicesSection />
      <IntroVideoSection />
      <ProjectsSection />
      <HowWeWorkSection />
      <SkillsSection />
      <TestimonialsSection />
      <BlogSection />
    </>
  );
}
