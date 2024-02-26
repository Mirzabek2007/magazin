import React from 'react';
import { connect } from 'react-redux';
import { action } from './redux';
import { Link } from "react-router-dom"
const OrderPag = (props) => {
  console.log(props);
  return (
    <div>

      <Link to={"/kabn"}><button className='m4' >Kabinet</button> </Link>
      {
        props.users3.map((itm, i) => <div className='qq1'>
          <h3 className='m9'> Call:{itm.call}  </h3>
          <h3 className='m9'> Adres:{itm.adres} </h3>
          <button className='qq2' onClick={(i) => props.del(i)}>x</button>

        </div>

        )
      }
      <button className='qq3' onClick={(i) => props.AllDelet(i)}>All delet</button>
    </div>
  );
}

export default connect((state) => ({ ...state }), action)(OrderPag);

