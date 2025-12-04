import { useRef } from "react";
import './Card.css';

export default function CardUI() {
  const sliderRef = useRef(null);
  const recommendedMovies = [
    {
      id: 1,
      title: "Mastii",
      genre: ["Drama", "Comedy"],
      language: "Hindi",
      rating: 8.4,
      votes: 295000,
      img:"./../../public/Recommanded/mastii.avif",
    },
    {
      id: 2,
      title: "120 Bahudar",
      genre: ["Action", "Thriller"],
      language: "Hindi",
      rating: 8.8,
      votes: 510000,
      img:"./../../public/Recommanded/120-Bahudar.avif",
    },
    {
      id: 3,
      title: "De De Pyaar De",
      genre: ["Action", "Drama"],
      language: "Telugu",
      rating: 8.5,
      votes: 420000,
      img:"./../../public/Recommanded/De-De-Pyaar.avif",
    },
    {
      id: 4,
      title: "SISU:Road to Revenge",
      genre: ["Action", "Crime", "Drama"],
      language: "Hindi",
      rating: 7.2,
      votes: 720000,
      img:"./../../public/Recommanded/SISU.avif",
    },
    {
      id: 5,
      title: "Wicked:For Good",
      genre: ["Action", "Adventure"],
      language: "Hindi",
      rating: 8.1,
      votes: 310000,
      img:"./../../public/Recommanded/120-Bahudar.avif",
    },
    {
      id: 6,
      title: "Hi Nanna",
      genre: ["Romance", "Drama"],
      language: "Telugu",
      rating: 8.9,
      votes: 160000,
      img:"./../../public/Recommanded/120-Bahudar.avif",
    },
    {
      id: 7,
      title: "Sam Bahadur",
      genre: ["Biography", "Drama"],
      language: "Hindi",
      rating: 8.2,
      votes: 140000,
      img:"./../../public/Recommanded/120-Bahudar.avif",
    },
    {
      id: 8,
      title: "Leo",
      genre: ["Action", "Thriller"],
      language: "Tamil",
      rating: 8.0,
      votes: 500000,
      img:"./../../public/Recommanded/120-Bahudar.avif",
    },
];

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="Recommended-container">
      <h1>Recommended Movies</h1>
      <button className="slider-btn left" onClick={scrollLeft}>
        &#8592;
      </button>
      <div className="cards-wrapper" ref={sliderRef}>
        {recommendedMovies.map((item) => (
          <img src={item.img} alt={item.title} width={"200px"} />
        ))}
      </div>
      <button className="slider-btn right" onClick={scrollRight}>
        &#8594;
      </button>
    </div>
  );
}