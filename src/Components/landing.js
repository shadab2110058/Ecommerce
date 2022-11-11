import './landing.css'
import hero from '../images/mobie.png'
import Button from './button'
import NavBar from './navBar'
import InputBox from './inputBox'

function Landing(){
    return(
        <div className='wrapLanding'>
            <NavBar />
            <div className='landing'>
                <div className='heroContent'>
                    <h1 className='headingContent'>New Collection Smart Phones in India</h1>
                    <p className='content'>Latest technology smart phones  </p>
                    <InputBox text='Search Mobile you love' class='inputBoxLanding'/>
                    <Button text='Search' class='accent'/>
                </div>
                <div className='heroImage'><img src={hero} alt='hero' /></div>
            </div>
        </div>
    );
}

export default Landing;