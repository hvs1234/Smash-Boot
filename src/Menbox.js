import React from 'react'
import { NavLink } from 'react-router-dom';

const Menbox = ({mendata}) => {
  return (
    <>
        <div className="men-container">
          {mendata.map((curele)=>{
            return (
                <NavLink to={'/Buy'} className="men-boxes" key={curele.id}>
                    <img src={curele.image} alt="shoe" />
                    <h1>{curele.title}</h1>
                    <div className="men-star">
                       {curele.star1} {curele.star2} {curele.star3} {curele.star4} {curele.star5} {curele.star6}
                    </div>
                    <p>{curele.price}</p>
                </NavLink>
            );
          })}
        </div>

        <div className="footer men-footer">
          <h1><i class="fa-regular fa-copyright"></i>&nbsp; Smash Boot | Men's Collection | All Right Reserved</h1>
        </div>
    </>
  )
}

export default Menbox