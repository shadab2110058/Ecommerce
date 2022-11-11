import React, { useEffect, useState } from 'react';
import './carousel.css'
// import right from '../images/right-arrow.svg'
// import left from '../images/left-arrow.svg'



const Carousel =(props)=>{
    const {children, show} = props;
    const [currentIndex, setCurrentIndex] = useState(0)
    // const [currentShow, setCurrentShow] = useState(show)
    const [length,setLength] = useState(children.length)
    // const [midAnimation,setMidAnimation] = useState(currentIndex)
    const next=()=>{
        if (currentIndex<(length-show)){
            setCurrentIndex(prevState => prevState+1)
        }
    }
    const prev =()=>{
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
            
        }
    }
    // const windowWidth= window.innerWidth;
    // if(windowWidth<=800){
    //     setCurrentShow(2);
    // }
    useEffect(()=>{
        setLength(children.length)}
        ,[children])
        
        // useEffect(()=>{
        // document.querySelector('currentIndex')
    // },[currentIndex])

    return(
        <div className='carousel-container'>
            <div className='carousel-wrapper'>
            
            {/* Previous Button */}
            
            {
                currentIndex > 0 &&
                <button onClick={prev} className="arrow left-arrow">
                    ◀
                </button>
            }
            
                {/* <button onClick={prev} className="arrow left-arrow">
                    <img src={left} alt ='left-arrow' />
                </button> */}
            
                <div className='carousel-content-wrapper' >
                    <div className={`carousel-content show-${show}`} style={{ transform: `translateX(-${currentIndex * (100 / show)}%)` }}>
                        {children}
                    </div>
                </div>
            
                {
                    currentIndex < (length - show) &&
                <button onClick={next} className="arrow right-arrow">
                    ▶
                </button>
                }
                    {/* <button onClick={next} className="arrow right-arrow">
                        
                    <img src={right} alt ='right-arrow' />
                    </button> */}
                    
                    
            </div>
        </div>
    );
}



export default Carousel