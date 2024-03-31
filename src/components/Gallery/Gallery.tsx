import scss from './Gallery.module.scss';

function Gallery() {
  return (
    <section className={scss.background}>
      <div className={scss.container}>
        <h2 className={scss.heading}>
          Galeria w trakcie przygotowania. Zdjęcia pojawią się już wkrótce.
        </h2>
        <div>Gallery Container</div>
      </div>
    </section>
  );
}

export default Gallery;
