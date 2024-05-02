import { create } from 'zustand';
import { images } from '../components/Gallery/Images';

interface GalleryState {
  page: number;
  pageCount: number;
  displayedImages: Array<{ index: number; src: string; alt: string }>;
  setPage: (page: number) => void;
}

export const useGalleryStore = create<GalleryState>(set => ({
  page: 1,
  pageCount: Math.ceil(images.length / 8),
  displayedImages: getDisplayedImages(1),
  setPage: page =>
    set(state => ({
      ...state,
      page,
      displayedImages: getDisplayedImages(page),
    })),
}));

function getDisplayedImages(page: number): GalleryState['displayedImages'] {
  const itemsPerPage = 8;
  const startIndex = (page - 1) * itemsPerPage;
  return images.slice(startIndex, startIndex + itemsPerPage);
}
