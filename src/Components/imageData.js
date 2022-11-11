
import mobile1 from '../mobileImages/oppo2.jpg';
import mobile2 from '../mobileImages/oppo3.jpg';
import mobile3 from '../mobileImages/oppo4.jpg';
import mobile4 from '../mobileImages/OPPO A16.jpg';
import mobile5 from '../mobileImages/OPPO A77s.jpg';
import mobile6 from '../mobileImages/OPPO A16e.jpg';

import MobileCard from './mobileCard';
import React,{ useEffect, useState } from 'react';


const imageData = [
    
{
    location: mobile1,
    mobileName:'OPPO F21 PRO',
    price: 19000,
    id:3
},
{
    location: mobile2,
    mobileName:'OPPO A77',
    price: 19900,
    id:4
},
{
    location: mobile3,
    mobileName:'OPPO A77s',
    price: 20000,
    id:5
},
{
    location: mobile1,
    mobileName:'OPPO F21 PRO',
    price: 22999,
    id:6
},
{
    location: mobile4,
    mobileName:'OPPO A17',
    price: 13999,
    id:7
},
{
    location: mobile5,
    mobileName:'OPPO A3S',
    price: 19999,
    id:8
},
{
    location: mobile6,
    mobileName:'OPPO A16s',
    price: 18890,
    id:9
},
{
    location: mobile1,
    mobileName:'OPPO F21 PRO',
    price: 19000,
    id:10
},
{
    location: mobile2,
    mobileName:'OPPO A7S',
    price: 19900,
    id:11
},
{
    location: mobile3,
    mobileName:'OPPO A17',
    price: 20000,
    id:12
},
{
    location: mobile1,
    mobileName:'OPPO F21 PRO',
    price: 22999,
    id:13
},
{
    location: mobile4,
    mobileName:'OPPO A16',
    price: 13999,
    id:14
},
{
    location: mobile5,
    mobileName:'OPPO F19',
    price: 19999,
    id:15
},
{
    location: mobile6,
    mobileName:'OPPO A16e',
    price: 18890,
    id:16
},
{
    location: mobile1,
    mobileName:'OPPO F21 PRO',
    price: 19000,
    id:17
},
{
    location: mobile2,
    mobileName:'OPPO F17 PRO',
    price: 19900,
    id:18
}
];

export const addToCartData = [];

function addMenuItems(props){
   
    const checkId = false;
    
    const cartDataHandler=(addedCartData)=>{
        
        const cartData={
            location:addedCartData.location,
            mobileName:addedCartData.mobileName,
            price: addedCartData.price,
            quantity: addedCartData.qty,
            id : addedCartData.id
        }
        
        for (let index=0;index<addToCartData.length;index++){
            if(addToCartData[index].id === cartData.id){
                addToCartData[index].qty = addedCartData.qty;
                
            }
               
        }
        if(checkId===false)
            addToCartData.push(cartData);
       

        
    }
    return(<div>
         <MobileCard location={props.location} id={props.id} mobileName={props.mobileName} price={props.price} star={props.star} arivalTime={props.arivalTime} addCartDataHandler={cartDataHandler}/>
        </div>);
}



const data = imageData.map(addMenuItems);
export default data