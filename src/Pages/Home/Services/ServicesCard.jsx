import React from "react";
import { Link } from "react-router-dom";

const ServicesCard = ({service}) => {
    const {_id,title,img,price} = service;   
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10 rounded-xl">
        <img src={img} alt="Shoes"/>
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{title}</h2>
        <p className="text-xl text-orange-500">Price: ${price}</p>
        <div className="card-actions">
         <Link to={`/book/${_id}`}>
         <button className="btn btn-primary">Book Now</button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
