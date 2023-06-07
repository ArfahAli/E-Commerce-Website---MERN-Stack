import React from 'react'
import './cards.css';
const Cards = ({List,addToCart}) => {
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
             <h5>${item.price}</h5>
             <button
             onClick={()=>addToCart(item)}
              className="btnBucket">Add to Bucket</button>
           </div>  
          ))}
               </div>
                    <div className="sub-containerProducts">

      <div className="pg-btns">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span className="fas fa-arrow-right"></span>
      </div>
      </div>
        </div>
                
    </div>
  )
}

export default Cards;