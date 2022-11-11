import './shopSection.css';
import React, { useState } from 'react';
import data from './imageData'
import Carousel from './carousel';
import InputBox from './inputBox'


function ShopSection(){
    const [visible,setVisible]= useState(false);
    const displayRequestBox=()=>{
        setVisible(true);
    }
    const cancelRequest=(e)=>{
        setVisible(false);
        e.preventDefault();
    }
    const submitRequest=(e)=>{
        // const form = document.getElementsByClassName('requestBox');
        // const formData = new FormData(form);
        // for(const [key,value] of formData)
        //     console.log(key,value);
        setVisible(false);
        e.preventDefault();
    }


    

    return(
        <div className="wrap--shopSection">
            <div className='wrap--shop'>
                <h2>Home shop</h2>
                <div className='shopSection'>
                    {data}
                </div>
            </div>
            
                <div className=''>
                    <h2 className='carouselHeading'>Popular Items</h2>
                    <div className="wrap--carousel">
                        <Carousel show={3}>
                            {data}
                        </Carousel>
                    </div>
                    
                    {/* <div className="wrap--requestBtn"><button className='green' onClick={displayRequestBox} >Request a dish</button></div> */}
                </div>
            

            {/* REQUESTING A DISH  */}
            <div className={visible?'blurBackground':''}>
            <section className={visible?'wrap--request':'requestInvisible wrap--request'}>
                <h2 className='requestHeading'>Request a Dish</h2>
                <form action="" className='requestBox' onSubmit={submitRequest}>
                    <div className='wrap--requestInput'>
                        <label>Name*</label>
                        <InputBox text='Enter name of the dish' class='requestInput' />
                    </div>
                    <div className="wrap--requestInput">
                        <label>Upload an image</label>
                        <InputBox text='Paste a URL' class='requestInput' />
                    </div>
                    <div className="requestBoxBtn">
                        <button  className='requestBtn' onClick={cancelRequest}>Cancel</button>
                        <button className='requestBtn' type='submit'>Submit Request</button>
                    </div>
                </form>
                
            </section>
            </div>
            {/* <Footer /> */}
        </div>
    );
}

export default ShopSection


