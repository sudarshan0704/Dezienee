export const galleryImages = Array.from({ length: 9 }, (_, index) => ({
  src: `/images/gallery-${index + 1}.jpg`,
  alt: `Interior design gallery image ${index + 1}`,
}));
