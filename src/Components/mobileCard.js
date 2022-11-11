import {  useState } from 'react';
import './mobileCard.css'
// import add from '../images/buttonAdd.svg'
// import remove from '../images/buttonRemove.svg'

function MobileCard(props){
    const [currentQty,setNewQty] = useState(1);
    const [invisible,setInvisible] = useState(true);
    const cartDataObj = {
        ...props,
        qty :currentQty
    }

    const addMobile=()=>{
        // console.log(cartDataObj);
        
        setNewQty(currentQty+1);
        // cartDataObj.qty = currentQty;
        setInvisible(false);
        props.addMobileDataHandler(cartDataObj);
    }
    
    const removeMobile=()=>{
        // setNewQty(currentQty-1);
        if(currentQty>0){
            setNewQty(currentQty-1);
            // console.log(cartDataObj);
            // console.log(currentQty);
        }
        if((currentQty-1)===1){
            setInvisible(true);
        }

    }
    return(
        <div className='wrap--mobileCard'>
        
            <img src={props.location} alt='Mobile' className='mobileImage'></img>
            <div className='discountTag'> 60% off</div>
            <div className='mobileAbout'>
                <div className="mobileAboutDetails">
                    <p className='mobileName'>{props.mobileName}</p>
                    <p className='mobilePrice'>₹{props.price} </p>
                </div>
                <div className="mobileAboutReviews">
                  <button className='buyBtn'>Buy</button>
                  <button className='addToCard'>AddToCard</button>
                    <div className={invisible?'Amount ':'Amount AmountBorder'}>
              
                    </div>
                    
                </div>

            </div>
        </div>
    );
}


export default MobileCard