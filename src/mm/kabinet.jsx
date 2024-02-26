import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import Rodal from "rodal"
import { action } from './redux';
const Kabinet = (props) => {

       const [img,setImg]=useState("")
       function imgToStreing(e) {
              const file=e.target.files[0];
              const reader =new FileReader();
              reader.readAsDataURL(file);
              reader.onload=()=>{
                  setImg(reader.result)
              }
              
       }
       return (
              <div>
                     <div className='m1'>
                            <div className='m2'>
                                   <Link to={"/"}><img className='n3' src="https://kfc.com.uz/admin/files/4279.svg" alt="" /></Link>
                                   <button onClick={() => props.ok()} className='m3' >Add</button>
                                   <Link to={"/men"}><button className='m4' >MENU</button> </Link>
                                   <Link to={"/or"}><button className='m4' > OrderPag</button> </Link>
                                  
                            </div>
                     </div>

                     <div className='m5'>
                            {
                                   props.users.map((itm) => <div className='m6'>
                                          <img className='m7' src={itm.img} alt="" />
                                          <h2 className='m8' >{itm.name}  </h2>
                                          <h3 className='m9'>{itm.name2} </h3>
                                          <button onClick={(i) => props.delet(i)} className='m12' >❌</button>
                                          {props.count3}
                                   </div>

                                   )
                            }
                     </div>

                     <Rodal height={300} width={340} visible={props.open} onClose={() => props.ok()} >
                            <input  onChange={(e) =>imgToStreing(e)} className='m10' type="file" />
                            <input className='m10' onChange={(e) => props.name(e.target.value)} placeholder='ismi' type="text" />
                            <input className='m10' onChange={(e) => props.name2(e.target.value)} placeholder="narx" type="text" />
                            <input className='m10' onChange={(e) => props.productCount(e.target.value)} placeholder="tovar soni " type="text" />
                           
                            <button className='m11' onClick={() => props.save(img)}  >save</button>
                     </Rodal>

              </div>
       );
}

export default connect((state) => ({ ...state }), action)(Kabinet);
