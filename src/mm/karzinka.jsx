import React from 'react';
import { connect } from 'react-redux';
import { action } from './redux';
import { Link } from "react-router-dom"
import Rodal from "rodal"
const Karzinka = (props) => {
  console.log(props);
  return (
    <div>
      <Link to={"/men"}> <button className='n4' >Menu</button> </Link>
      <h1><img className='n8' src="https://cdn-icons-png.flaticon.com/128/5585/5585856.png" alt="" />+998 (78) 129 70 00</h1>
      <h1 className='q3'>Karzinka</h1>

      <div className='m5'>
        {
          props.users2.map((itm,i) => <div className='m6'>
            <img className='m7' src={itm.img} alt="" />
            <h2 className='m8' >{itm.name}  </h2>
            <h3 className='m9'>{itm.name2} </h3>
            <button className='l1' onClick={() => props.plus(i)}  >+</button>
            {
              itm.count2
            }
            <button className='l2' onClick={() => props.min(i)} >-</button>
          </div>

          )
        }

      </div>
      <button onClick={() => props.bay()} className='z2'><img className='z1' src="https://cdn-icons-png.flaticon.com/128/5637/5637217.png" alt="" /></button>


      <Rodal visible={props.open2} onClose={() => props.bay()} >
        <input className='m10' onChange={(e) => props.adres(e.target.value)} placeholder='adres' type="text" />
        <input className='m10' onChange={(e) => props.call(e.target.value)} placeholder='call....' type="text" />
        <Link to={"/"} > <button className='m11' onClick={() => props.bay2()}>ok</button></Link>


      </Rodal>


    </div>
  );
}

export default connect((state) => ({ ...state }), action)(Karzinka);
