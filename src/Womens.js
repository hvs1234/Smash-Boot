import React from 'react'
import { NavLink } from 'react-router-dom'
import Women from './API2';
import Womenbox from './Womenbox'

const Womens = () => {
  const [womendata,setwomendata] = React.useState(Women);
  const filteritem = (category)=>
  {
    const list = Women.filter((curele)=>{
      return curele.source === category;  
    });
    setwomendata(list);
  }
  return (
    <>
      <div className="women-body" id='women'>
        <div className="women-navbar">
          <a href='#women'><span>W</span>omen's <span>Collection</span>&nbsp; <i class="fa-brands fa-shopify"></i></a>
          <div className="women-nav1">
            <button onClick={()=> filteritem('Boot')}>Boot</button>
            <button onClick={()=> filteritem('Slipper')}>Slipper</button>
          </div>
          <div className="women-nav2">
            <NavLink className='women-link' to={'/'}>Home</NavLink>
            <NavLink className='women-link' to={'/Mens'}>Men's Collection</NavLink>
            <NavLink className='women-link' to={'/Buy'}>Buy</NavLink>
          </div>
        </div>

        <Womenbox womendata = {womendata}/>
      </div>
    </>
  )
}

export default Womens