import { useRef } from "react";
import './BannerSlider.css';

export default function BannerSlider() {
  const sliderRef = useRef(null);
    const movies = [
  { image: "./../../public/Banner/banner1.avif", title: "Best of Life Events" },
  { image: "./../../public/Banner/banner2.avif", title: "Upcoming Movies" },
  { image: "./../../public/Banner/banner3.avif", title: "Top Rated Shows" },
  { image: "./../../public/Banner/banner4.avif", title: "Top Rated Shows" }
];

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -900,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 900,
      behavior: "smooth",
    });
  };

  return (
    <div className="banner-container">
      <div className="bms-slider-wrapper">
        <button className="slider-btn left" onClick={scrollLeft}>&#8592;</button>
        <div className="bms-cards-wrapper" ref={sliderRef}>
          {movies.map((movie) => (
            <div key={movie.id} className="bms-card">
              <img src={movie.image} alt={movie.title} />
            </div>
          ))}
        </div>
        <button className="slider-btn right" onClick={scrollRight}>&#8594;</button>
      </div>
    </div>
  );
}