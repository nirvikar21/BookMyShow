import Header from "../common/Header";
import { useParams } from "react-router-dom";
import "./AboutMovie.css";
import { DialogContent } from "@mui/material";
export default function AboutMovie(){
    const {title} = useParams()
    console.log(title)
    const Movies = [
    {
      id: 1,
      title: "Mastii4",
      genre: ["Drama", "Comedy"],
      language: "Hindi",
      rating: 8.4,
      votes: 295000,
      img:"./Recommanded/mastii.avif",
      about:"Three frustrated husbands seek freedom from their dull marriages. A wild idea promises escape and excitement. But what follows is anything but expected.",
      banner:'/movie-banner/mastiii-4-et00464040-1764352224.avif'
    },
    {
      id: 2,
      title: "120 Bahudar",
      genre: ["Action", "Thriller"],
      language: "Hindi",
      rating: 8.8,
      votes: 510000,
      img:"/Recommanded/120-Bahudar.avif",
    },
    {
      id: 3,
      title: "De De Pyaar De",
      genre: ["Action", "Drama"],
      language: "Telugu",
      rating: 8.5,
      votes: 420000,
      img:"/Recommanded/De-De-Pyaar.avif",
    },
    {
      id: 4,
      title: "SISU:Road to Revenge",
      genre: ["Action", "Crime", "Drama"],
      language: "Hindi",
      rating: 7.2,
      votes: 720000,
      img:"/Recommanded/SISU.avif",
    },
    {
      id: 5,
      title: "Wicked:For Good",
      genre: ["Action", "Adventure"],
      language: "Hindi",
      rating: 8.1,
      votes: 310000,
      img:"/Recommanded/120-Bahudar.avif",
    },
    {
      id: 6,
      title: "Hi Nanna",
      genre: ["Romance", "Drama"],
      language: "Telugu",
      rating: 8.9,
      votes: 160000,
      img:"/Recommanded/120-Bahudar.avif",
    },
    {
      id: 7,
      title: "Sam Bahadur",
      genre: ["Biography", "Drama"],
      language: "Hindi",
      rating: 8.2,
      votes: 140000,
      img:"/Recommanded/120-Bahudar.avif",
    },
    {
      id: 8,
      title: "Leo",
      genre: ["Action", "Thriller"],
      language: "Tamil",
      rating: 8.0,
      votes: 500000,
      img:"/Recommanded/120-Bahudar.avif",
    },
];
    const selectedMovies = Movies.filter(movie => movie.title === "Mastii4");
    console.log(selectedMovies[0].banner)
    return(
        <>
            <Header/>
            <div className="banner">
                <div className="banner-content">
                    <img className="movie-poster" src={selectedMovies[0].img} />
                    <div className="movie-info">
                        <h1>{selectedMovies[0].title}</h1>
                        <div className="rate-div">
                            * 6.3/10 (8.4k+ Votes) 
                            <button>Rate now</button>
                        </div>
                        <div className="rate-content">
                            2h 22m • Adult,Comedy • A •21 Nov, 2025
                        </div>
                        <div className="aaa">
                            <span>2D</span>
                            <span>Hindi</span>
                        </div>
                        <div className="book-ticket-div">
                            <button className="book-ticket">Book tickets</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-container">
                <h2>About the movie</h2>  
                <p>Three frustrated husbands seek freedom from their dull marriages. A wild idea promises escape and excitement. But what follows is anything but expected.</p>  
            </div>
            <div className="">
                <h2>Top offers for you</h2>
            </div>
        </>
    )
}