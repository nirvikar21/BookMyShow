import {useEffect, useState} from 'react';
import Footer from "../common/Footer";
import Header from "../common/Header";
import "./movies.css";
import CardUI from '../components/CardUI';
import Filtter from '../components/Filtter';
import { Link } from 'react-router-dom';
export default function Movies(){
    const allLanguages = [
    "English",
    "Hindi",
    "Tamil",
    "Telugu",
    "Kannada",
    "Malayalam",
    "Punjabi",
    "Gujarati",
    "Bengali"
  ];
  const recommendedMovies = [
    {
      id: 1,
      title: "Mastii4",
      genre: ["Drama", "Comedy"],
      language: "Hindi",
      rating: 8.4,
      votes: 295000,
      img:"./../../public/Recommanded/mastii.avif",
      about:"Three frustrated husbands seek freedom from their dull marriages. A wild idea promises escape and excitement. But what follows is anything but expected.",
      banner:'./../../public/movie-banner/mastiii-4-et00464040-1764352224.avif'
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

    const [selectedLanguages,setselectedLanguages]=useState([]);
    const [page,setPage] = useState('Movies')
    const filtterElement =(item)=>{
        setselectedLanguages(item);
    }
    //console.log("====",selectedLanguages)
    const isMovieAvailable = recommendedMovies.filter(movie =>
        selectedLanguages.includes(movie.language)
    );
    //console.log("====",isMovieAvailable,"====",isMovieAvailable)
    return(<>
      <Header/>
        <div className="layout-grid">
          <div className="left-side">
            <h3>Filter</h3>
            {/* Your Filter Component */}
            <Filtter filtterElement={filtterElement}/>
          </div>

          <div className="right-side">
            <div className="btn-row">
              {allLanguages.map((lang) => (
                <button
                    key={lang}
                    style={{
                    backgroundColor: selectedLanguages.includes(lang) ? "Red" : "white",
                    color: selectedLanguages.includes(lang) ? "white" : "Red",
                    padding: "8px 12px",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    }}
                >
                    {lang}
                </button>
              ))}  
            </div>

            <div className="card-row">
              {
                isMovieAvailable.length>0?
                isMovieAvailable.map((item)=>(
                  <div className='card'>
                    <Link to={`/AboutMovie/${item.title}`}>
                      <img  src={item.img}/>
                    </Link>
                  </div>
                ))
                :
                recommendedMovies.map((item)=>(
                <div className="card">
                  <Link to={`/AboutMovie/${item.title}`}>
                    <img src={item.img} />
                  </Link>
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer/>
    </>)
}