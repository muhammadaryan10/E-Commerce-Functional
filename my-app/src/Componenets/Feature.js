import React, { Component } from 'react'
import Product from './Product';
export const  FeatureDetail=[
  {
    "title":"MACTREM ST46 Selfie Stick Camera Stand Tripod For Smart Mobile Phone Camera",
    "des":"MACTREM ST46 Lightweight Aluminum Alloy Selfie Stick Camera Stand Tripod For Smart Mobile Phone Camera officiaL PRICE 5873",
    "imgurl":"https://savoy.nordicmade.com/wp-content/uploads/2015/08/product-classic-chair-2-300x372.jpg",
    "price":"3500",
    "deleteprice":"5000"
},
{
    "title":"ChangM Wall Lights Indoor,1Pcs Up Down Wall Light",
    "des":"ChangM Wall Lights Indoor 1Pcs Up Down Wall Light 16W 3000K Modern Style Aluminum LED Wall Lamps,Perfect for Bedroom Living Room Hallway Corridor Stairs Warm White        ",
    "imgurl":"https://m.media-amazon.com/images/I/61Zz8NoXBmL._AC_UF1000,1000_QL80_.jpg",
    "price":"5000",
},
{
    "title":"ATUMTEK Bluetooth Selfie Stick Tripod",
    "des":"ATUMTEK Bluetooth Selfie Stick Tripod, Extendable 3 in 1 Aluminum Selfie Stick with Wireless Remote and Tripod Stand 270 Rotation for iPhone 13/12/11 Pro/XS Max/XS/XR/X, Samsung and Smartphone Black",
    "imgurl":":https://web.whatsapp.com/0a17a037-4724-403a-b8f5-55a537a3517c",
    "price":"5000",
},
]

export default class ProductContainer extends Component {
  constructor(){
      super();
      this.state={
        FeatureDetail:FeatureDetail,
      }
  }
render() {
  return (
    <div style={{"backgroundColor":"#EEEEEE",padding:"12px"}}>
    <div className='container  my-5' >
    <span><h1>Feature Product </h1></span><span><button>show More</button></span>`
      <div className="row" >
          {this.state.FeatureDetail.map((element)=>
          (<Product
          title={element.title.slice(0,36)}
          // des={element.des.slice(0,80)}
          imgurl={element.imgurl}
          price={element.price}
          deleteprice={element.deleteprice}
          />))
          }
      </div>
    </div>
    </div>
  )
}
}