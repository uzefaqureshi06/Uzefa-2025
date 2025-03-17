import React, { useEffect } from 'react';
import './Card.css';
import { useDispatch, useSelector } from "react-redux";
import { getAllCard } from '../../redux/action/card';

const Card = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.card);

  useEffect(() => {
    dispatch(getAllCard());
  }, [dispatch]);

  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {cards?.length > 0 ? (
        cards.map((card) => (
          <div 
            key={card._id} 
            className=" bg-black text-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 max-w-sm mx-auto p-4"
           t
          >
            {/* Profile & Timestamp */}
            <header className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=1480&q=80"
                  className="w-10 h-10 rounded-full mr-3"
                  alt="Profile"
                />
                <p className="text-white text-sm">7 months ago</p>
              </div>
              <a href="#" className="cursor-pointer">
              <a href="#" className="cursor-pointer">
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    style={{ fill: "rgba(255, 255, 255, 1)", transform: "", msFilter: "" }} // ✅ Fixed
  >
    <path d="M5.5 15a3.51 3.51 0 0 0 2.36-.93l6.26 3.58a3.06 3.06 0 0 0-.12.85 3.53 3.53 0 1 0 1.14-2.57l-6.26-3.58a2.74 2.74 0 0 0 .12-.76l6.15-3.52A3.49 3.49 0 1 0 14 5.5a3.35 3.35 0 0 0 .12.85L8.43 9.6A3.5 3.5 0 1 0 5.5 15zm12 2a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5zm0-13A1.5 1.5 0 1 1 16 5.5 1.5 1.5 0 0 1 17.5 4zm-12 6A1.5 1.5 0 1 1 4 11.5 1.5 1.5 0 0 1 5.5 10z"></path>
  </svg>
</a>

              </a>
            </header>

            {/* Main Image with Border Radius */}
            <div className="mt-3">
              <img
                src={card.imageUrl || "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg"}
                className="w-full rounded-lg"
                alt="Card"
              />
            </div>

            {/* Title & Description */}
            <div className="mt-3">
              <h3 className="text-lg font-bold">{card.title}</h3>
              <p className="text-white text-sm line-clamp-2">
                {card.description}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-white text-lg">Loading cards...</p>
      )}
    </div>
  );
};

export default Card;
