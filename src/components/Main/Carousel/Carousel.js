import "./Carousel.css";

const Carousel = () => {
  return (
    <section className="clean-block slider dark">
      <div className="container">
        <div className="block-heading carousel-heading">
          <h1>Welcome to Jobs Agency</h1>
        </div>
        <div className="carousel slide" data-bs-ride="carousel" id="carousel-1">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="w-100 d-block"
                src="assets/img/carousel/slider-image-1.jpg"
                alt="Slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="w-100 d-block"
                src="assets/img/carousel/slider-image-2.jpg"
                alt="Slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="w-100 d-block"
                src="assets/img/carousel/slider-image-3.webp"
                alt="Slide"
              />
            </div>
          </div>
          <div>
            <a
              className="carousel-control-prev"
              href="#carousel-1"
              role="button"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
              <span className="visually-hidden">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carousel-1"
              role="button"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
              <span className="visually-hidden">Next</span>
            </a>
          </div>
          <ol className="carousel-indicators">
            <li data-bs-target="#carousel-1" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#carousel-1" data-bs-slide-to="1"></li>
            <li data-bs-target="#carousel-1" data-bs-slide-to="2"></li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
