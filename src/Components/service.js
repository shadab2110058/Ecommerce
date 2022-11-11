// import './service.css'
import { useRef, useState } from 'react';
// import foodVideo from '../images/foodVideo.mp4'
// import playpauseBtn from '../images/playpause.png'

function Service(){
    const videoref = useRef();
    
    const [visiblePlayerBtn,setVisiblePlayerBtn] = useState(true);
    const playPause=()=>{
            videoref.current.play();
           
            setVisiblePlayerBtn(false);
            
        }
        const displayPlayerBtn=()=>{
                videoref.current.pause();
            
            setVisiblePlayerBtn(true);
    }
return(
    "h" 
);
}

export default Service