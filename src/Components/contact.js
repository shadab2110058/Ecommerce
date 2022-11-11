import './contact.css'

import mobileDelivery from '../images/mobileDelivery.webp'
import Button from './button';


function Contact(){
    return(
        <div class="wrap--contact">
            <div className='contact'>
                <h2 className='contactHeading'>Do you have a question or want to become a seller?</h2>
                <h4 className='contactSubHeading'>Fill this form and our manager will contact you next 48 hours.</h4>
                <form className="wrapInput" method='post' action='https://formspree.io/f/myyvplwb'>
                    <div class="inputContact">
                        <input placeholder='Your Name'  class='inputBoxContact' name='name' required/>
                        <input placeholder='Your e-mail' type='email' class='inputBoxContact' name='email'/>
                        <textarea placeholder='Your message' className='contactMessage' rows={8} ></textarea>
                    </div>
                    <br />
                    <Button type='submit' text='Submit' class='blue' />
                </form>
            </div>
            <div className='contactDeliveryGuy'><img src={mobileDelivery} alt='Delivery Guy' /></div>
        </div>
    );
}


export default Contact