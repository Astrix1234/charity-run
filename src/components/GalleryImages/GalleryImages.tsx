import { Pagination } from '@mui/material';
import { useGalleryStore } from '../../Zustand/useGalleryStore';
import scss from './GalleryImages.module.scss';

function GalleryImages() {
  const { page, pageCount, displayedImages, setPage } = useGalleryStore();

  const handleChange = (_event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  return (
    <div className={scss.gallery}>
      <h1>Current Page is {page}</h1>
      <Pagination count={pageCount} onChange={handleChange} page={page} />
      <ul className={scss.gallery__list}>
        {displayedImages.map((image, index) => (
          <li key={index}>
            <img
              className={scss.gallery__img}
              src={image.src}
              alt={image.alt}
            />
          </li>
        ))}
      </ul>
      <Pagination count={pageCount} onChange={handleChange} page={page} />
    </div>
  );
}

export default GalleryImages;
