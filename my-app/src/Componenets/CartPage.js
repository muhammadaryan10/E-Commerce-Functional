import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {  Remove } from '../Action/action';
import { useEffect } from 'react';
import EmptyCartPage from './CartEmpty';
export default function CartPage(props) {
  const getdata = useSelector((state) => state.CartReducer.carts);
  const [price,setprice]=useState (0);
  const data = useSelector((state) => state.CartReducer.carts);
  const dispatch = useDispatch();


  const removeItem = (id) => {
    dispatch(Remove(id)); // Call your removeItemFromCart action creator with the index of the item to be removed
  };


   const subtotal=()=>{
    let price=0;
   getdata.map((ele,p)=>{
     price=parseFloat(ele.price) + price
   })
   setprice(price)
  }
  useEffect(()=>{
subtotal();
  },[subtotal])

  const total = (price) => {
    const totalPrice = parseFloat(price) + 100;
    return totalPrice;
  };
if(getdata.length==0){
  return(
    <EmptyCartPage/>
  )
}
else{
  return (
    <div className='container '>
      <div className="row">
      <div className="col-md-8">
      <table className="table">
        <thead>
          <tr>
            <th scope="col" style={{ alignSelf: "center" }}>IMG</th>
            <th scope="col" style={{ alignSelf: "center" }}>TITLE</th>
            <th scope="col" style={{ alignSelf: "center" }}>PRICE</th>
            <th scope="col" style={{ alignSelf: "center" }}></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                <img
                  src={item.imgurl}
                  style={{ maxHeight: "120px"}}
                  alt="Product"
                />
              </td>
              <td >
                {item.title.slice(0, 30)}
              </td>
              <td className='p-2'>
                <div style={{ display: "flex", flexDirection: "column"}}>
                  <span style={{ alignSelf: "center" }}>{item.price}</span>
                </div>
                    <button className='mt-5 '>
                    Quantity
                  </button>
              </td>
              <td style={{ verticalAlign: "middle", textAlign: "center" }}>
                <button onClick={()=>removeItem("id")}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div className='col-md-4'>
      <div className='checkout-section ' style={{ marginLeft: '20px' }}>
      <div className="checkout-total">
        <h5>ORDER SUMMARY</h5>
          <div className="subtotal">
            <span>Sub total:</span>
            <span>PKR:{price}</span>
          </div>
          <div className="subtotal">
            <span>Delivery:</span>
            <span>PKR:100</span>
          </div>

          <div className="total">
            <span>Total:</span>
            <span>todo</span>
          </div>
        </div>

        <button className="checkout-button">Proceed to Checkout</button>
      </div>
    </div>
    </div>
    </div>
  );
}
 
}
