import { Category } from "@mui/icons-material";
import Card from "./Cards";
import './Recommended.css';
export default function (){
    
    const recommendedMovies = [
  {
    id: 1,
    title: "Mastii",
    genre: ["Drama", "Comedy"],
    language: "Hindi",
    rating: 8.4,
    votes: 295000,
    poster:
      "./../../public/Recommanded/mastii.avif",
  },
  {
    id: 2,
    title: "120 Bahudar",
    genre: ["Action", "Thriller"],
    language: "Hindi",
    rating: 8.8,
    votes: 510000,
    poster:
      "./../../public/Recommanded/120-Bahudar.avif",
  },
  {
    id: 3,
    title: "De De Pyaar De",
    genre: ["Action", "Drama"],
    language: "Telugu",
    rating: 8.5,
    votes: 420000,
    poster:
      "./../../public/Recommanded/De-De-Pyaar.avif",
  },
  {
    id: 4,
    title: "SISU:Road to Revenge",
    genre: ["Action", "Crime", "Drama"],
    language: "Hindi",
    rating: 7.2,
    votes: 720000,
    poster:
      "./../../public/Recommanded/SISU.avif",
  },
  {
    id: 5,
    title: "Wicked:For Good",
    genre: ["Action", "Adventure"],
    language: "Hindi",
    rating: 8.1,
    votes: 310000,
    poster:
      "./../../public/Recommanded/120-Bahudar.avif",
  },
  {
    id: 6,
    title: "Hi Nanna",
    genre: ["Romance", "Drama"],
    language: "Telugu",
    rating: 8.9,
    votes: 160000,
    poster:
      "./../../public/Recommanded/120-Bahudar.avif",
  },
  {
    id: 7,
    title: "Sam Bahadur",
    genre: ["Biography", "Drama"],
    language: "Hindi",
    rating: 8.2,
    votes: 140000,
    poster:
      "./../../public/Recommanded/120-Bahudar.avif",
  },
  {
    id: 8,
    title: "Leo",
    genre: ["Action", "Thriller"],
    language: "Tamil",
    rating: 8.0,
    votes: 500000,
    poster:
      "./../../public/Recommanded/120-Bahudar.avif",
  },
];
    return(
        <div className="recommended-wapper">
            <h1>Recommended Movices</h1>
            <div className="cards-wrapper">
                {recommendedMovies.map((item)=>(
                    <Card data={item}/>
                ))}
            </div>
        </div>
        
        
    );
}