import React from 'react';
import {Link} from "react-router-dom"
const Navbar = () => {
    return (
        <div>
             <div className='n1'>
                <div className='n2'>
                  <img className='n3' src="https://kfc.com.uz/admin/files/4279.svg" alt="" />
                 <Link  to={"/kabn"}>  <button className='n4'  >KABINET</button>   </Link>  
                 <Link to={"/men"}><button className='n5'>MENU</button></Link>
                </div>
                  
             </div>
             <img className='n6' src="https://kfc.com.uz/admin/files/5249.png" alt="" />
             <img className='n6' src="https://kfc.com.uz/admin/files/5356.jpg" alt="" />
        </div>
    );
}

export default Navbar;
