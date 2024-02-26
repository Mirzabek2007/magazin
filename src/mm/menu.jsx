import React from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom"
import { action } from './redux';
const Menu = (props) => {
    return (
        <div>
            <div className='m1'>
                    <div className='m2'>    
                           <Link to={"/"}><img   className='n3' src="https://kfc.com.uz/admin/files/4279.svg" alt="" /></Link>        
                           <Link to={"/kar"}><button className='q2'>{props.count} <img className='q1' src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png" alt="" /></button></Link>
                    </div>
                </div>

               <h1 className='q3'>MENU</h1>
            <div className='m5'>

               {
                      props.users.map((itm,i)=><div className='m6'>
                        <img className='m7' src={itm.img} alt="" />
                        <h2 className='m8' >{itm.name}  </h2>
                        <h3  className='m9'>{itm.name2} </h3>
                        <button className='q4' onClick={()=>props.get(itm)} >Get</button>
                      </div>
                     
                    )
                    }
               </div>
        </div>
    );
}

export default connect((state)=>({...state}),action)(Menu);
