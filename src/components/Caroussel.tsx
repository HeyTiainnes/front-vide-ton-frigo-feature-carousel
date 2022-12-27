const Caroussel = () => {
  return (
    <div
      id='carouselExampleInterval'
      className='carousel slide'
      data-bs-ride='carousel'
    >
      <div className='carousel-inner'>
        <h2>
          Coucou c'est Philippe, on a un GIT un peu plus propre et un carousel
          fonctionnel.
        </h2>
        <div className='carousel-item active' data-bs-interval='3000'>
          {/* mise en place d'un interval de temps entre slide 1 et slide 2 */}
          <svg
            className='bd-placeholder-img bd-placeholder-img-lg d-block w-100'
            width='800'
            height='400'
            xmlns='./imageCarousel/caddieVide.png'
            role='img'
            aria-label='Placeholder: First slide'
            preserveAspectRatio='xMidYMid slice'
            focusable='false'
          >
            <title>Placeholder</title>
            <rect width='100%' height='100%' fill='#777'></rect>
            <text x='50%' y='50%' fill='#555' dy='.3em'>
              First slide
            </text>
          </svg>
        </div>
        <div className='carousel-item' data-bs-interval='3000'>
          {/* mise en place d'un interval de temps entre slide 2 et slide 3 */}
          <svg
            className='bd-placeholder-img bd-placeholder-img-lg d-block w-100'
            width='800'
            height='400'
            xmlns='http://www.w3.org/2000/svg'
            role='img'
            aria-label='Placeholder: Second slide'
            preserveAspectRatio='xMidYMid slice'
            focusable='false'
          >
            <title>Placeholder</title>
            <rect width='100%' height='100%' fill='#666'></rect>
            <text x='50%' y='50%' fill='#444' dy='.3em'>
              Second slide
            </text>
          </svg>
        </div>
        <div className='carousel-item' data-bs-interval='3000'>
          {/* mise en place d'un interval de temps entre slide 3 et slide 1 */}
          <svg
            className='bd-placeholder-img bd-placeholder-img-lg d-block w-100'
            width='800'
            height='400'
            xmlns='http://www.w3.org/2000/svg'
            role='img'
            aria-label='Placeholder: Third slide'
            preserveAspectRatio='xMidYMid slice'
            focusable='false'
          >
            <title>Placeholder</title>
            <rect width='100%' height='100%' fill='#555'></rect>
            <text x='50%' y='50%' fill='#333' dy='.3em'>
              Third slide
            </text>
          </svg>
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

export default Caroussel;
