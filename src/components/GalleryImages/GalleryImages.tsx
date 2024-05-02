import { useState } from 'react';
import { Pagination } from '@mui/material';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import { useGalleryStore } from '../../Zustand/useGalleryStore';
import scss from './GalleryImages.module.scss';

function GalleryImages() {
  const { page, pageCount, displayedImages, setPage } = useGalleryStore();
  const [lightboxOpen, setLightboxOpen] = useState(-1);

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setPage(page);
  };

  const handleImageClick = (clickedIndex: number) => {
    setLightboxOpen(clickedIndex);
  };

  const handleLightboxClose = () => {
    setLightboxOpen(-1);
  };

  return (
    <div className={scss.gallery}>
      <div className={scss.gallery__pagination}>
        <Pagination count={pageCount} onChange={handlePageChange} page={page} />
      </div>
      <ul className={scss.gallery__list}>
        {displayedImages.map((image, imageIndex) => (
          <li key={imageIndex}>
            <img
              className={scss.gallery__img}
              src={image.src}
              alt={image.alt}
              onClick={() => handleImageClick(imageIndex)}
              loading="lazy"
            />
          </li>
        ))}
      </ul>
      <Lightbox
        index={lightboxOpen}
        open={lightboxOpen >= 0}
        close={handleLightboxClose}
        slides={displayedImages.map(image => ({
          src: image.src,
          caption: image.alt,
        }))}
      />
    </div>
  );
}

export default GalleryImages;
