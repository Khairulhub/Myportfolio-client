import React from 'react';

const PortfolioCard = ({card}) => {
    // const {card} = props;
    return (
        <div>
             <div className="bg-white text-black rounded">
              {/* <img src={card.img} alt="" /> */}
              <h1>{card.title}</h1>
              <p>{card.show}</p>
              <p>{card.github}</p>
            </div>
        </div>
    );
};

export default PortfolioCard;