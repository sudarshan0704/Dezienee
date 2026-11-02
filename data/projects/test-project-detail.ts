import { companyContact } from "@/data/company/contact";

export type ProjectDetail = {
  slug: string;
  image: string;
  category: string;
  title: string;
  filters: string[];
  date: string;
  duration: string;
  projectCategory: string;
  client: string;
  location: string;
  information: string[];
  designDescription: string;
  highlights: string[];
  gallery: string[];
};

const information = [
  "This project involved a complete transformation of the space to align with the client's vision for a modern, functional, and aesthetically pleasing interior. Our team focused on integrating custom elements, maximizing space, and ensuring every detail enhanced both style and practicality. The result is a beautifully designed area that reflects the client's unique taste and lifestyle.",
  "In this project, we aimed to create a harmonious blend of elegance and functionality, tailored specifically to the client's preferences. Every aspect, from material selection to color schemes, was carefully curated to enhance the space's ambiance and utility. Our goal was to craft a warm, inviting environment that reflects a sophisticated design philosophy while catering to everyday needs. The project stands as a testament to our commitment to delivering high-quality, personalized interior solutions.",
];

const designDescription =
  "This section showcases the standout elements of the project, featuring unique design choices, custom-made pieces, and innovative solutions tailored to enhance both style and functionality. From carefully selected finishes to lighting arrangements, each detail has been meticulously crafted to bring out the best in the space and align with the client's vision.";

const highlights = [
  "Custom cabinetry was designed to maximize storage while maintaining a sleek, modern look.",
  "Ambient lighting was strategically placed to enhance the mood and highlight key areas.",
  "Textures and finishes were carefully chosen to add depth and warmth to each room.",
  "A neutral color palette was accented with bold elements for a balanced, timeless feel.",
  "High-quality materials were used throughout to ensure durability and elegance in every detail.",
];

const baseProjects = [
  {
    slug: "urban-retreat",
    image: "project-1.jpg",
    category: "residential spaces",
    title: "urban retreat: modern design meets comfort",
    filters: ["architecture", "bedroom"],
    projectCategory: "residential interior renovation",
  },
  {
    slug: "luxurious-loft",
    image: "project-2.jpg",
    category: "luxury homes",
    title: "luxurious loft: industrial chic for living",
    filters: ["interior", "kitchen"],
    projectCategory: "luxury residential interior",
  },
  {
    slug: "coastal-vibes",
    image: "project-3.jpg",
    category: "outdoor living spaces",
    title: "coastal vibes: serenity by the sea",
    filters: ["furniture", "architecture"],
    projectCategory: "coastal living design",
  },
  {
    slug: "minimalist-haven",
    image: "project-4.jpg",
    category: "modern designs",
    title: "minimalist haven: simple, clean, inviting spaces",
    filters: ["kitchen", "bedroom"],
    projectCategory: "modern interior design",
  },
  {
    slug: "rustic-charm-revived",
    image: "project-5.jpg",
    category: "rustic charm revived",
    title: "nature's embrace: timeless tranquility",
    filters: ["interior"],
    projectCategory: "rustic interior renovation",
  },
  {
    slug: "nature-inspired-harmony",
    image: "project-6.jpg",
    category: "nature-inspired harmony",
    title: "bold accents: statement living design",
    filters: ["furniture"],
    projectCategory: "nature-inspired interior",
  },
];

export const projectDetails: ProjectDetail[] = baseProjects.map((project) => ({
  ...project,
  date: "15 november, 2024",
  duration: "12 hours / week",
  client: "luxe interiors",
  location: companyContact.location,
  information,
  designDescription,
  highlights,
  gallery: ["gallery-7.jpg", "gallery-1.jpg", "gallery-3.jpg", "gallery-5.jpg"],
}));

export const testProjectDetail = projectDetails[0];
