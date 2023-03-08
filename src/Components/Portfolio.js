import React, { useEffect, useState } from "react";
import PortfolioCard from "./PortfolioCard";
import { AiFillFileAdd } from "react-icons/ai";
// import SequreForm from "./Add/SequreForm";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/portfolio")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);


    // const handleSequreform = () => {
    //     console.log("clicked");

    // }
  return (
    <div className="bg-[#0b111e] py-[60px] w-full ">
      <div className="max-w-[1240px]  text-white  text-center mx-auto py-[125px] relative">
        <div className="flex justify-between mb-5">
          <h1 className="text-4xl font-bold">Portfolio</h1>
          <Link to="/sequre" className="bg-sky-500 p-4 " >
            <AiFillFileAdd className="inline-block"></AiFillFileAdd> Add Portfolio
          </Link>
        </div>
        <div class="grid grid-cols-4 gap-4">
          {cards.map((card) => (
            <PortfolioCard key={card._id} card={card}></PortfolioCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
