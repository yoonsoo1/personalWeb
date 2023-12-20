import React from 'react';

function ExCard({ imageName, image, title, company, date, description }) {

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg exp-box">
      <div className="mx-4 mt-3">
        {imageName === "USC" ? <img className="w-full" src={image} alt={title} /> : <img className="logo-image" src={image} alt={title} />}        
      </div>
        
      <div className="text-left">
        <div className="px-6 py-2">
          <div className="font-bold text-xl text-white">{title}</div>
          <div className="font-bold text-xl text-white">{company}</div>
        </div>
        <div className="text-white text-base px-6">{date}</div>
        <div className="px-6 pt-4 pb-2">
          {description.map((desc) => (
            <div className="text-white text-base mb-2">{desc}</div>
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default ExCard;
