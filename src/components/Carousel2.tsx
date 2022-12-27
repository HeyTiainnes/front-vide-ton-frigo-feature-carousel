const Carousel2 = () => {
  return (
    <div
      id='carouselExampleInterval'
      className='carousel slide'
      data-bs-ride='carousel'
    >
      <div className='carousel-inner'>
        <div className='carousel-item active' data-bs-interval='2000'>
          <img
            src='/imageCarousel/caddieVide.png'
            className='d-block w-50'
            alt='Pourquoi ça ne marche pas ?'
          />
        </div>
        <div className='carousel-item' data-bs-interval='2000'>
          <img
            src='/imageCarousel/caddiePlein.jpg'
            className='d-block w-50'
            alt='caddie plein'
          />
        </div>
        <div className='carousel-item' data-bs-interval='2000'>
          <img
            src='/imageCarousel/femmeAvecCaddie.jpg'
            className='d-block w-50'
            alt='caddie vide'
          />
        </div>
      </div>
      <button
        className='carousel-control-prev'
        type='button'
        data-bs-target='#carouselExampleInterval'
        data-bs-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Previous</span>
      </button>
      <button
        className='carousel-control-next'
        type='button'
        data-bs-target='#carouselExampleInterval'
        data-bs-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Next</span>
      </button>
    </div>
  );
};

export default Carousel2;
