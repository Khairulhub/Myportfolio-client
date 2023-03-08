import React from "react";
import { Link } from "react-router-dom";

const PortfolioCard = ({ card }) => {
  // const {card} = props;
  console.log(card);
  return (
    <div>
      <div className="bg-white text-black rounded w-full">
        <img className="rounded w-full" src={card.portfoliourl} alt="" />
  <div className='p-2'>
    
  <h1 className="text-2xl text-left mb-2 ">{card.title}</h1>
        <h1 className=" text-left mb-2">{card.description}</h1>
        <div className="flex justify-between">
          <a
            className="bg-blue-100 px-3 py-2 rounded text-xl bold"
            href={card.show}
          >
            Live Show
          </a>
          <a
            className="bg-blue-100 px-3 py-2 rounded text-xl bold"
            href={card.github}
          >
            Github
          </a>
        </div>
  </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
