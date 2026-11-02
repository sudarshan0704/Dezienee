export type ServiceDetail = {
  slug: string;
  image: string;
  title: string;
  description: string;
  introduction: string[];
  highlights: string[];
  benefits: {
    icon: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

const sharedIntroduction = [
  "Our interior design services are crafted to transform spaces through thoughtful planning, custom furniture, and tailored layouts. We believe that every room should have an efficient flow and a balanced design, so our space planning and layout services aim to optimize each area to fit seamlessly with your lifestyle. With custom furniture design, we create unique pieces that not only enhance the space but reflect your personal style.",
  "Our offerings also include expert color and material selection, lighting solutions to enhance mood, and soft furnishings to add warmth. From home renovations that revitalize interiors to storage solutions that bring both style and organization, we cover all aspects of interior enhancement. Using 3D visualization, we ensure clients can envision their transformed space, making the design process both transparent and collaborative.",
];

const sharedHighlights = [
  "excellence in creative design expertise",
  "mastering the art of creative design excellence",
  "innovative approaches creative design mastery",
  "transforming ideas into design masterpieces",
  "shaping extraordinary spaces with design",
  "pushing boundaries in creative design innovation",
];

const sharedBenefits = [
  {
    icon: "icon-why-choose-1.svg",
    title: "tailored design solutions",
    description:
      "We provide personalized interior design services that reflect your unique vision and lifestyle.",
  },
  {
    icon: "icon-why-choose-2.svg",
    title: "Seamless Project Management",
    description:
      "We handle the entire design process, from concept to completion, with flawless execution.",
  },
  {
    icon: "icon-why-choose-3.svg",
    title: "Client-Centered Collaboration",
    description:
      "Your input is valued throughout the entire process, ensuring your vision is fully realized.",
  },
];

const sharedFaqs = [
  "What is the typical process for starting a design project?",
  "How long does a typical interior design project take?",
  "Can I incorporate my existing furniture into the new design?",
  "What should I expect during the design consultation?",
  "What should I expect during the design consultation?",
].map((question) => ({
  question,
  answer:
    "Our process starts with a consultation to discuss your vision, followed by planning, design presentation, and implementation to achieve your ideal space.",
}));

const services = [
  {
    slug: "residential-interior-design",
    image: "service-1.jpg",
    title: "residential interior design",
    description:
      "We create personalized living spaces that reflect your style and functional needs.",
  },
  {
    slug: "commercial-interior-design",
    image: "service-2.jpg",
    title: "commercial interior design",
    description:
      "Enhancing business environments with professional, functional, and aesthetic design.",
  },
  {
    slug: "furniture-and-decor-selection",
    image: "service-3.jpg",
    title: "furniture and decor selection",
    description:
      "Our experts help you choose the perfect furniture and decor to complement your style.",
  },
  {
    slug: "lighting-design",
    image: "service-4.jpg",
    title: "lighting design",
    description:
      "Enhancing ambiance and functionality with thoughtfully designed lighting solutions.",
  },
  {
    slug: "color-consultation",
    image: "service-5.jpg",
    title: "color consultation",
    description:
      "Choosing palettes that evoke warmth, energy, or calm to match your vision.",
  },
  {
    slug: "3d-visualization",
    image: "service-6.jpg",
    title: "3D visualization",
    description:
      "Bringing design ideas to life with realistic 3D models before the work begins.",
  },
];

export const serviceDetails: ServiceDetail[] = services.map((service) => ({
  ...service,
  introduction: sharedIntroduction,
  highlights: sharedHighlights,
  benefits: sharedBenefits,
  faqs: sharedFaqs,
}));

export const testServiceDetail = serviceDetails[0];
