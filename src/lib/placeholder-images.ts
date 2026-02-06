import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const imageCacheVersion = data.version;
export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;
