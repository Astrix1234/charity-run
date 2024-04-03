import { Pagination } from '@mui/material';
import scss from './GalleryPagination.module.scss';

function GalleryPagination() {
  return (
    <>
      <div className={scss.container}>
        <h1>
          <Pagination />
        </h1>
      </div>
    </>
  );
}

export default GalleryPagination;
