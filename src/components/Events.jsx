import { useRef } from "react";
import './Events.css';
export default function Events(){
     const sliderRef = useRef();
    const scrollLeft = () => {
        sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    };
    const scrollRight = () => {
        sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    };
    const eventsData = [
        {
            id: 1,
            title: "Sunburn Arena ft. Martin Garrix",
            date: "12 Dec, 2025",
            location: "Delhi",
            img: "./../../public/Events/Events_1.avif"
        },
        {
            id: 2,
            title: "Book Launch by Chetan Bhagat",
            date: "02 Jan, 2026",
            location: "Mumbai",
            img: "./../../public/Events/Events_2.avif"
        },
        {
            id: 3,
            title: "The Comedy Show ft. Zakir Khan",
            date: "05 Feb, 2026",
            location: "Bangalore",
            img: "./../../public/Events/Events_3.avif"
        },
        {
            id: 4,
            title: "Arijit Singh Live Concert",
            date: "20 Jan, 2026",
            location: "Kolkata",
            img: "./../../public/Events/Events_3.avif"
        },
        {
            id: 5,
            title: "Arijit Singh Live Concert",
            date: "20 Jan, 2026",
            location: "Kolkata",
            img: "./../../public/Events/Events_3.avif"
        },
        {
            id: 6,
            title: "Arijit Singh Live Concert",
            date: "20 Jan, 2026",
            location: "Kolkata",
            img: "./../../public/Events/Events_3.avif"
        },{
            id: 7,
            title: "Arijit Singh Live Concert",
            date: "20 Jan, 2026",
            location: "Kolkata",
            img: "./../../public/Events/Events_3.avif"
        },{
            id: 8,
            title: "Arijit Singh Live Concert",
            date: "20 Jan, 2026",
            location: "Kolkata",
            img: "./../../public/Events/Events_3.avif"
        }
    ];
    return(
        <div className="slider-container">
          <h1>The Best Of Life Events</h1>
            <button className="slider-btn left" onClick={scrollLeft}>
              &#8592;
            </button>
          <div className="cards-wrapper" ref={sliderRef}>
            {eventsData.map((item) => (
              <img src={item.img} alt={item.title} width={"200px"} />
            ))}
          </div>
          <button className="slider-btn right" onClick={scrollRight}>
            &#8594;
          </button>
        </div>
    )
};