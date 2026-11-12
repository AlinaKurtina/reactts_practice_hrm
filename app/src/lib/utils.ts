export { cn } from "cn";

export function fetchImagesLocal(folder: string): string[] {
  const imagesRecord = import.meta.glob<string>(
    '@/assets/**/*.svg',
    { eager: true, import: 'default' }
  );

  const matchedImages: Record<string, string> = {};
  for (const [key, value] of Object.entries(imagesRecord)) {
    if (key.includes(folder)) {
      matchedImages[key] = value;
    }
  }

  return Object.values(matchedImages);
}
