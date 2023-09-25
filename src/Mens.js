import React from 'react'
import { NavLink } from 'react-router-dom'
import Menbox from './Menbox';
import Men from './API';

const Mens = () => {
  const [mendata,setmendata] = React.useState(Men);
  const filteritem = (category)=>
  {
    const list = Men.filter((curele)=>{
      return curele.source === category;  
    });
    setmendata(list);
  }
  return (
    <>
      <div className="men-body" id='mens'>
        <div className="men-navbar">
          <a href='#mens'><span>M</span>en's <span>Collection</span>&nbsp; <i class="fa-brands fa-shopify"></i></a>
          <div className="men-nav1">
            <button onClick={()=> filteritem("Boot")}>Boot</button>
            <button onClick={()=> filteritem("Slipper")}>Slipper</button>
          </div>
          <div className="men-nav2">
            <NavLink className='men-link' to={'/'}>Home</NavLink>
            <NavLink className='men-link' to={'/Womens'}>Women's Collection</NavLink>
            <NavLink className='men-link' to={'/Buy'}>Buy</NavLink>
          </div>
        </div>
        <Menbox mendata = {mendata}/>
      </div>
    </>
  )
}

export default Mens