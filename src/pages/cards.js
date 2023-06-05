import React from 'react'
import './cards.css';
import List from '../data';
const Cards = () => {
  return (
    <div>

<div className="sub-containerProducts">
        <div className="rowProducts">
          {List.map((item)=>(
             <div className="column" key={item.id}>
             <img src={item.image} alt="" />
             <h4>{item.name}</h4>
             <div className="ratings">
               {item.rating.map((star, index) => (
                 <i
                   key={index}
                   className={`fa-solid fa-star${
                     star === 0.5 ? "-half-stroke" : ""
                   }`}
                 ></i>
               ))}
             </div>
             <h5>{item.price}</h5>
             <button className="btnBucket">Add to Bucket</button>
           </div>  
          ))}
               </div>

        </div>
                
    </div>
  )
}

export default Cards;